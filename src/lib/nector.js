const reviewCache = new Map();

export const fetchNectorReviews = async (productId) => {
  if (!productId) return { count: 0, average: 0 };

  if (reviewCache.has(productId)) {
    return reviewCache.get(productId);
  }

  try {
    const res = await fetch(
      `https://platform.nector.io/api/v2/merchant/reviews?reference_product_id=${productId}`,
      {
        headers: {
          "x-apikey": process.env.NECTOR_API_KEY,
          "x-workspaceid": process.env.NECTOR_WORKSPACE_ID,
          "x-source": "web",
        },
      }
    );

    const json = await res.json();

    const stats = json?.data?.stats || [];
    const count = json?.data?.count || 0;

    let total = 0;
    let ratingCount = 0;

    stats.forEach(s => {
      total += Number(s.rating) * Number(s.count);
      ratingCount += Number(s.count);
    });

    const reviews = {
      count,
      average: ratingCount
        ? Number((total / ratingCount).toFixed(1))
        : 0,
    };

    reviewCache.set(productId, reviews);
    setTimeout(() => reviewCache.delete(productId), 5 * 60 * 1000);

    return reviews;
  } catch {
    return { count: 0, average: 0 };
  }
};

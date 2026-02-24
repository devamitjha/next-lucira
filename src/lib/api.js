/* ================= GENERIC API FETCH ================= */

const apiFetch = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const contentType = res.headers.get("content-type");

  let data;

  if (contentType?.includes("application/json")) {
    data = await res.json();
  } else {
    throw new Error("Invalid server response");
  }

  if (!res.ok) {
    throw new Error(data?.error || "Something went wrong");
  }

  return data;
};
/* ================= SEND OTP ================= */

export const sendOtpApi = (mobile) =>
  apiFetch("/api/auth/send-otp", {
    method: "POST",
    body: JSON.stringify({ mobile }),
  });

/* ================= VERIFY OTP ================= */

export const verifyOtpApi = (mobile, otp) =>
  apiFetch("/api/auth/verify-otp", {
    method: "POST",
    body: JSON.stringify({ mobile, otp }),
  });

/* ================= REGISTER ================= */

export const registerCustomer = (payload) =>
  apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });

/* ================= ATTACH CART ================= */

export const attachCartApi = ({ cartId, customerAccessToken }) =>
  apiFetch("/api/cart/attach", {
    method: "POST",
    body: JSON.stringify({
      cartId,
      customerAccessToken,
    }),
  });

/* ================= CREATE CART ================= */

export const createCartApi = (customerAccessToken) =>
  apiFetch("/api/cart/create", {
    method: "POST",
    body: JSON.stringify({
      customerAccessToken,
    }),
  });
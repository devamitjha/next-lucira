import Link from "next/link";

export default function Navbar() {
  const menus = [
    { label: "LUCIRA EXPRESS", slug: "lucira-express" },
    { label: "FAVORITES", slug: "favorites" },
    { label: "ENGAGEMENT & BRIDAL", slug: "engagement-bridal" },
    { label: "RINGS", slug: "rings" },
    { label: "EARRINGS", slug: "earrings" },
    { label: "MORE JEWELRY", slug: "more-jewelry" },
    { label: "SOLITAIRE", slug: "solitaire" },
    { label: "COLLECTIONS", slug: "collections" },
    { label: "GIFTING", slug: "gifting" },
    { label: "9KT COLLECTION", slug: "9kt-collection" },
  ];

  return (
    <nav className="bg-gray-100 px-8 py-3">
      <ul className="flex gap-8 overflow-x-auto whitespace-nowrap">
        {menus.map((menu) => (
          <li key={menu.slug}>
            <Link
              href={`/collections/${menu.slug}`}
              className="text-[12px] min-[1220px]:text-sm cursor-pointer hover:text-primary transition"
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
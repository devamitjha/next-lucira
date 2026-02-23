export default function Navbar() {
  const menus = [
    "LUCIRA EXPRESS",
    "FAVORITES",
    "ENGAGEMENT & BRIDAL",
    "RINGS",
    "EARRINGS",
    "MORE JEWELRY",
    "SOLITAIRE",
    "COLLECTIONS",
    "GIFTING",
    "9KT COLLECTION",
  ];

  return (
    <nav className="bg-gray-100 px-8 py-3">
      <ul className="flex gap-8 overflow-x-auto whitespace-nowrap">
        {menus.map((menu) => (
          <li
            key={menu}
            className="cursor-pointer hover:text-primary transition text-[12px] min-[1220px]:text-mdr"
          >
            {menu}
          </li>
        ))}
      </ul>
    </nav>
  );
}
"use client";


export default function CollectionSection ({ title, subtitle, tabs = [], children }) {

  return (
    <section className="w-full bg-white overflow-hidden mt-15">
      <div className="max-w-360 w-[91%] mx-auto">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && <h2 className="text-28px font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-base text-gray-600">{subtitle}</p>}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-6 mb-10 text-sm">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`hover:underline underline-offset-4 ${
                tab === "Hexa" ? "underline font-medium" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
       {children}
      </div>
    </section>
  );
}

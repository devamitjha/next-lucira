"use client";
import { useState } from "react";
import { Search, Store, User, Heart, ShoppingBag, CirclePile  } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/features/user/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User as UserIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

export default function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector(
      (state) => state.user
    );
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const SUGGESTED_CATEGORIES = [
      { name: "Engagement Rings", handle: "rings", image: "/images/product/5.jpg" },
      { name: "Necklaces", handle: "necklaces", image: "/images/product/3.jpg" },
      { name: "Earrings", handle: "earrings", image: "/images/product/1.jpg" },
      { name: "Bracelets", handle: "bracelets", image: "/images/product/2.jpg" },
    ];

    const TRENDING_PRODUCTS = [
      { title: "Solitaire Diamond Ring", handle: "solitaire-diamond-ring", price: "₹45,000", image: "/images/product/1.jpg" },
      { title: "Infinity Gold Necklace", handle: "infinity-gold-necklace", price: "₹28,000", image: "/images/product/2.jpg" },
    ];

    const handleSearch = async (e) => {
      const query = e.target.value;
      setSearchQuery(query);
      if (query.length > 2) {
        setIsSearching(true);
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
          const data = await res.json();
          setSearchResults(data.results || []);
        } catch (err) {
          console.error("Search error:", err);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    return (
    <div className="h-full grid grid-cols-[1fr_2fr_1fr] items-center px-8 py-4 bg-white relative">

      {/* Logo */}
    <Link href="/" className="flex items-center">
        <Image
        src="/images/logo.svg"
        alt="Lucira Jewelry"
        width={105}
        height={50}
        priority
        className="object-contain"
        />
    </Link>

      {/* Search */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-xl group">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? 'text-black' : 'text-gray-400'}`} size={18} />
            <Input
            placeholder="Search for Diamonds, Rings, Necklaces..."
            className={`pl-11 h-12 rounded-full bg-gray-50 border border-transparent transition-all duration-300 focus:bg-white focus:border-black/10 focus:ring-4 focus:ring-black/5 text-sm`}
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />

            {/* Search Dropdown */}
            {(isFocused || (searchQuery.length > 2 && searchResults.length > 0)) && (
              <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-100 overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-300">

                {/* Initial Suggestions (When query is empty or short) */}
                {searchQuery.length <= 2 && (
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-1">Popular Categories</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {SUGGESTED_CATEGORIES.map((cat) => (
                          <Link 
                            key={cat.handle} 
                            href={`/collections/${cat.handle}`}
                            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group/item"
                          >
                            <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden relative">
                              <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover/item:scale-110 transition-transform" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{cat.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-1">Trending Products</h3>
                      <div className="space-y-1">
                        {TRENDING_PRODUCTS.map((prod) => (
                          <Link 
                            key={prod.handle} 
                            href={`/products/${prod.handle}`}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden relative">
                                <Image src={prod.image} alt={prod.title} fill className="object-cover" />
                              </div>
                              <span className="text-sm text-gray-700">{prod.title}</span>
                            </div>
                            <span className="text-xs font-semibold text-black">{prod.price}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Search Results */}
                {searchQuery.length > 2 && (
                  <div className="max-h-[60vh] overflow-y-auto">
                    {isSearching ? (
                      <div className="p-8 text-center text-gray-400 text-sm">Searching for products...</div>
                    ) : searchResults.length > 0 ? (
                      <div className="p-2">
                        <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">Products</div>
                        {searchResults.map((item) => (
                          <Link
                            key={item.id}
                            href={`/products/${item.handle}`}
                            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-all group/res"
                            onClick={() => {
                              setSearchQuery("");
                              setSearchResults([]);
                            }}
                          >
                            <div className="relative w-14 h-14 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                              {item.image ? (
                                <Image src={item.image} alt={item.title} fill className="object-cover group-hover/res:scale-110 transition-transform duration-500" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300"><Search size={20}/></div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 truncate">{item.title}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{item.price}</p>
                            </div>
                            <div className="opacity-0 group-hover/res:opacity-100 transition-opacity pr-2 text-gray-400">
                              <ArrowRight size={16} />
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center text-gray-500 text-sm">No products found for "{searchQuery}"</div>
                    )}
                  </div>
                )}

                {/* Footer */}
                <div className="p-4 bg-gray-50/50 border-t border-gray-50 text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Press Enter to see all results</p>
                </div>
              </div>
            )}
        </div>       
      </div>
      {/* Right Icons */}
      <div className="flex items-center justify-end gap-6 text-sm">
        <Store size={20} />
        <CirclePile  size={20} className="cursor-pointer" />

        {user ? (
          <div className="relative group flex items-center">

            {/* Avatar */}
            <div className="cursor-pointer transition-transform duration-200 group-hover:scale-105">
              <Avatar>
                {user.avatar && (
                  <AvatarImage src={user.avatar} alt={user.name} />
                )}
                <AvatarFallback>
                  {getInitials(user?.name)}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-4" />

            {/* Dropdown */}
            <div
              className="
                absolute top-[calc(100%+8px)]
                left-1/2 -translate-x-1/2
                w-64 bg-white shadow-xl rounded-lg border border-gray-100
                opacity-0 invisible translate-y-2
                group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-200 z-50
              "
            >
              {/* User Info */}
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">Hi, {user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>

              <Link
                href="/account"
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition"
              >
                <UserIcon size={16} />
                My Account
              </Link>

              <button
                onClick={() => dispatch(logout())}
                className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-gray-50 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <User
            size={20}
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
        
       
        <Heart size={20} className="cursor-pointer" />
        <ShoppingBag size={20} className="cursor-pointer" />
      </div>
      <AuthDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
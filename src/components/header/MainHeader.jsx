"use client";
import { useState } from "react";
import { Search, Store, Heart, ShoppingBag, CirclePile, LogOut, User as UserIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/features/user/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import SearchPopup from "./SearchPopup";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
};

export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => (document.body.style.overflow = "unset");
  }, [isSearchOpen]);

  return (
    <div className="h-full grid grid-cols-[1fr_2fr_1fr] items-center px-8 py-4 bg-white relative border-b border-gray-100">
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

      {/* Search Trigger */}
      <div className="flex justify-center">
        <div 
          className="relative w-full max-w-xl group cursor-pointer"
          onClick={() => setIsSearchOpen(true)}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <div className="pl-11 h-12 flex items-center rounded-full bg-gray-50 border border-transparent text-sm text-gray-400">
            Search for Diamonds, Rings, Necklaces...
          </div>
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center justify-end gap-6 text-sm">
        <Store size={20} className="cursor-pointer" />
        <CirclePile size={20} className="cursor-pointer" />

        {user ? (
          <div className="relative group flex items-center">
            {/* Avatar */}
            <div className="cursor-pointer transition-transform duration-200 group-hover:scale-105">
              <Avatar>
                {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
                <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
              </Avatar>
            </div>

            {/* Dropdown */}
            <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-semibold">Hi, {user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              <Link href="/account" className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-gray-50 transition">
                <UserIcon size={16} /> My Account
              </Link>
              <button onClick={() => dispatch(logout())} className="flex items-center gap-2 w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-gray-50 transition">
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>
        ) : (
          <UserIcon size={20} className="cursor-pointer" onClick={() => setOpen(true)} />
        )}

        <Heart size={20} className="cursor-pointer" />
        <ShoppingBag size={20} className="cursor-pointer" />
      </div>

      <AuthDialog open={open} onOpenChange={setOpen} />
      
      {/* Search Popup Component with AnimatePresence */}
      <AnimatePresence>
        {isSearchOpen && (
          <SearchPopup 
            onClose={() => setIsSearchOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Search, Store, User, Heart, ShoppingBag, CirclePile  } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AuthDialog } from "@/components/auth/AuthDialog";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/features/user/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User as UserIcon } from "lucide-react";
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
    console.log(user)
  return (
    <div className="h-full grid grid-cols-[1fr_2fr_1fr] items-center px-8 py-4 bg-white">
      
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
        <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input
            placeholder="Search for Wedding Rings"
            className="pl-10 h-12 rounded-4 bg-gray-100 border-none focus-visible:ring-0"
            />
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
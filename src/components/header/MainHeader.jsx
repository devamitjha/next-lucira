"use client";
import { useState } from "react";
import { Search, Store, User, Heart, ShoppingBag, CirclePile  } from "lucide-react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AuthDialog } from "@/components/auth/AuthDialog";

export default function MainHeader() {
    const [open, setOpen] = useState(false);
  return (
    <div className="h-full grid grid-cols-[1fr_2fr_1fr] items-center px-8 py-4 bg-white">
      
      {/* Logo */}
    <div className="flex items-center">
        <Image
        src="/images/logo.svg"
        alt="Lucira Jewelry"
        width={105}
        height={50}
        priority
        className="object-contain"
        />
    </div>

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
        <User
            size={20}
            className="cursor-pointer"
            onClick={() => setOpen(true)}
        />
        <Heart size={20} className="cursor-pointer" />
        <ShoppingBag size={20} className="cursor-pointer" />
      </div>
      <AuthDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";
import {
  FiX,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

import {
  Laptop,
  Smartphone,
  Headphones,
  Camera,
  Tv,
  Watch,
  Gamepad2,
} from "lucide-react";
import { MdKitchen } from "react-icons/md";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const categories = [

  {
    name: "Smartphones",
    icon: Smartphone,
    brands: ["Apple", "Samsung", "Xiaomi", "OnePlus"],
  },
    {
    name: "Laptop",
    icon: Laptop,
    brands: ["Dell", "HP", "Lenovo", "Asus"],
  },
  {
    name: "Headphones",
    icon: Headphones,
    brands: ["Sony", "JBL", "Anker"],
  },
 
  {
    name: "Kitchen Apllication",
    icon: MdKitchen,
    brands: ["Sony", "LG", "Samsung"],
  },
 
  {
    name: "Gaming",
    icon: Gamepad2,
    brands: ["Asus", "MSI", "Acer"],
  },
];

export default function MobileSidebar({
  open,
  setOpen,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-80 max-w-[85%] bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-primary/20 p-5 text-white">
          <div className="flex items-center justify-between">
            <img
              src="https://taskco.io/assets/taskco.svg"
              alt="Taskco"
              className="h-8 w-auto"
            />

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-2 hover:bg-white/20"
            >
              <FiX size={22} />
            </button>
          </div>

         <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mt-6 flex items-center gap-3"
            >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary">
                <FiUser size={22} />
            </div>

            <div>
                <h3 className="font-semibold text-primary">Sign In</h3>
                <p className="text-sm text-primary/80 ">
                My Account & Orders
                </p>
            </div>
            </Link>
        </div>

        {/* Body */}
        <div className="h-[calc(100vh-120px)] overflow-y-auto">

          {/* Quick Menu */}
          <div className="border-b p-4">
            <div className="grid grid-cols-3 gap-4 text-center">

              <Link
                href="/cart"
                onClick={() => setOpen(false)}
              >
                <FiShoppingBag
                  className="mx-auto mb-2 "
                  size={22}
                />
                <span className="text-sm">Cart</span>
              </Link>

              <Link
                href="/wishlist"
                onClick={() => setOpen(false)}
              >
                <FiHeart
                  className="mx-auto mb-2"
                  size={22}
                />
                <span className="text-sm">Wishlist</span>
              </Link>

              <Link
                href="/products"
                onClick={() => setOpen(false)}
              >
                <FaShopify
                  className="mx-auto mb-2"
                  size={22}
                />
                <span className="text-sm">Products</span>
              </Link>

            </div>
          </div>

          {/* Categories */}
          <div className="p-4">

            <h3 className="mb-4 text-lg font-bold">
              Categories
            </h3>

            <div className="space-y-2">

              {categories.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.name}
                    className="overflow-hidden rounded-lg border"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="flex w-full items-center justify-between px-4 py-3 hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </div>

                      {isOpen ? (
                        <FiChevronDown />
                      ) : (
                        <FiChevronRight />
                      )}
                    </button>

                    {isOpen && (
                      <div className="space-y-2 bg-gray-50 px-6 py-3">

                        {item.brands.map((brand) => (
                          <Link
                            key={brand}
                            href={`/products?brand=${brand}`}
                            onClick={() => setOpen(false)}
                            className="block text-sm hover:text-primary"
                          >
                            • {brand}
                          </Link>
                        ))}

                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t p-4">

            <h3 className="mb-3 font-semibold">
              More
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              <Link
                href="/offers"
                onClick={() => setOpen(false)}
              >
                Popular in Gaming
              </Link>

              <Link
                href="/new-arrivals"
                onClick={() => setOpen(false)}
              >
                TopSeller Product
              </Link>

              <Link
                href="/track-order"
                onClick={() => setOpen(false)}
              >
                Track Order
              </Link>

              <Link
                href="/support"
                onClick={() => setOpen(false)}
              >
                Customer Support
              </Link>

            </div>

          </div>
        </div>
      </aside>
    </>
  );
}
"use client";

import React from "react";
import Header from "../../components/ui/layout/header";
import Navbar from "../../components/ui/layout/navbar";
import {
  Archive,
  MessagesSquare,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useStore } from "@/store/useStore";
import { MenuItem } from "@/type/menu";

const links: MenuItem[] = [
  {
    title: "Dashboard",
    label: "972",
    icon: Users2,
    href: '#',
    variant: "default",
    subItem: [
      {
        title: "Item1",
        label: "973",
        icon: Users2,
        href: '/dashboard/items',
        variant: "ghost",
        related: [
          '/dashboard/items/create'
        ]
      },
    ],
  },
  // {
  //   title: "List item",
  //   label: "342",
  //   icon: AlertCircle,
  //   variant: "ghost",
  //   href: '/dashboard/items',
  // },
  {
    title: "Forums",
    label: "128",
    icon: MessagesSquare,
    variant: "ghost",
    href: '#',
  },
  {
    title: "Promotions",
    label: "21",
    icon: Archive,
    variant: "ghost",
    href: '#',
    subItem: [
      {
        title: "Item1",
        label: "973",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
    ],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const {openNav, setOpenNav} = useStore();
  
  return (
    // <LanguageProvider>
      <div className="grid grid-cols-[auto_1fr] min-h-screen text-[14px]">
        {/* Sidebar/Navbar */}
        <Navbar open={openNav} links={links} />

        {/* Main Content */}
        <div className="w-full" style={{ gridColumn: 2 }}>
          {/* Header */}
          <Header openNav={openNav} toggleNav={setOpenNav} />

          {/* Page Content */}
          <main
            className={cn(
              "p-4 overflow-y-auto transition-height duration-300 ease-in-out",
              {
                "ps-[250px]": openNav,
                "ps-[100px]": !openNav,
              }
            )}
          >
            <div className="py-16 px-0 lg:px-16">{children}</div>
          </main>
        </div>
      </div>
    // </LanguageProvider>
  );
}

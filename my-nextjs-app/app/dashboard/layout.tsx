"use client";

import React from "react";
import Header from "../../components/ui/layout/header";
import Navbar from "../../components/ui/layout/navbar";
import {
  AlertCircle,
  Archive,
  LucideIcon,
  MessagesSquare,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@inlang/paraglide-next";

interface Link {
  title: string;
  label: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
  subItem?: Array<Link>;
}

const links: Array<Link> = [
  // Your link objects
  {
    title: "Dashboard",
    label: "972",
    icon: Users2,
    href: '/dashboard',
    variant: "default",
    subItem: [
      {
        title: "Item1",
        label: "973",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
      {
        title: "Item2",
        label: "974",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
      {
        title: "Item3",
        label: "975",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
      {
        title: "Item4",
        label: "976",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
    ],
  },
  {
    title: "List item",
    label: "342",
    icon: AlertCircle,
    variant: "ghost",
    href: '/dashboard/items',
  },
  {
    title: "Forums",
    label: "128",
    icon: MessagesSquare,
    variant: "ghost",
    href: '#',
  },
  {
    title: "Shopping",
    label: "8",
    icon: ShoppingCart,
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
      {
        title: "Item2",
        label: "974",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
      {
        title: "Item3",
        label: "975",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
      {
        title: "Item4",
        label: "976",
        icon: Users2,
        href: '#',
        variant: "ghost",
      },
    ],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = React.useState(true);
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    // <LanguageProvider>
      <div className="grid grid-cols-[auto_1fr] min-h-screen text-[14px]">
        {/* Sidebar/Navbar */}
        <Navbar open={isOpen} links={links} />

        {/* Main Content */}
        <div className="w-full" style={{ gridColumn: 2 }}>
          {/* Header */}
          <Header openNav={isOpen} toggleNav={toggleNav} />

          {/* Page Content */}
          <main
            className={cn(
              "p-4 overflow-y-auto transition-height duration-300 ease-in-out",
              {
                "lg:ps-64": isOpen,
                "lg:ps-20": !isOpen,
              }
            )}
          >
            <div className="p-16">{children}</div>
          </main>
        </div>
      </div>
    // </LanguageProvider>
  );
}

"use client";

import { LucideIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ChevronDownIcon, StackIcon, ValueIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Link } from "@/src/i18n";
import { MenuItem } from "@/type/menu";

interface NavProps {
  open?: boolean;
  links: MenuItem[];
}

interface NavItemProps {
  open?: boolean;
  links: MenuItem[];
}

export default function Navbar({ links, open }: NavProps) {
  return (
    <nav
      className={cn(
        "fixed bg-[#FBFBFF] h-screen transition-height duration-300 ease-in-out z-[2]",
        {
          "w-[250px]": open,
          "w-[100px]": !open,
        }
      )}
    >
      <div className="h-14 px-4 font-bold">OAK</div>
      <NavbarItem links={links} open={open} />
    </nav>
  );
}

export function NavbarItem({ links, open }: NavItemProps) {
  const path = usePathname();

  const checkActive = (item: MenuItem) => {
    // Check if the item itself is active
    const isActive = item.href === path || (item.related && item.related.includes(path));

    // If the item doesn't have subItems, return whether it's active
    if (!item.subItem || item.subItem.length === 0) {
      return isActive;
    }

    // If the menu is open, we only care if this specific item is active
    if (open) {
      return isActive;
    }

    // When the menu is closed, check if any of the subItems are active
    const isAnySubItemActive = item.subItem.some(subItem =>
      subItem.href === path || (subItem.related && subItem.related.includes(path))
    );

    // If any subItem is active, consider the parent item active as well
    return isAnySubItemActive;
  }
  const checkDefault = () => {
    const openLink = links.find(link => checkActive(link));
    if (openLink) {
      return openLink.title
    }
  }

  return (
    <Accordion type="single" collapsible defaultValue={checkDefault()}>
      {links.map((item) => {
        return (
          <AccordionItem value={item.title} key={item.title}>
            {item.subItem && item.subItem.length > 0 ? (
              <>
                <AccordionTrigger
                  className={cn(
                    "flex items-center px-4 py-2 w-full hover:bg-[#E1E1E9] text-start AccordionTrigger",
                    checkActive(item) && "bg-[#f4f4f4]"
                  )}>
                  <StackIcon />
                  {open && (
                    <>
                      <span className="ml-2">{item.title}</span>
                      <ChevronDownIcon className="AccordionChevron ml-auto" aria-hidden />
                    </>
                  )}
                </AccordionTrigger>
                {open && item.subItem.map((sub, index) => (
                  <AccordionContent key={index}>
                    <Link
                      href={sub.href}
                      className={cn("flex items-center px-6 py-2 hover:bg-[#E1E1E9]",
                        checkActive(sub) && "bg-[#f4f4f4]"
                      )}>
                      <ValueIcon />
                      <span className="ml-2">{sub.title}</span>
                    </Link>
                  </AccordionContent>
                ))}
              </>
            ) : (
              <Link
                href={item.href}
                className={cn("flex items-center px-4 py-2 w-full hover:bg-[#E1E1E9] text-start",
                  checkActive(item) && "bg-[#f4f4f4]"
                )}>
                <StackIcon />
                {open && <span className="ml-2">{item.title}</span>}
              </Link>
            )}
          </AccordionItem>
        )
      })}
    </Accordion>
  );
}

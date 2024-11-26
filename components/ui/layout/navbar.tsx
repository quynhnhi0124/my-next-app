"use client";

import { Archive, ChevronDown, ChevronUp, ListIcon, LucideIcon, User2Icon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ChevronDownIcon, StackIcon, ValueIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Link } from "@/src/i18n";

interface Link {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
  subItem?: Array<Link>;
}

interface NavProps {
  open?: boolean;
  links: Array<Link>;
}

interface NavItemProps {
  open?: boolean;
  links: Array<Link>;
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
  const [defaultOpen, setDefaultOpen] = useState<string | undefined>();
  const path = usePathname();

  useEffect(() => {
    const openLink = links.find(
      (link) => link.href === path || link.subItem?.some((sub) => sub.href === path)
    );

    if (openLink) {
      setDefaultOpen(openLink.title);
    }
  }, [path, links]);
  
  return (
    <Accordion type="single" collapsible defaultValue={defaultOpen}>
      {links.map((item) => (
        <AccordionItem value={item.title} key={item.title}>
          {item.subItem && item.subItem.length > 0 ? (
            <>
              <AccordionTrigger className="flex items-center px-4 py-2 w-full hover:bg-[#E1E1E9] text-start AccordionTrigger">
                <StackIcon />
                {open && (
                  <>
                    <span className="ml-2">{item.title}</span>
                    <ChevronDownIcon className="AccordionChevron ml-auto" aria-hidden />
                  </>
                )}
              </AccordionTrigger>
              {item.subItem.map((sub, index) => (
                <AccordionContent key={index}>
                  <Link href={sub.href} className="flex items-center px-6 py-2 hover:bg-[#E1E1E9]">
                    <ValueIcon />
                    <span className="ml-2">{sub.title}</span>
                  </Link>
                </AccordionContent>
              ))}
            </>
          ) : (
            <Link href={item.href} className="flex items-center px-4 py-2 w-full hover:bg-[#E1E1E9] text-start">
              <StackIcon />
              {open && <span className="ml-2">{item.title}</span>}
            </Link>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

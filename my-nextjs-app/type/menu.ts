import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
  subItem?: MenuItem[];
  related?: string[];
}
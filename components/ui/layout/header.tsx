import { cn } from "@/lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  openNav: boolean
  toggleNav: () => void
}

export default function Header({ openNav, toggleNav }: HeaderProps) {
  return (
    <div className={cn("fixed top-0 left-0 w-full z-20 h-14 bg-[#FBFBFF] flex justify-between items-center cursor-pointer transition-height duration-300 ease-in-out",
      {
        "ps-[250px]": openNav,
        "ps-[100px]": !openNav,
      }
    )}>
      <div className="relative h-full cursor-pointer hover:bg-[#E1E1E9] w-14" onClick={toggleNav}>
        <HamburgerMenuIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      {/* <LanguageSwitcher /> */}
    </div>
  );
}
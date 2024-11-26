import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CheckIcon, LetterCaseCapitalizeIcon } from "@radix-ui/react-icons";
import { Button } from "../button";
import * as m from "@/paraglide/messages";
import { languageTag } from "@/src/paraglide/runtime";
import { AvailableLanguageTag } from "@/paraglide/runtime";
import { usePathname, useRouter } from "@/src/i18n";
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
  const path = usePathname();
  const router = useRouter();

  const handleChangeLang = (locale: AvailableLanguageTag) => {
    // Cookies.set('NEXT_LOCALE', locale, {expires: 7});
    // location.reload();
    router.push(path, { locale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="mr-4">
          <LetterCaseCapitalizeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1 mr-4 w-32 bg-white border rounded-md border-input">
        <DropdownMenuItem
          className="flex items-center px-4 py-2 hover:bg-slate-200 space-x-2"
          onClick={() => handleChangeLang("en")}
        >
          {languageTag() === "en" && (<CheckIcon />)}
          <span>{m.english()}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center px-4 py-2 hover:bg-slate-200 space-x-2"
          onClick={() => handleChangeLang("vi")}
        >
          {languageTag() !== "en" && (<CheckIcon />)}
          <span>{m.vietnamese()}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

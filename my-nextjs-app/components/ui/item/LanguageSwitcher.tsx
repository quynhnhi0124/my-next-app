import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LetterCaseCapitalizeIcon } from "@radix-ui/react-icons";
import { Button } from "../button";
import * as m from "@/paraglide/messages.js";

export default function LanguageSwitcher() {
  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="mr-4">
            <LetterCaseCapitalizeIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 mr-4 w-32 bg-white border rounded-md border-input">
          <DropdownMenuItem className="px-4 py-2 hover:bg-slate-200">
            <span>{m.english()}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="px-4 py-2 hover:bg-slate-200">
            <span>{m.vietnamese()}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
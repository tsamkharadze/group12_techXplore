import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

export function ChangeLanguage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Define flags
  const flag = currentLang === "ka" ? "🇬🇪" : "🇬🇧";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent" variant="outline" size="icon">
          <span className="text-xl">{flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ka")}>
          🇬🇪 ქართული
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

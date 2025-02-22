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

  const flag =
    currentLang === "ka" ? (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/2880px-Flag_of_Georgia.svg.png"
        alt="Georgian Flag"
        className="h-3 w-5"
      />
    ) : (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/2880px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
        alt="UK Flag"
        className="h-3 w-5"
      />
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent" variant="outline" size="icon">
          <span className="text-xl">{flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          EN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("ka")}>
          KA
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

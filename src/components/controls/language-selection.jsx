import { languages } from "@/options";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { cn } from "@/lib/utils";
import useStore from "@/store";
import { MagicWandIcon } from "@radix-ui/react-icons";

export default function LanguageSelect() {
  const language = useStore((state) => state.language);
  const autoDetectLanguage = useStore((state) => state.autoDetectLanguage);

  const handleChange = (language) => {
    if (language === "auto-detect") {
      useStore.setState({ autoDetectLanguage: true, language: "plaintext" });
    } else {
      useStore.setState({ autoDetectLanguage: false, language });
    }
  };
  return (
    <div>
      <label className="block  mb-2 text-xs font-medium text-neutral-400">
        Language
      </label>
      <Select value={language} onValueChange={handleChange}>
        <SelectTrigger className="w-35">
          {autoDetectLanguage && <MagicWandIcon className="mr-2" />}
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent className="dark max-h-[500px]">
          <SelectItem value="auto-detect">Auto Detect</SelectItem>
          {Object.entries(languages).map(([lang, name]) => (
            <SelectItem key={lang} value={lang}>
              <div className="flex gap-2 items-center">
                <img
                  src={
                    name == "Java"
                      ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg`
                      : `https://cdn.simpleicons.org/${name}/${name}`
                  }
                  className="h-4 w-4 "
                />
                <span>{name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

import { ArrowRight, Github } from "lucide-react";
import { Button } from "../ui";
import { sound } from "../../utils/sound";

interface HeroActionsProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroActions({ onPrimaryClick, onSecondaryClick }: HeroActionsProps) {
  const handlePrimary = () => {
    sound.playClick();
    onPrimaryClick?.();
  };

  const handleSecondary = () => {
    sound.playClick();
    onSecondaryClick?.();
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <Button
        variant="primary"
        size="lg"
        onClick={handlePrimary}
        onMouseEnter={() => sound.playHover()}
        className="w-full sm:w-auto relative group overflow-hidden shadow-[0_0_25px_rgba(182,243,106,0.25)] hover:shadow-[0_0_35px_rgba(182,243,106,0.45)] transition-all duration-300"
        aria-label="View projects"
      >
        <span className="relative z-10 flex items-center gap-2">
          View Projects
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        onClick={handleSecondary}
        onMouseEnter={() => sound.playHover()}
        className="w-full sm:w-auto hover:shadow-[0_0_20px_rgba(182,243,106,0.15)] transition-all duration-300"
        aria-label="View GitHub profile"
      >
        <Github className="h-5 w-5 mr-2" aria-hidden="true" />
        GitHub
      </Button>
    </div>
  );
}
import { ArrowRight, Github } from "lucide-react";
import { MagneticButton } from "../ui";

interface HeroActionsProps {
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function HeroActions({ onPrimaryClick, onSecondaryClick }: HeroActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <MagneticButton
        variant="primary"
        size="lg"
        onClick={onPrimaryClick}
        className="w-full sm:w-auto"
        aria-label="View projects"
      >
        View Projects
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </MagneticButton>
      <MagneticButton
        variant="outline"
        size="lg"
        onClick={onSecondaryClick}
        className="w-full sm:w-auto"
        aria-label="View GitHub profile"
      >
        <Github className="h-5 w-5" aria-hidden="true" />
        GitHub
      </MagneticButton>
    </div>
  );
}
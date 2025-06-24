import DarkModePill from "@/components/accessibility/DarkModePill";
import DarkModeToggle from "@/components/accessibility/DarkModeToggle";
import { RiGeminiFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="dark w-full h-dvh flex flex-col gap-8 justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center gap-2 px-6 py-4 bg-success/5 rounded-lg border border-success/30">
        <RiGeminiFill className="text-success animate-caret-blink" />
        <span className="font-bold">Success!</span> Your blank Next.js app is
        ready.
      </div>
      <div className="flex items-center gap-2 text-xxs text-muted-foreground">
        <span className="uppercase">nextjs-blank</span> •
        <DarkModePill /> •
        <DarkModeToggle />
      </div>
    </div>
  );
}

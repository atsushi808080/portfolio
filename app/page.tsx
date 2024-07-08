import { cn } from "@/lib/utils";
import clsx from "clsx";

export default function Home() {
  return (
    <div>
      <h1 className={cn("italic", "text-yellow-400", true && "underline")}>
        Hello my friends
      </h1>
      <h1 className="text-4xl">
        Hello my friends
      </h1>
      <h1 className="text-4xl font-oswald">
        Hello my friends
      </h1>
      <h1 className="text-4xl font-pixel">
        Hello my friends
      </h1>
      <h1 className="text-4xl font-pixel2">
        Hello my friends
      </h1>
    </div>
  );
}

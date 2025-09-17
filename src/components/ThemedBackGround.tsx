import { useTheme } from "./theme-provider";
import LinesBackground from "./ui/LinesBackground";

function ThemedBackGround() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <LinesBackground
        size={150}
        red={resolvedTheme === "dark" ? 255 : 10}
        green={0}
        blue={0}
      />
    </div>
  );
}

export default ThemedBackGround;

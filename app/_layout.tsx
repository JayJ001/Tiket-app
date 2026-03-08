import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { fontFamily } from "../dimensions/fontFamily";

export default function RootLayout() {
  const [loaded] = useFonts({
    [fontFamily.bold]: require("../assets/fonts/Raleway-Bold.ttf"),
    [fontFamily.medium]: require("../assets/fonts/Raleway-Medium.ttf"),
    [fontFamily.regular]: require("../assets/fonts/Raleway-Regular.ttf"),
    [fontFamily.semibold]: require("../assets/fonts/Raleway-SemiBold.ttf"),
  });

  if (!loaded) return null;

  return <Stack />;
}

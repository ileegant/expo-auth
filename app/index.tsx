import { router } from "expo-router";
import { Button, YStack } from "tamagui";

export default function Index() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Button onPress={() => router.push("/signin")}>login</Button>
    </YStack>
  );
}

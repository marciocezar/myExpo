import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{ title: "Home" }} 
        // options={{headerShown: false}}
        />
      <Stack.Screen name="pages/pageStyle"
        options={{ title: "Teste" }} />
    </Stack>
  );
}

import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { Button, Input, ScrollView, Text, YStack } from "tamagui";

const SignIn = () => {
  return (
    <ScrollView>
      <YStack
        flex={1}
        justifyContent="center"
        paddingHorizontal={20}
        paddingTop={60}
        gap={24}
      >
        <Text fontSize={36} fontWeight="bold">
          Welcome back to ExpoAuth!
        </Text>
        <Text fontSize={16}>Login to Your Existing Account</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Pressable>
          <Text>Forgot password?</Text>
        </Pressable>
        <Button color="#fff" fontSize={18} backgroundColor="#222">
          Sign In
        </Button>
        <Text>
          Don't Have an Account?
          <Pressable
            onPress={() => {
              router.replace("/signup");
            }}
          >
            <Text fontWeight="bold">Sign Up</Text>
          </Pressable>
        </Text>
      </YStack>
    </ScrollView>
  );
};

export default SignIn;

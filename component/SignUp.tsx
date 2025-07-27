import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import { Button, Input, ScrollView, Text, YStack } from "tamagui";

const SignUp = () => {
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
          Getting Started with ExpoAuth!
        </Text>
        <Text fontSize={16}>Alright, Now Let's Get to Know You!</Text>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button color="#fff" fontSize={18} backgroundColor="#222">
          Sign Up
        </Button>
        <Text>
          Already Have an Account?
          <Pressable
            onPress={() => {
              router.replace("/signin");
            }}
          >
            <Text fontWeight="bold">Sign In</Text>
          </Pressable>
        </Text>
      </YStack>
    </ScrollView>
  );
};

export default SignUp;

import { Link, Stack, router } from "expo-router";
import React, { useEffect } from "react";
import { StreamChat } from "stream-chat";
import { OverlayProvider, Chat } from "stream-chat-expo";
import { useAuth } from "../../src/context/auth";
import { Entypo } from "@expo/vector-icons";

const API_KEY = "3chpzrkayz9w";
const client = StreamChat.getInstance(API_KEY);

export default function ChatLayout() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    //connect User

    const connectUser = async () => {
      await client.connectUser(
        {
          id: user.id.toString(),
          name: user.name,
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        user.streamToken
      );
      const channel = client.channel("livestream", "public", {
        name: "Public",
        //image: "https://i.imgur.com/fR9Jz14.png",
      });
      await channel.create();
    };

    connectUser();

    return () => {
      client.disconnectUser();
    };
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Messages",
              headerLeft: () => (
                <Entypo
                  name="log-out"
                  size={18}
                  color="royalblue"
                  onPress={() => {
                    signOut(), router.push(`/sign-in`);
                  }}
                />
              ),
              headerRight: () => (
                <Link href="/chat/newChannel">
                  <Entypo name="new-message" size={18} color="royalblue" />
                </Link>
              ),
            }}
          />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}

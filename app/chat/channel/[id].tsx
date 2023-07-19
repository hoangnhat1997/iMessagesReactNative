import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Channel as ChannelType } from "stream-chat";
import { useChatContext } from "stream-chat-expo";

const ChannelScreen = () => {
  const [channel, setChannel] = useState<ChannelType>();

  const { client } = useChatContext();

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const fetchChannel = async () => {
      const _id = typeof id === "string" ? id : id[0];
      const channels = await client.queryChannels({ id: { $eq: _id } });
      setChannel(channels[0]);
    };

    fetchChannel();
  }, [id]);
  return (
    <View>
      <Text>ChannelScreen</Text>
    </View>
  );
};

export default ChannelScreen;

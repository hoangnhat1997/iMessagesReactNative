import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { Channel as ChannelType } from "stream-chat";
import { useState } from "react";
import { useRouter } from "expo-router";

const ChatScreen = () => {
  const router = useRouter();
  //   const [channel, setChannel] = useState<ChannelType>();
  //   if (channel) {
  //     return (
  //       <Channel channel={channel}>
  //         <MessageList />
  //         <MessageInput />
  //       </Channel>
  //     );
  //   }
  return (
    <ChannelList
      onSelect={(channel) => router.push(`chat/channel/${channel.id}`)}
    />
  );
};

export default ChatScreen;

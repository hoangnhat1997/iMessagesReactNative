import { ChannelList } from "stream-chat-expo";

import { useRouter } from "expo-router";

const ChatScreen = () => {
  const router = useRouter();

  return (
    <ChannelList
      onSelect={(channel) => router.push(`chat/channel/${channel.id}`)}
    />
  );
};

export default ChatScreen;

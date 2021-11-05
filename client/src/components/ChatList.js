import { useChat } from "../context/ChatContext";
import Styles from "./Styles.module.css";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const mes = useChat();

  console.log(mes.messages);

  return (
    <div className={Styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {mes.messages.map((item, key) => (
          <ChatItem key={key} item={item}></ChatItem>
        ))}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;

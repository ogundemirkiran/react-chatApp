import { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessagess } = useChat();

  useEffect(() => {
    init();

    subscribeInitialMessages((messages) => setMessagess(messages));

    subscribeChat((message) => {
      setMessagess((prevState) => [...prevState, { message }]);
    });
  }, []);

  return (
    <div className="App">
      <ChatList></ChatList>
      <ChatForm></ChatForm>
    </div>
  );
}

export default Container;

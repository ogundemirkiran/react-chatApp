import Styles from "./Styles.module.css";
import { useState } from "react";
import { sendMessage } from ".././socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessagess } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessagess((prevState) => [...prevState, { message, fromMe: true }]);
    sendMessage(message);
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={Styles.formInput}>
        <input
          className={Styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default ChatForm;

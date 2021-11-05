import Styles from "./Styles.module.css";

export default function ChatItem({ item }) {
  console.log(item);
  return (
    <div className={`${Styles.chatItem} ${item.fromMe ? Styles.right : ""}`}>
      {item.message}
    </div>
  );
}

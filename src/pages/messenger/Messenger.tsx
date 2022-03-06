import { useEffect, useRef, useState } from "react";
import { Conversation } from "components/conversation";
import { Message } from "components/message";
import { ChatOnline } from "components/chatOnline";
import { API } from "hooks/useApi";
import { io } from "socket.io-client";
import { useTypedSelector } from "hooks/useSelector";
import styles from "./messenger.module.css";

export const Messenger = () => {
  const [conversations, setConversations] = useState<any>([]);
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>("");
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  const [onlineUsers, setOnlineUsers] = useState<any>([]);
  const socket: any = useRef();
  const { user } = useTypedSelector((store) => store.auth);
  const scrollRef: any = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users: any) => {
      setOnlineUsers(
        user.followings.filter((f: any) =>
          users.some((u: any) => u.userId === f),
        ),
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await API.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await API.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member: any) => member !== user._id,
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await API.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input
              placeholder="Search for friends"
              className={styles.chatMenuInput}
            />
            {conversations.map((c: any, idx: any) => (
              <div
                key={idx}
                aria-hidden="true"
                onClick={() => setCurrentChat(c)}
              >
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            {currentChat ? (
              <>
                <div className={styles.chatBoxTop}>
                  {messages.map((m: any) => (
                    <div key={m.senderId} ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className={styles.chatBoxBottom}>
                  <textarea
                    className={styles.chatMessageInput}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button
                    className={styles.chatSubmitBtn}
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className={styles.noConversationText}>
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

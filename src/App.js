import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState("");
  console.log(messages);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
        alt="Facebook Brand"
      />
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app-form">
        <FormControl className="app-formControl">
          <Input
            className="app-input"
            placeholder="Enter a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app-iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type={"submit"}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          {/* Send message */}
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} message={message} username={username} />;
        })}
      </FlipMove>
      ;
    </div>
  );
}

export default App;

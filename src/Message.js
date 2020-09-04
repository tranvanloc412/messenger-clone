import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser ? "message-user" : null}`}>
      <Card className={`${isUser ? "message-userCard" : "message-guestCard"}`}>
        <CardContent>
          <Typography color="textPrimary" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown User"}: `}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

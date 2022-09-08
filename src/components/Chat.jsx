import React from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Maria</span>
        <div className="chatIcons">
          <img src={Cam} alt="Camera Icon" />
          <img src={Add} alt="Add New" />
          <img src={More} alt="More Info" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

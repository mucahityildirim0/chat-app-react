import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://media.istockphoto.com/photos/carefree-beautiful-latin-woman-relaxing-on-beach-picture-id1369510216?b=1&k=20&m=1369510216&s=170667a&w=0&h=sqx7l9JRfC4BAfDOjJGJq6Xa6Tc_BPNQg6BYaSBaVDs="
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Gal_Gadot_by_Gage_Skidmore_2.jpg/1200px-Gal_Gadot_by_Gage_Skidmore_2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;

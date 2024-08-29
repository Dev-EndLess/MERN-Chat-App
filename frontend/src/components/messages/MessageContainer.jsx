// import { useEffect } from "react"
import UnselectedChat from "./UnselectedChat";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useState } from "react";

const MessageContainer = () => {
  const [isChatSelected, setChatIsSelected] = useState(false);

  return (
    <div className="flex flex-col h-full">
      {isChatSelected ? (
        <>
          <div className="bg-emerald-200 rounded-t-md px-4 py-2 mb-2">
            <span className="label-text">To:</span>
            <span className="text-gray-900 font-bold">Anakim</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      ) : (
        <UnselectedChat />
      )}
    </div>
  );
};

export default MessageContainer;

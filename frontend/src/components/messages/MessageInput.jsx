// import { useState } from "react";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  // const [message, setMessage] = useState("");

  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute top-3 right-4 text-lg text-emerald-200"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

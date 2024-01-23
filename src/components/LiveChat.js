import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Dilip Baghel",
        message: liveMessage,
      })
    );

    setLiveMessage("");
  };

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="flex flex-col p-2 m-2">
        <div className="ml-4  h-[490px] w-full flex flex-col-reverse bg-slate-50 rounded-lg overflow-y-scroll">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
        <form className="flex justify-between p-2" onSubmit={submitHandler}>
          <input
            className="ml-4 w-[24rem] text-md px-4 py-1 rounded-3xl outline-none  border border-gray-600"
            type="text"
            placeholder="write comment here"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-1 ml-2 font-semibold text-white rounded-3xl bg-green-500 border border-gray"
          >
            send
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;

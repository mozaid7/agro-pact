import React, { useState } from "react";

// Chat data (equivalent to what is in index.js)
interface ChatStep {
  question?: string;
  field?: keyof UserData;
  response?: string;
}

interface ChatFlow {
  [key: string]: ChatStep[];
}

interface ChatData {
  intro: string[];
  options: string[];
  flow: ChatFlow;
}

interface UserData {
  name?: string;
  phone?: string;
  contractId?: string;
}

const chatData: ChatData = {
  intro: ["Hello!", "How can I assist you today?"],
  options: ["Contract Related Issue", "Billing Inquiry", "Technical Support"],
  flow: {
    "Contract Related Issue": [
      { question: "Could you please provide your Name?", field: "name" },
      {
        question: "Thank you, NAME. Could you share your phone number?",
        field: "phone",
      },
      { question: "Can you provide the Contract ID?", field: "contractId" },
      {
        response:
          "Thank you! We've logged your inquiry for contract CONTRACTID.",
      },
    ],
    "Billing Inquiry": [
      { response: "We've sent an email regarding your billing inquiry." },
    ],
    "Technical Support": [
      { response: "Contact our tech team at support@example.com." },
    ],
  },
};

const Chatbot: React.FC = () => {
  const [isChatOpen, setChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [userData, setUserData] = useState<UserData>({});
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentOption, setCurrentOption] = useState<string | null>(null);

  const startChat = () => {
    setChatMessages(chatData.intro);
    setTimeout(() => showOptions(), chatData.intro.length * 500 + 500);
  };

  const showOptions = () => {
    const options = chatData.options.map((option) => (
      <button
        key={option}
        onClick={() => handleOptionSelect(option)}
        className="bg-white text-purple-600 border border-blue-600 rounded-full px-4 py-2 my-2 cursor-pointer"
      >
        {option}
      </button>
    ));
    setChatMessages((prev) => [
      ...prev,
      ...options.map((btn) => btn.props.children as string),
    ]);
  };

  const handleOptionSelect = (option: string) => {
    setCurrentOption(option);
    setChatMessages((prev) => [...prev, option]);
    handleConversationFlow(option);
  };

  const handleConversationFlow = (option: string) => {
    const conversation = chatData.flow[option];
    if (conversation && currentStep < conversation.length) {
      const step = conversation[currentStep];
      if (step.question) {
        const question = step.question
          .replace("NAME", userData.name || "")
          .replace("CONTRACTID", userData.contractId || "");
        setChatMessages((prev) => [...prev, question]);
      } else if (step.response) {
        const response = step.response
          .replace("NAME", userData.name || "")
          .replace("CONTRACTID", userData.contractId || "");
        setChatMessages((prev) => [...prev, response]);
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
    if (!isChatOpen) startChat();
  };

  return (
    <div className="relative">
      <div className="parent flex justify-between items-center p-8 h-screen">
        <div>
          <h1 className="text-5xl font-bold text-cadetblue">
            Lady Nisy's Chatbot
          </h1>
          <p className="text-gray-500 font-semibold">
            Looks like there is a lot to do, will get this filled up soon.
          </p>
          <button
            onClick={toggleChat}
            className="bg-red-500 text-white py-2 px-4 rounded-full mt-4"
          >
            {isChatOpen ? "CLOSE CHAT" : "START CHAT"}
          </button>
        </div>
      </div>

      {isChatOpen && (
        <div className="fixed bottom-16 right-16 w-80 bg-white shadow-lg rounded-lg">
          <div className="header flex items-center p-4 bg-gray-100 rounded-t-lg">
            <img
              src="jecrc_logo.png"
              alt="avatar"
              className="w-10 h-10 rounded-full border p-1"
            />
            <div className="ml-3">
              <span className="font-semibold">Customer Service</span>
              <br />
              <span className="text-green-500">online</span>
            </div>
          </div>

          <div className="chat-body p-4 h-80 overflow-auto">
            {chatMessages.map((msg, index) => (
              <p
                key={index}
                className="bg-gray-100 text-gray-600 p-2 rounded-lg my-2"
              >
                {msg}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

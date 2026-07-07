import { useEffect, useRef, useState } from "react";
import chatData from "./chatData";
import ChatBubble from "./ChatBubble";
import TypingBubble from "./TypingBubble";
import EnquiryForm from "../forms/forms";

export default function SchoolChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState("menu");
  const [typing, setTyping] = useState(false);

  const initialized = useRef(false);
  const chatEndRef = useRef(null);

  /* ---------------- RESET LOGIC ---------------- */

  const resetBot = () => {
    setMessages([]);
    setStep("menu");
    setTyping(false);
    initialized.current = false;
  };

  /* -------- SHOW WELCOME + MENU ON OPEN -------- */

  useEffect(() => {
    if (open && !initialized.current) {
      initialized.current = true;
      sendBotMessage(chatData.welcome.message);
      sendBotMessage(chatData.menu.message);
    }
  }, [open]);

  /* --------------- AUTO SCROLL ---------------- */

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* -------------- BOT MESSAGE ----------------- */

  const sendBotMessage = (text) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text }]);
    }, 600);
  };

  /* -------------- USER OPTION ----------------- */

  const handleOption = (opt) => {
    setMessages((prev) => [...prev, { from: "user", text: opt.label }]);
    setStep(opt.next);

    if (chatData[opt.next]?.message) {
      sendBotMessage(chatData[opt.next].message);
    }
  };

  const data = chatData[step];

  return (
    <>
      {/* Floating Button */}
      <button
        className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4"
        style={{ width: 56, height: 56, zIndex: 9999 }}
        onClick={() => setOpen(true)}
      >
        💬
      </button>

      {open && (
        <div
          className="card position-fixed bottom-0 end-0 m-4 shadow"
          style={{ width: 360, height: 520, marginBottom: 80, zIndex: 9999 }}
        >
          {/* HEADER */}
          <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <img
                src="/logo.png"
                alt="School Logo"
                width="48"
                height="48"
                className="rounded-circle bg-white p-1"
              />
              <div>
                <strong>KualaBot</strong>
                <div className="small">Kualakubs World School</div>
              </div>
            </div>

            {/* CLOSE BUTTON → RESET */}
            <button
              className="btn btn-sm btn-light"
              onClick={() => {
                setOpen(false);
                resetBot();
              }}
            >
              ✖
            </button>
          </div>

          {/* BODY */}
          <div className="card-body overflow-auto">
            {messages.map((msg, i) => (
              <ChatBubble key={i} from={msg.from} text={msg.text} />
            ))}

            {typing && <TypingBubble />}

            {data.whatsapp && (
              <a
                href={data.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm w-100 mt-2"
              >
                📲 Chat on WhatsApp
              </a>
            )}

            {data.showForm && <EnquiryForm />}

            <div ref={chatEndRef} />
          </div>

          {/* QUICK REPLIES */}
          {data.options && (
            <div className="card-footer bg-white">
              <div className="d-flex flex-wrap justify-content-end gap-2">
                {data.options.map((opt, i) => (
                  <button
                    key={i}
                    className="btn btn-outline-primary btn-sm rounded-pill"
                    onClick={() => handleOption(opt)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

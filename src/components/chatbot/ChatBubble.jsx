export default function ChatBubble({ from, text }) {
  const isBot = from === "bot";

  return (
    <div className={`d-flex mb-2 ${isBot ? "justify-content-start" : "justify-content-end"}`}>
      {isBot && (
        <div className="me-2">
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{ width: 32, height: 32 }}
          >
            🤖
          </div>
        </div>
      )}

      <div
        className={`p-2 px-3 rounded-4 small ${
          isBot ? "bg-light border" : "bg-primary text-white"
        }`}
        style={{ maxWidth: "75%", whiteSpace: "pre-line" }}
      >
        {text}
      </div>
    </div>
  );
}

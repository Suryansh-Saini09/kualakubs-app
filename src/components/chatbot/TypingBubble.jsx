export default function TypingBubble() {
  return (
    <div className="d-flex mb-2">
      <div className="me-2">
        <div
          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
          style={{ width: 32, height: 32 }}
        >
          🤖
        </div>
      </div>
      <div className="bg-light border rounded-4 px-3 py-2 small">
        typing...
      </div>
    </div>
  );
}

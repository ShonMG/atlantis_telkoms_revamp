// ChatBotWidget.tsx
import { useState } from "react";

export const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, `You: ${input}`]);
    // Simulate bot reply or call your bot backend here
    setTimeout(() => {
      setMessages(prev => [...prev, `Bot: Thanks for asking! We'll get back to you soon.`]);
    }, 500);
    setInput("");
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000, fontFamily: "sans-serif" }}>
      {open ? (
        <div style={{
          width: 320,
          height: 420,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          borderRadius: 12,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #eee", fontWeight: "bold" }}>
            Chat Support
            <button
              onClick={() => setOpen(false)}
              style={{ float: "right", background: "transparent", border: "none", cursor: "pointer" }}
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, padding: 12, overflowY: "auto", fontSize: 14 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ marginBottom: 8 }}>{m}</div>
            ))}
          </div>
          <div style={{ padding: 8, borderTop: "1px solid #eee", display: "flex", gap: 8 }}>
            <input
              aria-label="Type a message"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => (e.key === "Enter" ? sendMessage() : null)}
              placeholder="Type a message..."
              style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
            <button onClick={sendMessage} style={{ padding: "8px 12px", borderRadius: 6, cursor: "pointer" }}>
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#1d4ed8",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(29,78,216,0.3)",
            fontSize: 24,
          }}
        >
          💬
        </button>
      )}
    </div>
  );
};

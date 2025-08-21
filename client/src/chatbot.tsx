import { useState } from "react";


export const ChatBotWidget = () => {
  const [open, setOpen] = useState(false);


  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1000,
        fontFamily: "sans-serif",
      }}
    >
      {open ? (
        <div
          style={{
            width: 400, 
            height: 500, 
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderRadius: 12,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid #eee",
              fontWeight: "bold",
            }}
          >
            Atlantis Support
            <button
              onClick={() => setOpen(false)}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              ×
            </button>
          </div>
          {}
          <div style={{ flex: 1, height: "calc(100% - 48px)" }}>
            <iframe
              src="https://copilotstudio.microsoft.com/environments/Default-84c31ca0-ac3b-4eae-ad11-519d80233e6f/bots/cr5be_atlantisBot/webchat?__version__=2"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
             
              frameBorder="0"
            />
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
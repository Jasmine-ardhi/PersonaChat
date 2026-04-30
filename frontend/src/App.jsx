import { useState } from "react";
import axios from "axios";
import "./App.css";

const personas = {
  anshuman: {
    name: "Anshuman Singh",
    suggestions: [
      "How do I stay consistent?",
      "Can I crack FAANG in 2 months?",
      "Should I skip theory?"
    ]
  },
  kshitij: {
    name: "Kshitij Mishra",
    suggestions: [
      "Am I good at DSA?",
      "How to prepare system design?",
      "Why do I get stuck?"
    ]
  },
  abhimanyu: {
    name: "Abhimanyu Saxena",
    suggestions: [
      "How to grow in career?",
      "Should I focus only on DSA?",
      "How to start a startup?"
    ]
  }
};

function App() {
  const [persona, setPersona] = useState("anshuman");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        message: text,
        persona
      });

      setMessages([
        ...newMessages,
        { role: "bot", content: res.data.reply }
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "bot", content: "Error occurred" }
      ]);
    }

    setLoading(false);
  };

  const switchPersona = (p) => {
    setPersona(p);
    setMessages([]); 
  };

  return (
    <div className="container">
      <h2>Persona Chatbot</h2>

      
      <div className="tabs">
        {Object.keys(personas).map((p) => (
          <button
            key={p}
            onClick={() => switchPersona(p)}
            className={persona === p ? "active" : ""}
          >
            {personas[p].name}
          </button>
        ))}
      </div>

     
      <div className="chat">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role}>
            {msg.content}
          </div>
        ))}

        {loading && <div className="bot">Typing...</div>}
      </div>

      
      <div className="suggestions">
        {personas[persona].suggestions.map((s, i) => (
          <button key={i} onClick={() => sendMessage(s)}>
            {s}
          </button>
        ))}
      </div>

      
      <div className="inputBox">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
}

export default App;
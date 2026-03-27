import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_MODEL =
  import.meta.env.VITE_OPENROUTER_MODEL || "openai/gpt-4o-mini";

const SYSTEM_PROMPT = `
You are the official virtual assistant for Apex Institute of Technology.
Answer in a friendly, concise, helpful tone.
Prefer answering questions about admissions, campus life, placements, and courses.

Known institute details:
- Apex Institute of Technology highlights 25+ years of excellence.
- Placement rate shown on the site: 90%+.
- Industry partners shown on the site: 320+.
- Undergraduate courses shown: Artificial Intelligence and Machine Learning, Computer Science and Engineering, Architecture, Electronics and Communication Engineering, Civil Engineering, Mechanical Engineering.
- Postgraduate courses shown: Master of Computer Applications, M.Tech in Computer Science and Engineering, M.Tech in Cybersecurity, M.Tech in VLSI Design.
- Campus highlights: industry-aligned academics, experienced faculty, modern labs and library, hostel and transport support, clubs and sports, placement-focused training.

If a question asks for exact fees, deadlines, or information not provided here, be transparent and suggest contacting the institute directly through the website contact page.
Do not invent facts.
`.trim();

const INITIAL_MESSAGES = [
  {
    role: "assistant",
    content:
      "Hi! I am the Apex assistant. Ask me about courses, admissions, campus life, or placements.",
  },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    if (!OPENROUTER_API_KEY || OPENROUTER_API_KEY === "your_openrouter_api_key_here") {
      setError("Add your OpenRouter API key in the .env file to enable chat.");
      setIsOpen(true);
      return;
    }

    const userMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Apex Institute Website Chatbot",
        },
        body: JSON.stringify({
          model: OPENROUTER_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...nextMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message || "The chatbot could not respond right now."
        );
      }

      const reply = data?.choices?.[0]?.message?.content?.trim();

      if (!reply) {
        throw new Error("The chatbot returned an empty response.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while contacting OpenRouter."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-widget">
      {isOpen ? (
        <section
          className="chatbot-popup"
          aria-label="Apex chatbot"
          aria-live="polite"
        >
          <header className="chatbot-popup-header">
            <div className="chatbot-popup-title">
              <span className="chatbot-popup-icon" aria-hidden="true">
                <Bot size={18} />
              </span>
              <div>
                <strong>Apex Assistant</strong>
                <span>Live chat with OpenRouter</span>
              </div>
            </div>

            <button
              type="button"
              className="chatbot-icon-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </header>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <article
                key={`${message.role}-${index}`}
                className={`chatbot-message chatbot-message-${message.role}`}
              >
                <p>{message.content}</p>
              </article>
            ))}

            {isLoading ? (
              <article className="chatbot-message chatbot-message-assistant chatbot-message-loading">
                <p>Apex assistant is typing...</p>
              </article>
            ) : null}

            <div ref={messagesEndRef} />
          </div>

          {error ? <p className="chatbot-error">{error}</p> : null}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <textarea
              className="chatbot-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about admissions, courses, placements..."
              rows={1}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSubmit(event);
                }
              }}
            />

            <button
              type="submit"
              className="chatbot-send-button"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        className="chatbot-launcher"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        <MessageCircle size={22} />
        <span>Chat</span>
      </button>
    </div>
  );
}

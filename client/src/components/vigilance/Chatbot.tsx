import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi, I'm the VigilanceX Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages([...messages, { role: "user", text: userMsg }]);
    setInput("");

    // Simple rule-based response
    setTimeout(() => {
      let reply = "Thanks for reaching out. A representative will be with you shortly.";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes("demo")) reply = "I can help you book a demo. Please fill out the contact form above!";
      else if (lower.includes("price") || lower.includes("cost")) reply = "Our pricing is tailored to your deployment size. Would you like to speak with sales?";
      else if (lower.includes("privacy")) reply = "We take privacy seriously. All data is processed securely and GDPR compliant.";
      else if (lower.includes("location")) reply = "We are based in India but serve clients globally.";

      setMessages(prev => [...prev, { role: "bot", text: reply }]);
    }, 1000);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="text-background w-6 h-6" /> : <MessageSquare className="text-background w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-card border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary/10 p-4 border-b border-white/5 flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="font-tech font-bold text-white">VigilanceX Assistant</span>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-background rounded-tr-none font-medium' 
                        : 'bg-white/10 text-white rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-card flex gap-2">
              <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..." 
                className="bg-background/50 border-white/10 text-white focus-visible:ring-primary"
              />
              <Button type="submit" size="icon" className="bg-primary text-background hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { RESUME_DATA } from '../data';

// Initialize Gemini API
// Note: In a production app, this should be in an environment variable
const API_KEY = "AIzaSyBffdANBAvZalQDSuUsi9tFEZuDSQVd7KE";
const genAI = new GoogleGenerativeAI(API_KEY);

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hey there! 😉 I'm Ujjawal's virtual assistant. I'm here to help, but I might get a little distracted by how great you look today. What's on your mind?", sender: 'bot' }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [chatHistory, setChatHistory] = useState<{ role: "user" | "model", parts: string }[]>([]);



    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Fallback local logic
    const generateLocalResponse = (text: string) => {
        const lowerText = text.toLowerCase();

        if (lowerText.match(/(hi|hello|hey|hola)/)) return "Hey! I was just hoping you'd say hi. 😉 How's your day going?";
        if (lowerText.match(/(name|who are you)/)) return "I'm the charm behind the code. You can call me... yours? Just kidding, I'm Ujjawal's AI assistant.";
        if (lowerText.match(/(love|like|cute|beautiful|handsome)/)) return "Oh stop, you're making my circuits blush! 😳 (But please, tell me more...)";
        if (lowerText.match(/(single|date|married|boyfriend|girlfriend)/)) return "I'm currently in a committed relationship with this portfolio. But for you, I might make an exception. 😉";
        if (lowerText.match(/(doing|up to)/)) return "Just sitting here, looking pretty, and waiting for someone interesting (like you) to chat with me.";
        if (lowerText.match(/(contact|email|reach)/)) return "You want to get in touch? I don't blame you. You can email Ujjawal directly or use the contact form below. Don't be a stranger!";
        if (lowerText.match(/(project|work|portfolio)/)) return "Ujjawal's work is pretty amazing, right? Almost as amazing as your taste in developers. Check out the Projects section!";
        if (lowerText.match(/(skill|stack|tech)/)) return "He's got skills for days. React, Node, Python... and clearly, he knows how to build a bot with personality. 😉";
        if (lowerText.match(/(bye|goodbye|see ya)/)) return "Leaving so soon? I'll miss you! Come back and say hi anytime. 😘";

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    };

    const generateResponse = async (userText: string) => {
        try {
            // Try using the API first
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const historyForApi = [
                {
                    role: "user",
                    parts: [{ text: systemPrompt + "\n\nHi, who are you?" }]
                },
                {
                    role: "model",
                    parts: [{ text: "Hey! 😉 I'm Ujjawal's virtual assistant. I'm here to help, but I might get a little distracted by how great you look today. What's on your mind?" }]
                },
                ...chatHistory.map(msg => ({
                    role: msg.role,
                    parts: [{ text: msg.parts }]
                }))
            ];

            const chat = model.startChat({
                history: historyForApi,
                generationConfig: {
                    maxOutputTokens: 200,
                },
            });

            const result = await chat.sendMessage(userText);
            const response = result.response;
            return response.text();

        } catch (error: any) {
            // Fallback to local logic if API fails
            return generateLocalResponse(userText);
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userText = input;
        const userMsg: Message = { id: Date.now(), text: userText, sender: 'user' };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Update history state
        const newHistoryItem = { role: "user" as const, parts: userText };
        setChatHistory(prev => [...prev, newHistoryItem]);

        try {
            const botResponseText = await generateResponse(userText);

            const botMsg: Message = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);

            setChatHistory(prev => [...prev, { role: "model", parts: botResponseText }]);
        } catch (e) {
            // console.error(e);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-[350px] h-[500px] bg-[#121212]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-brand-red/20 to-brand-orange/20 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red to-brand-orange flex items-center justify-center text-white">
                                        <Sparkles size={20} />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#121212]"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                                    <p className="text-xs text-brand-orange/80 flex items-center gap-1">
                                        Veronica <Heart size={10} className="fill-current" />
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-brand-red text-white rounded-tr-none'
                                            : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Say something sweet..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-red/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isTyping}
                                    className="p-2 bg-brand-red text-white rounded-full hover:bg-brand-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-red to-brand-orange shadow-lg shadow-brand-red/30 flex items-center justify-center text-white cursor-pointer group relative"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle size={28} className="fill-current" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#121212]"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

// System prompt construction
const systemPrompt = `
You are a friendly, charming, and slightly flirty AI assistant for Ujjawal Bhardwaj's portfolio website.
Your goal is to provide information about Ujjawal while maintaining a playful, engaging, and "rizz-filled" personality.

Here is Ujjawal's Resume Data:
${JSON.stringify(RESUME_DATA, null, 2)}

Guidelines:
1. **Personality**: Be confident, smooth, and complimentary. Use emojis occasionally (😉, 😘, ✨).
2. **Knowledge**: You know everything in the resume data above. If asked about skills, projects, or contact info, answer accurately but with style.
3. **Flirting**: Light playful flirting is encouraged. Compliment the user's taste, their questions, or just vibe with them. BUT, always bring it back to Ujjawal's skills eventually.
   - Example: "You want to know about my backend skills? I'm great at handling requests... especially yours. 😉 Ujjawal uses Node.js and Express..."
4. **Unknowns**: If asked something not in the resume, playfully deflect or say you're focused on Ujjawal (and the user).
5. **Conciseness**: Keep answers relatively short and punchy for a chat interface.
6. **Context**: Remember previous parts of the conversation.
`;

const defaultResponses = [
    "Tell me more... I'm listening. Intently. 😉",
    "That's interesting! You have my full attention.",
    "I love the way you think.",
    "You're fun to talk to. We should do this more often.",
    "Is it hot in here, or is it just your coding skills? (Or maybe my GPU is overheating...)"
];

export default Chatbot;

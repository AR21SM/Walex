import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'react-feather';
import { motion, AnimatePresence } from "framer-motion";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name") || "User";

    const [amount, setAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type) => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleTransfer = useCallback(async () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            showNotification("Please enter a valid amount.", "error");
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post("/api/transfer", { name, amount });
            if (response.data.success) {
                showNotification("Transfer successful!", "success");
            } else {
                showNotification("Transfer failed. Try again.", "error");
            }
        } catch (error) {
            showNotification("Transfer failed. Try again.", "error");
        }
        setIsLoading(false);
    }, [amount, name]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 relative">
            {/* Notifications in Top-Right Corner */}
            <div className="fixed top-6 right-6 flex flex-col space-y-3 z-50">
                <AnimatePresence>
                    {notification && (
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className={`px-5 py-3 rounded-lg shadow-lg text-white flex items-center gap-3 ${
                                notification.type === "success" ? "bg-emerald-600" : "bg-red-600"
                            }`}
                        >
                            {notification.type === "success" ? (
                                <CheckCircle className="w-5 h-5" />
                            ) : (
                                <AlertCircle className="w-5 h-5" />
                            )}
                            <span className="text-sm font-medium">{notification.message}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Modern Glassmorphism Card */}
            <div className="w-full max-w-md bg-white/50 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/30">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Send Money</h1>
                    <p className="text-gray-500 text-sm">Instant transfer to {name}</p>
                </div>

                {/* User Avatar Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center 
                            shadow-md transform hover:scale-105 transition-all duration-300">
                            <span className="text-2xl text-white font-semibold">{name[0].toUpperCase()}</span>
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-800">{name}</h3>
                    <p className="text-gray-500 text-sm">Active Now</p>
                </div>

                {/* Input & Button Section */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Enter Amount</label>
                        <div className="relative">
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleTransfer()}  // Press Enter to Send
                                className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 bg-white/70 
                                    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 
                                    outline-none shadow-md hover:shadow-lg"
                                placeholder="0.00"
                                min="0"
                            />
                            <span className="absolute right-4 top-3.5 text-gray-400 text-lg">₹</span>
                        </div>
                    </div>

                    <button
                        onClick={handleTransfer}
                        disabled={isLoading}
                        className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold 
                            transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isLoading ? (
                            <div className="flex items-center space-x-3">
                                <Loader className="animate-spin h-5 w-5" />
                                <span>Processing...</span>
                            </div>
                        ) : (
                            'Send Instantly'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

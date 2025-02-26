import qr from '../assets/qrlogo.png';

export const Balance = ({ value }) => {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        // Add temporary visual feedback here if needed
    };

    return (
        <div className="flex justify-between bg-gradient-to-br from-[#FFFFFF] via-[#FCFCFC] to-[#FAFAFA] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-3xl p-6 w-full max-w-2xl border border-gray-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300">
            {/* Left Section */}
            <div className="flex flex-col justify-between pr-8 w-[60%]">
                <div className="space-y-4 border-b border-gray-100 pb-6">
                    <div className="text-gray-600 font-medium text-xl uppercase tracking-wider">
                        Total Balance
                    </div>
                    <div className="text-gray-900 font-bold text-4xl font-sans">
                        ₹{value}
                    </div>
                </div>

                <div className="pt-6 space-y-4">
                    {/* Account Details */}
                    <div className="space-y-1">
                        <div className="text-gray-500 text-sm font-medium tracking-wide">
                            ACCOUNT NUMBER
                        </div>
                        <div className="text-gray-700 font-mono text-base tracking-tight">
                            AR21SM-Walex-0021-0013-0000-2025
                        </div>
                    </div>

                    {/* Link Mobile */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.8} 
                                stroke="currentColor" 
                                className="w-5 h-5 text-gray-600"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">
                                Link Mobile Number
                            </span>
                            <span className="text-gray-500 text-xs font-mono">
                                AR21SM00212025@Walex
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-[40%] pl-2 border-l border-gray-100">
                <div className="flex flex-col items-center h-full justify-between">
                    {/* QR Code */}
                    <div className="bg-white p-0 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-100 w-56 h-52 flex items-center justify-center mt-3">
                        <img 
                            src={qr} 
                            alt="UPI QR Code"
                            className="w-56 h-56 rounded-lg" 
                        />
                    </div>

                    {/* UPI Section */}
                    <div className="w-full mt-4 space-y-3">
                        <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-xl">
                            <span className="text-gray-700 text-sm font-mono">
                                AR21SM00212025@Walex
                            </span>
                            <button 
                                onClick={() => handleCopy('AR21SM00212025@Walex')}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.8} 
                                    stroke="currentColor" 
                                    className="w-5 h-5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="text-center">
                            <div className="text-gray-600 text-xs font-semibold tracking-wide uppercase">
                                Scan QR Code to Pay
                            </div>
                            <div className="text-gray-400 text-[0.6rem] mt-0.5 tracking-wide">
                                Valid for all UPI apps
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
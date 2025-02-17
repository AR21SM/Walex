export const Balance = ({ value }) => {
    return (
        <div className="flex items-center justify-between bg-gradient-to-r from-[#F0F4FF] to-[#E6F0FF] shadow-[0_3px_12px_rgba(0,0,0,0.08)] rounded-2xl px-8 py-6 w-full max-w-md border border-gray-100/30 hover:shadow-[0_5px_18px_rgba(0,0,0,0.12)] transition-shadow duration-300">
            <div className="text-[#1A73E8] font-semibold text-2xl font-sans">
                Your Balance
            </div>
            <div className="text-[#1A73E8] font-bold text-4xl font-sans">
                ₹{value}
            </div>
        </div>
    );
};

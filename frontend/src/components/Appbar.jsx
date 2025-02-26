import logo from '../assets/logo.png';

export const Appbar = () => {
    return (
        <div className="shadow-lg h-24 bg-white text-[#37404F] flex items-center justify-between px-8 border-b border-orange-100/40">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <img
                    src={logo}
                    alt="Walex Logo"
                    className="h-20 w-auto transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_2px_4px_rgba(234,88,12,0.15)]"
                />
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-6">
                <div className="text-lg font-medium text-[#37404F] hover:text-[#C05621] transition-colors duration-300 cursor-pointer">
                    Hello, AR21SM
                </div>
                <div className="relative">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white text-[#37404F] font-semibold text-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(234,88,12,0.15)] transition-all duration-300 cursor-pointer hover:scale-105">
                        A
                    </div>
                    {/* Notification Badge */}
                    <div className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-amber-500 border-2 border-white"></div>
                </div>
            </div>
        </div>
    );
};

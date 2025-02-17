import logo from '../assets/logo.png'; // Adjust the path based on your folder structure

export const Appbar = () => {
    return (
        <div className="shadow-lg h-20 bg-gradient-to-r from-white to-gray-50 text-gray-800 flex items-center justify-between px-8 border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center space-x-4">
                <img
                    src={logo} // Use the imported logo
                    alt="Logo"
                    className="h-12 w-auto transform transition-transform duration-300 hover:scale-105" // Add a subtle hover effect
                />
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-6">
                <div className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer">
                    Hello, User
                </div>
                <div className="relative">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105">
                        U
                    </div>
                    {/* Notification Badge */}
                    <div className="absolute top-0 right-0 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-white"></div>
                </div>
            </div>
        </div>
    );
};
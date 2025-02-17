export function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="
                w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 
                hover:from-blue-600 hover:to-indigo-700 
                focus:outline-none focus:ring-4 focus:ring-blue-300 
                font-semibold rounded-md text-sm px-5 py-2.5 
                transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md
            "
        >
            {label}
        </button>
    );
}

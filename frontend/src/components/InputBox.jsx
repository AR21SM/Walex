export function InputBox({ label, placeholder, onChange }) {
    return (
        <div className="w-full">
            <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
            <input 
                type="text"
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
        </div>
    );
}

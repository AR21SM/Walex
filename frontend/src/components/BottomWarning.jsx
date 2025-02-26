import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
    return (
        <div className="py-3 text-sm flex justify-center text-gray-600">
            <span>{label}</span>
            <Link 
                to={to} 
                className="pl-1 text-blue-600 font-medium hover:underline"
            >
                {buttonText}
            </Link>
        </div>
    );
}

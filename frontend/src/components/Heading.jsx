export function Heading({ label, center = false }) {
    return (
        <div className={`font-semibold text-3xl md:text-4xl pt-4 pb-2 text-gray-800 ${center ? "text-center" : ""}`}>
            {label}
        </div>
    );
}

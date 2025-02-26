import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, [filter]);

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Users</h1>

            {/* Search Input */}
            <div className="mb-8">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
            </div>

            {/* User Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <UserCard key={user._id} user={user} index={index} />
                    ))
                ) : (
                    <p className="text-gray-500">No users found.</p>
                )}
            </div>
        </div>
    );
};

function UserCard({ user, index }) {
    const navigate = useNavigate();

    // Get user initials
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(part => part[0].toUpperCase())
            .join('');
    };

    // Color palette with alternating hues to avoid repetitive colors
    const colors = [
        "#F43F5E", // Rose
        "#3B82F6", // Blue
        "#10B981", // Emerald
        "#F59E0B", // Amber
        "#8B5CF6", // Purple
        "#EC4899", // Pink
        "#6366F1", // Indigo
        "#14B8A6", // Teal
        "#D97706", // Orange
        "#9333EA", // Violet
    ];

    // Alternate colors based on the index, ensuring no two consecutive users share the same color
    const getColor = (index) => {
        const colorIndex = index % colors.length;
        return colors[colorIndex];
    };

    const avatarColor = getColor(index);

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border border-gray-100">
            {/* Avatar with dynamic background color */}
            <div 
                className="w-16 h-16 rounded-full text-white text-2xl font-bold flex items-center justify-center mb-4"
                style={{ backgroundColor: avatarColor }}
            >
                {getInitials(`${user.firstName} ${user.lastName}`)}
            </div>

            {/* User Info */}
            <h2 className="text-xl font-semibold text-gray-900">{user.firstName} {user.lastName}</h2>
            <p className="text-gray-500 mb-4">@{user.firstName.toLowerCase()}{user.lastName.toLowerCase()}</p>

            {/* Send Money Button */}
            <Button
                onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
                label="Send Money"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            />
        </div>
    );
}

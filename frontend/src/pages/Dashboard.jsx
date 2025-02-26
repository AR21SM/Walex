// pages/Dashboard.jsx
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { RecentTxn } from "../components/RecentTxn"
import { Users } from "../components/Users"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8 space-y-8">
            <div className="flex gap-8">
                <div className="flex-1">
                    <Balance value={"10,000"} />
                </div>
                <div className="flex-1">
                    <RecentTxn />
                </div>
            </div>
            <Users />
        </div>
    </div>
}
import SideBar from "@/components/molecules/SideBar";
import Stats from "@/components/organisms/Stats";

export default function DashBoard() {
    return (
        <div className="w-screen h-dvh overflow-hidden flex ">
            <SideBar />
            <Stats />
        </div>
    )
}
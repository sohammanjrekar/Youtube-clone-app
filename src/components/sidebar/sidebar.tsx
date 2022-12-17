import {
    ArchiveIcon,
    ChartSquareBarIcon,
    ClockIcon,
    GlobeIcon,
    HomeIcon,
    LightningBoltIcon,
    PauseIcon,
    PlayIcon,
    ThumbUpIcon,
} from "@heroicons/react/outline";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
    return (
        <div className="bg-secondary hidden md:inline-block text-white pt-24 h-screen">
            <div className="flex flex-col">
                <SidebarButton
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                />
                <SidebarButton
                    icon={<GlobeIcon className="w-6 h-6" />}
                    label="Trending"
                />
                <SidebarButton
                    icon={<LightningBoltIcon className="w-6 h-6" />}
                    label="Shorts"
                />
                <SidebarButton
                    icon={<ChartSquareBarIcon className="w-6 h-6" />}
                    label="History"
                />
            </div>
            <hr className="border-t-[0.1px] border-gray-600 opacity-60 m-4" />

            <div className="flex flex-col">
                <SidebarButton
                    icon={<ArchiveIcon className="w-6 h-6" />}
                    label="Library"
                />
                <SidebarButton
                    icon={<ClockIcon className="w-6 h-6" />}
                    label="Watch Later"
                />
                <SidebarButton
                    icon={<PlayIcon className="w-6 h-6" />}
                    label="Subscrition"
                />
                <SidebarButton
                    icon={<PauseIcon className="w-6 h-6" />}
                    label="Past"
                />
                <SidebarButton
                    icon={<ThumbUpIcon className="w-6 h-6" />}
                    label="Like"
                />
            </div>
        </div>
    );
};

export default Sidebar;

import { useSession } from "next-auth/react";
import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="p-2 mt-5 max-[600px] xl:mon-w-[300px] ">
      <SidebarRow ser={session.user.image} title={session.user.name} />

      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;

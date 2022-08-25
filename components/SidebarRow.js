import Image from "next/image";
import React from "react";

const SidebarRow = ({ ser, Icon, title }) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {ser && (
        <Image
          className="rounded-full"
          src={ser}
          width={35}
          height={35}
          layout="fixed"
          alt={title}
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;

import Image from "next/image";
import React from "react";

function StoriesCard(props) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:-w32 cursor-pointer overflow-x p-3 transition duration-200 tarnsition ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={props.src}
        alt={props.name}
        width={40}
        height={40}
        layout="fixed"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={props.src}
        alt={props.name}
        layout="fill"
      />
    </div>
  );
}

export default StoriesCard;

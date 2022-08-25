import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Contact from "./Contact";

function Widgets() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const users = [...Array(10)].map((_, i) => ({
      id: i,
      name: faker.internet.userName(),
      src: faker.image.avatar(),
    }));
    setContacts(users);
  }, []);

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts?.map((contect, i) => {
        return (
          <Contact
            key={contect.id}
            priority={i === 0}
            src={contect.src}
            name={contect.name}
          />
        );
      })}
    </div>
  );
}

export default Widgets;

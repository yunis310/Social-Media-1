import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import StoriesCard from "./StoriesCard";

function Stories() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = [...Array(6)].map((_, i) => ({
      id: i,
      name: faker.internet.userName(),
      email: faker.internet.email(),
      src: faker.image.avatar(),
    }));
    setUsers(users);
  }, []);

  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {users?.map((profile, i) => {
        return (
          <StoriesCard
            key={profile.id}
            priority={i === 0}
            name={profile.name}
            src={profile.src}
          />
        );
      })}
    </div>
  );
}

export default Stories;

import Image from "next/image";
import React from "react";

import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import avatar5 from "@/assets/avatar5.png";

const avatarList = [avatar1, avatar2, avatar3, avatar4, avatar5];

export const Connected = () => {
  return (
    <>
      <h1 className="text-5xl font-semibold">Welcome Buildoor</h1>
      <div>
        <p>
          Each buildoor is randomly generated and can be staked to
          receive <span className="font-semibold">$BLD</span>
        </p>
        <p>
          Use your <span className="font-semibold">$BLD</span> to
          upgrade your buildoor and receive perks within the comunity!
        </p>
      </div>
      <ul className="flex gap-8">
        {avatarList.map((avatar, index) => {
          return (
            <div key={index} className="w-40 h-40">
              <Image
                alt={`Imagen del avatar ${index}`}
                src={avatar}
              />
            </div>
          );
        })}
      </ul>
      <button className="p-3 mt-4 rounded w-60 bg-primary">
        mint buildoor
      </button>
    </>
  );
};

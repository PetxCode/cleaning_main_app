import Image from "next/image";
import React from "react";
import pix from "@/public/assest/zion.jpg";
import { MdArrowDownward } from "react-icons/md";

const Profile = () => {
  return (
    <div className="flex items-center gap-2 text-[12px] border rounded-md px-2 py-1">
      <div>
        <Image
          alt="image"
          src={pix}
          width={1000}
          height={1000}
          className="w-[30px] h-[30px] border rounded-full object-cover"
        />
      </div>
      <div className="font-semibold">Peter Oti</div>
      <div>
        <MdArrowDownward />
      </div>
    </div>
  );
};

export default Profile;

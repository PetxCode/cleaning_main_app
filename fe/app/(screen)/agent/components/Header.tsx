"use client";

import React from "react";
import Profile from "./Profile";
// import { headers } from "../services/headers";
import { iHeaders } from "../services/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdBookmark,
  MdDashboard,
  MdPerson,
  MdSettings,
  MdStadium,
} from "react-icons/md";

const Header = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const headers: iHeaders[] = [
    {
      id: 1,
      name: "Dashboard",
      path: "/agent",
      icon: <MdDashboard />,
    },
    {
      id: 2,
      name: "Request",
      path: "/agent/request",
      icon: <MdBookmark />,
    },
    {
      id: 3,
      name: "Students",
      path: "/agent/student",
      icon: <MdPerson />,
    },
    {
      id: 4,
      name: "My Subjects",
      path: "/agent/subjects",
      icon: <MdStadium />,
    },
    {
      id: 5,
      name: "Account",
      path: "/agent/account",
      icon: <MdSettings />,
    },
  ];

  return (
    <div className="flex w-full h-[60px] justify-center items-center border-b mb-3">
      <div className="flex w-[90%] h-full justify-between items-center">
        <div>Logo</div>
        <div className="flex items-center gap-8 text-[13px]">
          {headers?.map((props: any) => (
            <Link
              href={props.path!}
              key={props.id}
              className={
                isActive(props.path)
                  ? "text-purple-700 font-semibold px-4 py-2 rounded-md bg-slate-100 border"
                  : ""
              }
            >
              <div className="flex items-center gap-1">
                <div>{props.icon}</div>
                <p>{props.name}</p>
              </div>
            </Link>
          ))}
        </div>

        <Profile />
      </div>
    </div>
  );
};

export default Header;

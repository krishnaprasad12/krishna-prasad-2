"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser,IconBook, IconSettings2, IconPhone } from "@tabler/icons-react";

function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "#",
          icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "#about",
          icon: <IconUser className="h-6 w-6 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "#projects",
            icon: (
              <IconSettings2 className="h-6 w-6 text-neutral-500 dark:text-white" />
            ),
        },
      ];
    return (
        <div>
            <FloatingNav navItems={navItems} />
        </div>
    );
}

export default Navbar;

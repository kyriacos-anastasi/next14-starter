"use client";

import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.link}
      className={`${styles.container} ${
        pathName === item.link && styles.active
      }`}>
      {item.name}
    </Link>
  );
};

export default NavLink;

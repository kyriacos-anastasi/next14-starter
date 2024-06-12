"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navlink/navLink";

const session = true;
const isAdmin = true;

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.name} item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ name: "Admin", link: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ name: "Login", link: "/login" }} />
        )}
      </div>

      <button className={styles.menuButton} onClick={() => setOpen((o) => !o)}>
        Menu
      </button>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.name} item={link} />
          ))}
        </div>
      )}

      {/* {session ? (
        <>
          {isAdmin && <NavLink item={{ name: "Admin", link: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ name: "Login", link: "/login" }} />
      )} */}
    </div>
  );
};
export default Links;

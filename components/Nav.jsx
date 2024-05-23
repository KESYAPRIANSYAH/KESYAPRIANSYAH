//link (next js)
import Link from "next/link";

//next hook
import { usePathname } from "next/navigation";

//framer mmotion
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
            {link.path === path && <motion.span initial={{ y: "-100%" }} animate={{ y: 0 }} transition={{ type: "tween" }} layoutId="underline" className={`${underlineStyles}`} />}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

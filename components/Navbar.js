import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SITE_META } from "../lib/constants";
import Image from "next/image";
import Logo from "@/public/brand/logo.svg";
import iconHome from "@/public/assets/icon/home.svg";
import iconMenu from "@/public/assets/icon/menu.svg";
import iconClose from "@/public/assets/icon/close.svg";
import iconPuzzle from "@/public/assets/icon/puzzle.svg";
import iconStrategy from "@/public/assets/icon/strategy.svg";
import iconSports from "@/public/assets/icon/sports.svg";
import iconBoard from "@/public/assets/icon/board.svg";
import iconClassics from "@/public/assets/icon/classics.svg";
import iconArcade from "@/public/assets/icon/arcade.svg";
import iconJunior from "@/public/assets/icon/junior.svg";
import iconAdventure from "@/public/assets/icon/adventure.svg";

export default function Navbar({ navItems }) {
  const [isOpen, setIsOpen] = useState(false); // 默认不展开导航菜单

  const router = useRouter();
  // const currentQuery = router.query;
  const currentPath = router.asPath;

  // console.log(`router: `, router);
  // console.log(`currentQuery: `, currentQuery);
  // console.log(`currentPath: `, currentPath);

  function handleClick() {
    setIsOpen(() => !isOpen);
    // console.log(`isOpen`, isOpen);
  }

  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-list a"); // 导航链接集合
    let currentItem = document.querySelector(".current"); // 选取.current
    currentItem && currentItem.classList.remove("current"); // 如果存在.current则先移除

    for (let i of menuItems) {
      i.getAttribute("href") === currentPath
        ? (i.parentNode.classList += " current")
        : null;
      // console.log(`parent Ele: `, i.parentElement);
      // console.log(`parent Node: `, i.parentNode);
      // console.log(`a href: `, i.getAttribute("href"));
      // console.log(`b: `, i.parentNode.classNameList);
      // console.log(`currentQuery: `, currentQuery.slug);
    }
  }, [currentPath]);
  return (
    <nav className="site-nav">
      <div className="relative grow">
        <Link href="/" className="site-branding">
          <Image
            className="logo"
            width={300}
            height={121}
            src={Logo}
            alt="Logo"
          />
          <span className="sr-only">{SITE_META.NAME}</span>
        </Link>
        <button className="menu-btn" onClick={handleClick}>
          <Image
            src={isOpen ? iconClose : iconMenu}
            width={20}
            height={20}
            alt="menu"
          />
        </button>
        <div className={`menu-content xl:block ${isOpen ? "" : "hidden"}`}>
          <ul role={`navigation`} className="menu-list">
            <li>
              <Link href="/">
                <Image src={iconHome} width={20} height={20} alt="home" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/category/puzzles">
                <Image src={iconPuzzle} width={20} height={20} alt="puzzle" />
                <span>Puzzles</span>
              </Link>
            </li>
            <li>
              <Link href="/category/adventure">
                <Image
                  src={iconAdventure}
                  width={20}
                  height={20}
                  alt="adventure"
                />
                <span>Adventure</span>
              </Link>
            </li>
            <li>
              <Link href="/category/classics">
                <Image
                  src={iconClassics}
                  width={20}
                  height={20}
                  alt="classics"
                />
                <span>Classics</span>
              </Link>
            </li>
            <li>
              <Link href="/category/arcade">
                <Image src={iconArcade} width={20} height={20} alt="arcade" />
                <span>Arcade</span>
              </Link>
            </li>
            <li>
              <Link href="/category/junior">
                <Image src={iconJunior} width={20} height={20} alt="junior" />
                <span>Junior</span>
              </Link>
            </li>
            <li>
              <Link href="/category/board">
                <Image src={iconBoard} width={20} height={20} alt="board" />
                <span>Board</span>
              </Link>
            </li>
            <li>
              <Link href="/category/sports">
                <Image src={iconSports} width={20} height={20} alt="sports" />
                <span>Sports</span>
              </Link>
            </li>
            <li>
              <Link href="/category/strategy">
                <Image
                  src={iconStrategy}
                  width={20}
                  height={20}
                  alt="strategy"
                />
                <span>Strategy</span>
              </Link>
            </li>
          </ul>
          <div className="nav-footer">
            <ul>
              <li>
                <Link href="/t/about">About</Link>
              </li>
              <li>
                <Link href="/t/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/t/terms-of-use">Terms of Use</Link>
              </li>
            </ul>
            <p>
              © {new Date().getFullYear()} {SITE_META.NAME}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import { SITE_META } from "@/lib/constants";
import Logo from "@/public/brand/logo.png";
// import { useRouter } from "next/router";
export default function Footer(params) {
  return (
    <footer className="site-footer">
      {/* <nav className="footer-nav">
        <ul>
          <li>
            <Link href={`/about`}>About</Link>
          </li>
          <li>
            <Link href={`/privacy`}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={`/terms`}>Terms of Use</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Image className="footer-logo" src={Logo} alt={SITE_META.NAME} /> */}
      <Image
        className="w-8 h-8"
        src={Logo}
        width={14}
        height={14}
        // src={useRouter().basePath + `/brand/uptapgame-logo.svg`}
        alt={SITE_META.NAME}
      />
      {/* <p>{`© ${new Date().getFullYear()} ${SITE_META.NAME}`}</p> */}
    </footer>
  );
}

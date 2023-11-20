import Image from "next/image";
import Link from "next/link";
import { SITE_META } from "@/lib/constants";
import Logo from "@/public/brand/logo-white-min.svg";
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
        className="h-6 opacity-50"
        src={Logo}
        width={300}
        height={121}
        // src={useRouter().basePath + `/brand/uptapgame-logo.svg`}
        alt={SITE_META.NAME}
      />
      {/* <p>{`© ${new Date().getFullYear()} ${SITE_META.NAME}`}</p> */}
    </footer>
  );
}

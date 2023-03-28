import Footer from "./Footer";
import Navbar from "./Navbar";
import { Nunito } from "next/font/google";
import { useRouter } from "next/router";

const nunito = Nunito({ subsets: ["latin"] });

export default function Layout({ children }) {
  const router = useRouter();
  const isList = router.pathname === "/category/[slug]";
  const isDetail = router.pathname === "/game/[slug]";
  const isPage = ["/t/about", "/t/privacy-policy", "/t/terms-of-use"].includes(router.pathname);
  console.log(`isDetail`, router.pathname, isDetail);
  return (
    <div
      className={`wrapper ${nunito.className} ${
        isList ? "list" : isDetail ? "detail" : isPage ? "page" : ""
      }`}
    >
      <Navbar />
      <div className="main-content">
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

import getGameBanner from "@/utils/getGameBanner";
import getGameIcon from "@/utils/getGameIcon";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_GAMES } from "@/lib/constants";

export default function ListItem({ item, type }) {
  const isFeatured = FEATURED_GAMES.includes(item.gid);
  return (
    <li role={`listitem`}>
      <Link
        href={`/game/${item.slug}`}
        title={item.title}
        className={isFeatured ? "featured" : ""}
      >
        <Image
          className="image"
          src={
            type !== `banner` ? getGameIcon(item.gid) : getGameBanner(item.gid)
          }
          alt={item.title}
          width={type !== `banner` ? 100 : 132}
          height={type !== `banner` ? 100 : 81}
        />
        <span className={type == "no-text" ? "sr-only" : ""}>{item.title}</span>
        {/* <div className="category">{item.category.name}</div> */}
        {/* <div className="rating">{item.rating}</div> */}
      </Link>
    </li>
  );
}

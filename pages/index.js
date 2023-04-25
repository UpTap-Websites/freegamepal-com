import Head from "next/head";
import Layout from "../components/Layout";

import Link from "next/link";

import ListItem from "@/components/ListItem";
import { getDataForHome } from "../lib/api";
import { SITE_META } from "../lib/constants";
import AdScript from "@/components/AdScript";

export default function Home({ data }) {
  console.log(`data: `, data);
  // console.log(`categories: `, categories);
  return (
    <Layout>
      <Head>
        <title>{SITE_META.NAME + ` | ` + SITE_META.TAGLINE}</title>
        <meta name="description" content="Play online games for free!" />
        <link rel="canonical" href={SITE_META.URL} />
      </Head>
      <AdScript />

      {data.map((i, index) => (
        <section className="game-box" key={i.category.slug}>
          <div className={`section-title`}>
            <h2 className={`h2`}>{i.category.name}</h2>
            {i.data.total > 6 ? (
              <Link
                href={`/category/` + i.category.slug}
                className="more-link"
                title="More"
              >
                More
              </Link>
            ) : null}
          </div>
          <ul className={`game-list`}>
            {i.data.games.map((i) => (
              <ListItem item={i} type={`banner`} key={i.slug} />
              // <li className="list-item" key={i.slug}>
              //   <Link href={`/game/` + i.slug}>
              //     <Image
              //       className="image"
              //       src={getGameBanner(i.gid)}
              //       alt={i.title}
              //       width={100}
              //       height={100}
              //       loading={index <= 1 ? `eager` : `lazy`}
              //     />
              //     <div className="title">{i.title}</div>
              //   </Link>
              // </li>
            ))}
          </ul>
        </section>
      ))}
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await getDataForHome();

  return {
    props: {
      data,
      // categories,
    },
  };
};

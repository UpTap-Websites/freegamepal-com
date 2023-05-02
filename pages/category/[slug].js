import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

import Link from "next/link";
import { SITE_META } from "@/lib/constants";

import { getCategories, getGamesByCategorySlug } from "@/lib/api";
import getGameIcon from "@/utils/getGameIcon";
import getGameBanner from "@/utils/getGameBanner";
import AdScript from "@/components/AdScript";

export default function Category({ games, category, total }) {
  console.log(`games: `, games);
  return (
    <Layout>
      <Head>
        <title>{category.name + ` Games | ` + SITE_META.NAME}</title>
        <meta
          name="description"
          content={`Play ${category.name} games on ${SITE_META.NAME}`}
        />
        <link
          rel="canonical"
          href={`${SITE_META.URL}/category/${category.slug}`}
        />
      </Head>
      <AdScript />

      <div className={`game-box category`}>
        <div className={`page-title`}>
          <h1>{category.name + ` Games`}</h1>
          {/* <span className="total">{total}</span> */}
        </div>
        <ul role={`list`} className={`game-list hide-text-list`}>
          {games.map((i, index) => (
            <li role={`listitem`} key={i.slug}>
              <Link href={`/game/` + i.slug}>
                <Image
                  className="image"
                  src={getGameBanner(i.gid)}
                  alt={i.title}
                  width={132}
                  height={81}
                  loading={index <= 9 ? `eager` : `lazy`}
                />
                <span className="title">{i.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* <Link href={`/category`} className="link-more">
            More
          </Link> */}
      </div>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  console.log(`ctx >>`, ctx);
  const data = await getGamesByCategorySlug(ctx.params.slug, 48 + 4 + 4 + 4);

  return {
    props: {
      games: data.games,
      total: data.total[0].countDistinct.id,
      category: { name: data.category?.[0].name, slug: ctx.params.slug },
    },
  };
};

export const getStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((i) => ({
    params: {
      slug: i.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

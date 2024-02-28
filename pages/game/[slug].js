/**
 * 不自动加载iframe，点击Play按钮时再加载
 */
import { useState } from "react";
import Layout from "@/components/Layout";
import List from "@/components/List";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
// import ListItem from "../../components/ListItem";
import { fetchAPI, getCategories, getGameBySlug } from "@/lib/api";
import { GAMES_PER_PAGE, SITE_META } from "@/lib/constants";
import getGameIcon from "@/utils/getGameIcon";
import getGameUrl from "@/utils/getGameUrl";
import AdScript from "@/components/AdScript";
import ListItem from "@/components/ListItem";

export default function Game({ game, relatedGames }) {
  console.log(`game: `, game);
  console.log(`relatedGames: `, relatedGames);
  const [gameUrl, setGameUrl] = useState(``);

  useEffect(() => {
    // 推送Play按钮点击数据
    const player = document.querySelector(".player");
    const gameIframe = document.querySelector(".gameIframe");
    const CTA = document.querySelector(".play-btn");
    const backBtn = document.querySelector(".back-btn");
    const bodyBg = document.querySelector("body");
    function resetAll() {
      player.classList.add("hidden");
      gameIframe.classList.add("hidden");
      CTA.classList.remove("xl:hidden");
      backBtn.classList.add("hidden");
      setGameUrl("");
    }
    resetAll();
    function handleClick(e) {
      process.env.NODE_ENV === `development` ? e.preventDefault() : null;
      console.log(`Event: `, e);
      gtag && gtag("event", "click_CTA", { game: game.title });
      setGameUrl(getGameUrl(game.slug));
      player.classList.remove("hidden");
      gameIframe.classList.remove("hidden");
      CTA.classList.add("xl:hidden");
      backBtn.classList.remove("hidden");
      bodyBg.classList.add("full-screen");
    }
    function handleClickBackBtn(e) {
      process.env.NODE_ENV === `development` ? e.preventDefault() : null;
      console.log(`Event: `, e);
      gtag && gtag("event", "click_backBtn", { game: game.title });
      resetAll();
      bodyBg.classList.remove("full-screen");
    }

    CTA.addEventListener("click", handleClick);
    backBtn.addEventListener("click", handleClickBackBtn);
    return () => {
      CTA.removeEventListener("click", handleClick);
      backBtn.removeEventListener("click", handleClick);
    };
  }, [game.title, game.slug]);
  return (
    <Layout>
      <Head>
        <title>{`Play ${game.title} on ${SITE_META.NAME}`}</title>
        <meta
          name="description"
          content={`Play ${game.title} on ${SITE_META.NAME}`}
        />
        <link rel="canonical" href={`${SITE_META.URL}/game/${game.slug}`} />
      </Head>
      {/* <AdScript /> */}
      <div className="game-box">
        <section className="game-detail m-4 flex flex-col xl:flex-row xl:gap-6">
          <div className="flex flex-col xl:relative xl:order-2 xl:grow">
            <div class="player fixed inset-0 order-1 hidden overflow-hidden bg-black xl:relative xl:mb-6 xl:block">
              <div className="back-btn absolute left-0 top-2 z-20 hidden rounded-r-full bg-lime-400 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                  />
                </svg>
              </div>
              <iframe
                class="gameIframe relative z-10 mx-auto hidden h-screen w-screen border-0 xl:grid xl:h-[600px] xl:w-full"
                // src={getGameUrl(game.gid)}
                src={gameUrl}
              ></iframe>
              <Image
                className="absolute left-1/2 top-1/2 -z-0 w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-70 blur-2xl"
                src={getGameIcon(game.gid)}
                width={200}
                height={200}
                alt={game.title}
                loading={`eager`}
              />
            </div>
            <div class="breadcrumb order-2 my-4 flex gap-2 text-sm text-slate-400">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href={`/category/${game.category.slug}`}>
                {game.category.name}
              </Link>
              <span>/</span>
              <span>{game.title}</span>
            </div>
            <div className="order-3 flex gap-4">
              <Image
                className="h-24 w-24 xl:h-20 xl:w-20"
                src={getGameIcon(game.gid)}
                width={200}
                height={200}
                alt={game.title}
                loading={`eager`}
              />
              <div>
                <h1 className="title mb-2 font-black text-slate-700 xl:text-3xl">
                  {game.title}
                </h1>
                <div className="game-info flex items-center gap-2">
                  <Link
                    href={`/category/${game.category.slug}`}
                    className="game-category rounded border px-1.5 py-0.5 text-sm"
                  >
                    {game.category.name}
                  </Link>
                  <span className="game-rating text-lg font-bold text-orange-500">
                    {(game.rating * 10).toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
            <div class="order-4 mx-auto my-3 w-72 xl:absolute xl:left-1/2 xl:top-72 xl:z-30 xl:order-1 xl:max-w-xs xl:-translate-x-1/2">
              <button
                className="play-btn"
                title={`Play ` + game.title + ` Now`}
              >
                <span>Play Now</span>
              </button>
              {/* <Link
                href={getGameUrl(game.slug)}
                className="play-btn"
                title={`Play ` + game.title + ` Now`}
              >
                <span>Play Now</span>
              </Link> */}
            </div>
            <div className="description order-5 my-4 flex flex-col gap-2 rounded-lg border-2 border-blue-100 bg-blue-50 p-4 text-sm">
              <h3 className="mb-2 font-bold">Description</h3>
              <div
                className="h-24 max-w-4xl overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: game.description }}
              />
            </div>
          </div>
          <div className="xl:order-1 xl:w-80">
            <div
              role={`banner`}
              class="banner mx-auto mb-6 flex h-[250px] w-[300px] items-center justify-center bg-slate-100"
            >
              <span>Your Position</span>
            </div>
            <ul role={`list`} className="grid grid-cols-3 gap-3 text-sm">
              {relatedGames.slice(8, 26).map((i) => (
                <ListItem key={i.slug} item={i} type={`no-text`} />
              ))}
            </ul>
          </div>
          <div className="mt-3 xl:order-3 xl:mt-0 xl:w-80">
            <ul role={`list`} className="grid grid-cols-3 gap-3 text-sm">
              {relatedGames.slice(26).map((i) => (
                <ListItem key={i.slug} item={i} type={`no-text`} />
              ))}
            </ul>
            <div
              role={`banner`}
              class="banner mx-auto mt-6 flex h-[250px] w-[300px] items-center justify-center bg-slate-100"
            >
              <span>Your Position</span>
            </div>
          </div>
        </section>
        <section>
          <div className="section-title">
            <h2 className="h2">You may also like</h2>
          </div>
          <List
            className={`hide-text-list`}
            items={relatedGames.slice(0, 8)}
            type={`banner`}
          />
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await getGameBySlug(ctx.params.slug, 8 + 36);

  return {
    props: {
      game: data?.games[0],
      relatedGames: data?.related,
    },
  };
};

export const getStaticPaths = async () => {
  // Games per page
  const PER_PAGE = GAMES_PER_PAGE; // 2023.5.20
  // Get categories
  const categories = await getCategories();
  // console.log(`detai ..categories`, categories);
  // Get games by category
  let data = [];
  for (const item of categories) {
    // console.log(`slug`, item.slug);
    const tmp = await fetchAPI(
      `
        query ($category: String, $limit: Int ){
          games (filter: { category: { slug: { _eq: $category } } }, limit: $limit) {
            slug
          }
        }
      `,
      {
        variables: {
          limit: PER_PAGE,
          category: item.slug,
        },
      }
    );

    data = data?.concat(tmp.games.map((i) => i.slug));
  }
  // console.log(`detail data`, data);
  // Create paths for all games
  const paths = data.map((i) => ({ params: { slug: i } }));
  return {
    paths,
    fallback: false,
  };
};

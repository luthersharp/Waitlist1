import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
export const metadata = {
  metadataBase: new URL("https://podsynk.com"),
  keywords: [
    "find podcast guests",
    "podcast guests",
    "get booked on podcasts",
    "Podcasts guests",
    "novel marketing podcast",
    "How to be a great podcast guest",
    "Podcust guestcom",
    "Looking for podcast co host",
    "Podcast directory search",
    "Podcast guest directory",
    "Podcast guest finder",
    "Podcast guest search",
    "Podcast guests network",
    "Podcast guestscom",
    "Podcasts looking for guests",
    "The perfect guests",
    "Guest podcast",
    "How to find podcast guests",
    "Be a great podcast guest",
    "Be a podcast guest",
    "Become a podcast guest",
    "Find podcast guest",
    "Find podcasts to be guest on",
    "How can I become a podcast guest",
    "How to be guest for podcast",
    "How to find podcast guest",
    "Rhoberta Shaler",
    "How to get podcast guest",
    "How to find guests for you podcasts",
    "how to find podcasts to be a guest on",
    "how to create a podcast for free",
    "best podcast recording software",
    "best podcasting software",
    "best software for podcasting",
    "how to record a podcast remotely",
    "remote podcast recording",
    "record podcast remotely",
    "podcast remote recording",
    "remote recording podcast platform",
    "best way to record a podcast remotely",
    "grow podcast",
    "best podcast gear",
    "how much podcast sponsors pay",
    "podcast marketing agency",
    "podcast marketing services",
    "podcast sponsorship pricing",
    "podcast sponsorship rates",
    "how to be a good podcast host",
    "booking podcast guesting",
    "podcast guest booking service",
    "podcast branding",
    "podcast brand"
  ],
  title: {
    default: "PodSynk",
    template: `%s | PodSynk`
  },
  openGraph: {
    description:
      "find podcast guests /hosts, Message them, book them, prepare for the episode",
  }
}



export default function App({ Component, pageProps }) {
  
  return (
    <>
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Get Booked as a Podcast Guest | Podsynk</title>

    <meta
      name="description"
      content="Podsynk connects you with podcasts seeking guests. Grow your reach and expertise by appearing on relevant shows."
    />
  </Head>
      <main>
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </LazyMotion>
      </main>
    </>
  );
}
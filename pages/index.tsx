import type { GetStaticProps, NextPage } from "next";
import styles from "../styles/Home.module.css";
import { TopBar } from "../components/TopBar";
import { Body } from "../components/Body";
import { Main } from "../components/Main";
import { SideBar } from "../components/SideBar";
import { ChapterProvider } from "../context/ChapterContext";
import { useEffect, useState } from "react";
import { Chapter } from "../utils/types";
import Head from "next/head";
import { ObjectProvider } from "../context/ObjectContext";
import { API_URL } from "../utils/constants";

const Home: NextPage = () => {
  const [chapter, setChapter] = useState<Chapter | null>(null);
  useEffect(() => {
    const fetchChapter = async () => {
      const res = await fetch(`${API_URL}chapter`);
      const data = await res.json();
      setChapter(data);
    };
    fetchChapter();
  }, []);

  return (
    <ChapterProvider chapter={chapter}>
      <ObjectProvider>
        <Head>
          <title>{`${chapter?.title} - ${chapter?.name} - INKR`}</title>
        </Head>
        <div className={styles.Container}>
          <TopBar />
          <Body>
            <Main />
            <SideBar />
          </Body>
        </div>
      </ObjectProvider>
    </ChapterProvider>
  );
};

export default Home;

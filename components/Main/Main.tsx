import { useContext, useEffect, useRef } from "react";
import styles from "./Main.module.css";
import { ChapterContext } from "../../context/ChapterContext";
import { Page } from "../Page";
import { UNSET_SELECTED_OBJECT } from "../../utils/constants";
import { useObjectReducer } from "../../hooks/useObjectReducer";
export const Main = () => {
  const { chapter } = useContext(ChapterContext);
  const { dispatch } = useObjectReducer();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutObject = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement && dispatch) {
        if (!e.target.dataset.object) {
          dispatch({
            type: UNSET_SELECTED_OBJECT,
          });
        }
      }
    };

    if (mainRef && mainRef.current) {
      mainRef.current.addEventListener("click", handleClickOutObject);
    }
    return () => {
      // cleanup
    };
  }, [dispatch, mainRef]);

  return (
    <div className={styles.Main} ref={mainRef}>
      <div className={styles.PageList}>
        {chapter?.fileOIDs.map((file) => {
          const fileMap = chapter.filesMap[file];
          return <Page key={file} fileMap={fileMap} />;
        })}
      </div>
    </div>
  );
};

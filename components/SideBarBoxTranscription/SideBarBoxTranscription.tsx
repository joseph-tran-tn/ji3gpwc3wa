import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../../context/ChapterContext";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { ObjectMap } from "../../utils/types";
import styles from "./SideBarBoxTranscription.module.css";
export const SideBarBoxTranscription = () => {
  const { state } = useObjectReducer();
  const chapterContext = useContext(ChapterContext);
  const [object, setObject] = useState<ObjectMap | null>(null);

  useEffect(() => {
    if (state && chapterContext) {
      const fileMap = chapterContext.chapter?.filesMap[state.fileMapId];
      const objectMap = fileMap?.objectsMap[state.objectMapId];
      if (objectMap) setObject(objectMap);
    }
  }, [state, chapterContext]);
  return (
    <div className="sidebar-box">
      <h2 className={styles.Title}>
        <span>Transcription</span>
      </h2>
      <p className={`${styles.Transcription} selectable`}>
        {object?.transcription?.value}
      </p>
    </div>
  );
};

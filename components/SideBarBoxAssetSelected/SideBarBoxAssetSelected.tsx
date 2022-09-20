import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../../context/ChapterContext";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { ObjectMap } from "../../utils/types";
import styles from "./SideBarBoxAssetSelected.module.css";
export const SideBarBoxAssetSelected = () => {
  const { state } = useObjectReducer();
  const chapterContext = useContext(ChapterContext);
  const [object, setObject] = useState<ObjectMap | null>(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (state && chapterContext) {
      const fileMap = chapterContext.chapter?.filesMap[state.fileMapId];
      const objectMap = fileMap?.objectsMap[state.objectMapId];
      if (objectMap) setObject(objectMap);
    }
  }, [state, chapterContext]);

  useEffect(() => {
    const fileUrl = object?.imageURL?.split("/") || [];
    const _fileName = fileUrl[fileUrl.length - 1];
    setFileName(_fileName);
  }, [object]);

  return (
    <div className="sidebar-box">
      <h2>
        <span>{fileName}</span>
      </h2>
    </div>
  );
};

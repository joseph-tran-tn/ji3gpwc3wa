import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../../context/ChapterContext";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { ObjectMap } from "../../utils/types";
import styles from "./SideBarBoxAssetFile.module.css";

export const SideBarBoxAssetFile = () => {
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

  console.log(object);

  return (
    <div className="sidebar-box sidebar-box-bordered">
      <h2>File</h2>
      <div className={styles.Image}>
        <div className={styles.ImageInner}>
          {object?.imageURL && (
            <Image
              src={object.imageURL}
              alt=""
              width={object.transform.size?.width}
              height={object.transform.size?.height}
            />
          )}
        </div>
      </div>
    </div>
  );
};

import styles from "./SideBarBoxObject.module.css";
import { UndoOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { radToDeg } from "../../utils/math";
import { ChapterContext } from "../../context/ChapterContext";
import { useContext, useEffect, useState } from "react";
import { ObjectMap } from "../../utils/types";
export const SideBarBoxObject = () => {
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
        <span>Object</span>
      </h2>
      <div className={`fields ${styles.Fields}`}>
        <dl>
          <dt>X</dt>
          <dd>{Math.ceil(object?.transform.center?.x || 0)}</dd>
        </dl>
        <dl>
          <dt>Y</dt>
          <dd>{Math.ceil(object?.transform.center?.y || 0)}</dd>
        </dl>
        <dl>
          <dt>W</dt>
          <dd>{Math.ceil(object?.transform.size?.width || 0)}</dd>
        </dl>
        <dl>
          <dt>H</dt>
          <dd className="disabled">
            {Math.ceil(object?.transform.size?.height || 0)}
          </dd>
        </dl>
        <dl>
          <dt>
            <UndoOutlined />
          </dt>
          <dd>
            {object?.transform.rotation
              ? radToDeg(object?.transform.rotation)
              : 0}
          </dd>
        </dl>
        <dl>
          <dt>
            <Image
              src="/images/icon/opacity.svg"
              alt="opacity"
              width={16}
              height={16}
            />
          </dt>
          <dd>{object?.opacity ? +object?.opacity * 100 : `100`}%</dd>
        </dl>
      </div>
    </div>
  );
};

import { Checkbox } from "antd";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../../context/ChapterContext";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { ObjectMap } from "../../utils/types";
import styles from "./SideBarBoxTextStyleShadow.module.css";
export const SideBarBoxTextStyleShadow = () => {
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
    <div className={`field-group ${styles.FieldGroup}`}>
      <h2 className="title-field-checkbox">
        <Checkbox
          checked={
            object?.translation?.value.children[0].children[0].style.shadow
              .enabled
          }
        >
          Shadow
        </Checkbox>
      </h2>
      <div className={`fields ${styles.Fields}`}>
        <dl>
          <dt>X</dt>
          <dd>
            {object?.translation?.value.children[0].children[0].style.shadow
              .x || 0}
          </dd>
        </dl>
        <dl>
          <dt>Y</dt>
          <dd>
            {object?.translation?.value.children[0].children[0].style.shadow
              .y || 0}
          </dd>
        </dl>
        <dl>
          <dt className="no-opacity">
            <input
              className="color-picker"
              type={`color`}
              defaultValue={
                object?.translation?.value.children[0].children[0].style.shadow
                  .color || `#000000`
              }
            />
          </dt>
          <dd>
            {object?.translation?.value.children[0].children[0].style.shadow
              .color || `#000000`}
          </dd>
        </dl>
        <dl>
          <dt>
            <Image
              src="/images/icon/shadow.svg"
              alt="opacity"
              width={16}
              height={16}
            />
          </dt>
          <dd>
            {object?.translation?.value.children[0].children[0].style.shadow
              .blur || 0}
          </dd>
        </dl>
      </div>
    </div>
  );
};

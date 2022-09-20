// import Image from "next/image";
import Image from "next/image";
import { useState } from "react";
import { PAGE_WIDTH } from "../../utils/constants";
import { fileMap } from "../../utils/types";
import { PageObject } from "../PageObject";
import styles from "./Page.module.css";

interface PageProps {
  fileMap: fileMap;
}
export const Page = ({ fileMap }: PageProps) => {
  const [scaled] = useState(PAGE_WIDTH / fileMap.typesetImage.size.width);
  const [size] = useState({
    width: fileMap.typesetImage.size.width * scaled,
    height: fileMap.typesetImage.size.height * scaled,
  });

  return (
    <div
      className={styles.Page}
      style={{ height: size.height }}
      data-name={fileMap.oid}
    >
      <div className={styles.PageInner}>
        <div
          style={{
            width: size.width,
            overflow: "hidden",
          }}
        >
          {fileMap.objectOIDs.map((object) => {
            const objectMap = fileMap.objectsMap[object];
            return (
              <PageObject
                key={object}
                objectMap={objectMap}
                fileMapId={fileMap.oid}
                scaled={scaled}
              />
            );
          })}
          <div className={styles.Image}>
            <Image
              src={fileMap.typesetImage.url}
              alt={fileMap.name}
              width={size.width}
              height={size.height}
              placeholder={fileMap.translateImage.url ? "blur" : "empty"}
              blurDataURL={fileMap.translateImage.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

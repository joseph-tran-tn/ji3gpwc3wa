import { Breadcrumb } from "antd";
import styles from "./TopBar.module.css";
import { ChapterContext } from "../../context/ChapterContext";
import { useContext } from "react";
export const TopBar = () => {
  const { chapter } = useContext(ChapterContext);
  return (
    <div className={styles.TopBar}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="">{chapter?.title}</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{chapter?.name}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

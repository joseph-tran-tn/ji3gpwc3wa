import Link from "next/link";
import { useContext } from "react";
import { ChapterContext } from "../../context/ChapterContext";
import { EditOutlined } from "@ant-design/icons";
import styles from "./SideBarNothingSelected.module.css";
export const SideBarNothingSelected = () => {
  const { chapter } = useContext(ChapterContext);
  return (
    <div className="sidebar-box">
      <h2>Chapter Name</h2>
      <h3 className={styles.Name}>
        <span>{chapter?.name}</span>
        <Link href="">
          <a>
            <EditOutlined />
          </a>
        </Link>
      </h3>
    </div>
  );
};

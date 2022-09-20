import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./SideBarBoxPageSelected.module.css";

export const SideBarBoxPageSelected = () => {
  return (
    <div className="sidebar-box">
      <h2 className={styles.PageSelected}>
        <span>Text 2/859</span>
        <div>
          <Button
            className={styles.Button}
            shape="circle"
            icon={<LeftOutlined />}
          />
          <Button
            className={styles.Button}
            shape="circle"
            icon={<RightOutlined />}
          />
        </div>
      </h2>
    </div>
  );
};

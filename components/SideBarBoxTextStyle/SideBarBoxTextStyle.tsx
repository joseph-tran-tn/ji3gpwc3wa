import styles from "./SideBarBoxTextStyle.module.css";
import { SideBarBoxTextStyleShadow } from "../SideBarBoxTextStyleShadow";
import { SideBarBoxTextStyleStroke } from "../SideBarBoxTextStyleStroke";
import { SideBarBoxTextStyleMain } from "../SideBarBoxTextStyleMain";
export const SideBarBoxTextStyle = () => {
  return (
    <div className="sidebar-box">
      <h2 className={styles.Title}>
        <span>Text Style</span>
      </h2>
      <SideBarBoxTextStyleMain />
      <SideBarBoxTextStyleStroke />
      <SideBarBoxTextStyleShadow />
    </div>
  );
};

import { useEffect } from "react";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { SideBarAssetSelected } from "../SideBarAssetSelected";
import { SideBarNothingSelected } from "../SideBarNothingSelected";
import { SideBarTextSelected } from "../SideBarTextSelected";
import styles from "./SideBar.module.css";
export const SideBar = () => {
  const { state } = useObjectReducer();
  return (
    <div className={styles.SideBar}>
      {state?.objectType === "text" ? (
        <SideBarTextSelected />
      ) : state?.objectType === "visual-asset" ? (
        <SideBarAssetSelected />
      ) : (
        <SideBarNothingSelected />
      )}
    </div>
  );
};

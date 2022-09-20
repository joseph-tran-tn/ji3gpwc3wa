import styles from "./SideBarAssetSelected.module.css";
import { SideBarBoxObject } from "../SideBarBoxObject";
import { SideBarBoxAssetSelected } from "../SideBarBoxAssetSelected";
import { SideBarBoxAssetFile } from "../SideBarBoxAssetFile";
export const SideBarAssetSelected = () => {
  return (
    <>
      <SideBarBoxAssetSelected />
      <SideBarBoxObject />
      <SideBarBoxAssetFile />
    </>
  );
};

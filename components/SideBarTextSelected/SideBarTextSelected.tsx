import styles from "./SideBarTextSelected.module.css";
import { SideBarBoxPageSelected } from "../SideBarBoxPageSelected";
import { SideBarBoxTranscription } from "../SideBarBoxTranscription";
import { SideBarBoxObject } from "../SideBarBoxObject";
import { SideBarBoxTextStyle } from "../SideBarBoxTextStyle";
export const SideBarTextSelected = () => {
  return (
    <>
      <SideBarBoxPageSelected />
      <SideBarBoxTranscription />
      <SideBarBoxObject />
      <SideBarBoxTextStyle />
    </>
  );
};

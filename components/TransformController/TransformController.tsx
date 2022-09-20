import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Size } from "../../utils/types";
import styles from "./TransformController.module.css";
interface TransformControllerProps {
  isSelected: boolean;
  size: Size;
  setSize: Dispatch<SetStateAction<Size>>;
}
export const TransformController = ({
  isSelected,
  setSize,
  size,
}: TransformControllerProps) => {
  // setSize({ ...size, height: e.y - viewportOffset.top });
  // setSize({ ...size, width: e.x - viewportOffset.left });

  return (
    <div
      className={`${styles.Outer}  ${
        isSelected ? styles.Selected : ``
      } transform-controller-outer`}
    >
      <div className={styles.TransformController}>
        <div data-object={true} className={styles.ControlTop}></div>
        <div data-object={true} className={styles.ControlBottom}></div>
        <div data-object={true} className={styles.ControlLeft}></div>
        <div data-object={true} className={styles.ControlRight}></div>
        <div data-object={true} className={styles.ControlLeftTop}></div>
        <div data-object={true} className={styles.ControlRightTop}></div>
        <div data-object={true} className={styles.ControlLeftBottom}></div>
        <div data-object={true} className={styles.ControlRightBottom}></div>
        <div data-object={true} className={styles.ControlRotation}></div>
      </div>
    </div>
  );
};

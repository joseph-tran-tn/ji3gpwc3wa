import Image from "next/image";
import { BubbleMap } from "../../utils/types";
import styles from "./Bubble.module.css";
interface BubbleProps {
  bubbleMap: BubbleMap;
}
export const Bubble = ({ bubbleMap }: BubbleProps) => {
  console.log(bubbleMap);
  return (
    <div className={styles.Bubble}>
      <Image
        src={bubbleMap.url}
        alt={bubbleMap.id}
        width={bubbleMap.frame.width}
        height={bubbleMap.frame.width}
      />
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import { ChildrenTextarea } from "../../../utils/types";
import styles from "./Textarea.module.css";
interface TextareaProp {
  gChildren: ChildrenTextarea;
  scaled: number;
}
export const Textarea = ({ gChildren, scaled }: TextareaProp) => {
  const [val, setVal] = useState(gChildren.children);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (textareaRef.current && val !== "") {
        textareaRef.current.style.height = "0px";
        textareaRef.current.style.height =
          textareaRef.current.scrollHeight + "px";
      }
    });
  }, [val]);
  const stroke = gChildren.style.stroke;
  const hasStroke = stroke.enabled && stroke.width;
  const strokeWidth = stroke.width ? +stroke.width : 1;
  return (
    <textarea
      data-object={true}
      key={gChildren.children}
      ref={textareaRef}
      className={styles.TextArea}
      value={val || gChildren.children}
      onChange={(e) => setVal(e.target.value)}
      style={{
        fontFamily: gChildren.style.font.family,
        fontSize: gChildren.style.font.size
          ? +gChildren.style.font.size * (scaled * 1.19)
          : undefined,
        fontStyle: gChildren.style.font.style,
        fontWeight: gChildren.style.font.weight,
        textShadow: hasStroke
          ? `
          -${strokeWidth}px -${strokeWidth}px 1px 1px ${gChildren.style.stroke.color},
          ${strokeWidth}px ${strokeWidth}px 1px 1px ${gChildren.style.stroke.color},
          ${strokeWidth}px -${strokeWidth}px 1px 1px ${gChildren.style.stroke.color},
          -${strokeWidth}px ${strokeWidth}px 1px 1px ${gChildren.style.stroke.color}
        `
          : ``,
        // WebkitTextStrokeWidth:
        //   gChildren.style.stroke.width && gChildren.style.stroke.enabled
        //     ? strokeWidth
        //     : 0,
        // WebkitTextStrokeColor: gChildren.style.stroke.color,
        // WebkitTextFillColor: gChildren.style.color,
      }}
    ></textarea>
  );
};

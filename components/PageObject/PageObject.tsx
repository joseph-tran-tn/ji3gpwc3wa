import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { SET_SELECTED_OBJECT } from "../../utils/constants";
import { Align, ObjectMap, Size } from "../../utils/types";
import { Textarea } from "../Elements/Textarea";
import { TransformController } from "../TransformController";
import styles from "./PageObject.module.css";

interface PageObjectProps {
  scaled: number;
  objectMap: ObjectMap;
  fileMapId: string;
}

export const PageObject = ({
  scaled,
  objectMap,
  fileMapId,
}: PageObjectProps) => {
  const { state, dispatch } = useObjectReducer();
  const [isSelected, setIsSelected] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [size, setSize] = useState<Size>(() => {
    return {
      width: objectMap?.transform.size
        ? objectMap?.transform.size.width * scaled
        : 0,
      height: objectMap?.transform.size
        ? objectMap?.transform.size.height * scaled
        : 0,
    };
  });
  /**
   * the objectStyle is a custom style of this component,
   * includes width, height, left, top and transform properties
   */
  const [objectStyle, setObjectStyle] = useState(() => {
    return {
      width: size.width,
      height: size.height,
      left:
        objectMap?.transform.center && objectMap?.transform.size
          ? (objectMap?.transform.center.x -
              objectMap?.transform.size.width / 2) *
            scaled
          : undefined,
      top:
        objectMap?.transform.center && objectMap?.transform.size
          ? (objectMap?.transform.center.y -
              objectMap?.transform.size.height / 2) *
            scaled
          : undefined,
      transform: objectMap?.transform.rotation
        ? `rotate(${(objectMap?.transform.rotation * 180) / Math.PI}deg)`
        : undefined,
    };
  });
  const objectPageRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  /**
   * When global state change, set the object selected or not
   */
  useEffect(() => {
    if (state && state.objectMapId === objectMap.oid) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
      setIsEditMode(false);
    }
  }, [objectMap, state]);

  /**
   * handle double click on the object to go to edit mode
   */
  useEffect(() => {
    if (btnRef && btnRef.current) {
      btnRef.current.addEventListener("dblclick", () => {
        setIsEditMode(true);
      });
    }
    return () => {
      // cleanup
    };
  }, [btnRef]);

  /**
   * I would like to write and complete the functions to handle mouse events if have more time
   */
  useLayoutEffect(() => {
    let grab = false;
    const handlePressESC = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setIsEditMode(false);
        setIsSelected(false);
      }
    };
    const handleMousemove = (e: MouseEvent) => {
      if (grab) {
        // calculate the movement
      }
    };
    const handleMousedown = (e: MouseEvent) => {
      grab = true;
    };
    const handleMouseup = (e: MouseEvent) => {
      grab = false;
    };
    if (objectPageRef && objectPageRef.current) {
      objectPageRef.current.addEventListener("keydown", handlePressESC);
      objectPageRef.current.addEventListener("mousemove", handleMousemove);
      objectPageRef.current.addEventListener("mousedown", handleMousedown);
      objectPageRef.current.addEventListener("mouseup", handleMouseup);
    }
    return () => {
      // cleanup
    };
  }, []);

  /**
   * Handle selected object
   * @param objectType string
   * it will fire to global state and set this object is selected
   */
  const handleSelectObject = (objectType: string) => {
    if (dispatch) {
      dispatch({
        type: SET_SELECTED_OBJECT,
        objectMapId: objectMap.oid,
        fileMapId,
        objectType,
      });
    }
  };

  return (
    <div
      style={objectStyle}
      className={`${styles.Object} ${isSelected ? styles.Selected : ``} ${
        isEditMode ? styles.EditMode : ``
      }`}
      data-name={objectMap.oid}
      ref={objectPageRef}
    >
      <button
        ref={btnRef}
        data-object={true}
        onClick={() => handleSelectObject(objectMap.type)}
        className={styles.BtnSelected}
      ></button>
      <TransformController
        size={size}
        setSize={setSize}
        isSelected={isSelected}
      />

      {objectMap.translation ? (
        <div
          className={styles.VerticalText}
          style={{
            justifyContent:
              objectMap.translation.value.style.verticalAlign === "middle"
                ? "center"
                : objectMap.translation.value.style.verticalAlign === "top"
                ? "flex-start"
                : objectMap.translation.value.style.verticalAlign === "bottom"
                ? "flex-end"
                : "center",
          }}
        >
          {objectMap.translation.value.children.map((children, idx) => {
            return (
              <div
                key={idx}
                style={{
                  textAlign: children.style.align as Align,
                }}
              >
                {children.children.map((gChildren) => {
                  return (
                    <Textarea
                      key={gChildren.children}
                      gChildren={gChildren}
                      scaled={scaled}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : objectMap.imageURL ? (
        <div className={styles.Image}>
          <Image src={objectMap.imageURL} alt={objectMap.oid} layout={`fill`} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

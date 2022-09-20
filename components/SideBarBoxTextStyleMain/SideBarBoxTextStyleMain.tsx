import styles from "./SideBarBoxTextStyleMain.module.css";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  FontSizeOutlined,
  LineHeightOutlined,
  ColumnWidthOutlined,
  ColumnHeightOutlined,
  BorderOutlined,
  VerticalAlignTopOutlined,
  VerticalAlignMiddleOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
import { Radio, Select } from "antd";
import { useObjectReducer } from "../../hooks/useObjectReducer";
import { useContext, useEffect, useState } from "react";
import { ChapterContext } from "../../context/ChapterContext";
import { ObjectMap } from "../../utils/types";

const fontFamilyList = [
  "Alex Mild World",
  "Komika Text Kaps",
  "Alita Brush",
  "Denk One",
];
const fontWeightList = ["Regular", "Medium", "Semi Bold", "Bold"];

export const SideBarBoxTextStyleMain = () => {
  const { state } = useObjectReducer();
  const chapterContext = useContext(ChapterContext);
  const [object, setObject] = useState<ObjectMap | null>(null);

  useEffect(() => {
    if (state && chapterContext) {
      const fileMap = chapterContext.chapter?.filesMap[state.fileMapId];
      const objectMap = fileMap?.objectsMap[state.objectMapId];
      if (objectMap) setObject(objectMap);
    }
  }, [state, chapterContext]);

  const font = object?.translation?.value.children[0].children[0].style.font;
  const color = object?.translation?.value.children[0].children[0].style.color;

  return (
    <div className={`field-group ${styles.FieldGroup}`}>
      <div className={`field-select-outer ${styles.FieldGroupOuter}`}>
        <Select
          defaultValue={`Alex Mild World`}
          value={font?.family || null}
          style={{ width: "auto" }}
          bordered={false}
        >
          {fontFamilyList.map((fontFamily) => {
            return (
              <Select.Option value={fontFamily} key={fontFamily}>
                {fontFamily}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <div className="field-row-flex">
        <div className="field-select-outer">
          <Select
            defaultValue={`Regular`}
            style={{ width: "auto" }}
            bordered={false}
          >
            {fontWeightList.map((fontWeight) => {
              return (
                <Select.Option value={fontWeight} key={fontWeight}>
                  {fontWeight}
                </Select.Option>
              );
            })}
          </Select>
        </div>
        <div>
          <Radio.Group className={styles.AlignRadio}>
            <Radio.Button value={`left`}>
              <AlignLeftOutlined />
            </Radio.Button>
            <Radio.Button value={`center`}>
              <AlignCenterOutlined />
            </Radio.Button>
            <Radio.Button value={`right`}>
              <AlignRightOutlined />
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>
      <div className={`fields ${styles.Fields}`}>
        <dl>
          <dt>
            <FontSizeOutlined />
          </dt>
          <dd>{font?.size ? Math.round(+font.size) : 0}</dd>
        </dl>
        <dl>
          <Radio.Group className={styles.AlignRadio}>
            <Radio.Button value={`column-width`}>
              <ColumnWidthOutlined />
            </Radio.Button>
            <Radio.Button value={`center`}>
              <ColumnHeightOutlined />
            </Radio.Button>
            <Radio.Button value={`right`}>
              <BorderOutlined />
            </Radio.Button>
          </Radio.Group>
        </dl>
        <dl>
          <dt>
            <LineHeightOutlined />
          </dt>
          <dd>10</dd>
        </dl>
        <dl>
          <Radio.Group className={styles.AlignRadio}>
            <Radio.Button value={`top`}>
              <VerticalAlignTopOutlined />
            </Radio.Button>
            <Radio.Button value={`middle`}>
              <VerticalAlignMiddleOutlined />
            </Radio.Button>
            <Radio.Button value={`bottom`}>
              <VerticalAlignBottomOutlined />
            </Radio.Button>
          </Radio.Group>
        </dl>
        <dl>
          <dt className="no-opacity">
            <input className="color-picker" type={`color`} />
          </dt>
          <dd>{color || `000000`}</dd>
        </dl>
      </div>
    </div>
  );
};

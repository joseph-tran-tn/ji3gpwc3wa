export interface Chapter {
  title: string;
  name: string;
  fileOIDs: string[];
  filesMap: Record<string, fileMap>;
  collaborators: string[];
}
export interface Size {
  width: number;
  height: number;
}
export interface Location {
  x: number;
  y: number;
}
export interface fileMap {
  oid: string;
  name: string;
  objectOIDs: string[];
  objectsMap: Record<string, ObjectMap>;
  bubbleIDs: string[];
  bubblesMap: Record<string, BubbleMap>;
  translateImage: {
    url: string;
  };
  typesetImage: {
    url: string;
    size: Size;
  };
  size: Size;
  originalImageS3Key: string | null;
  storageFileUUID: null;
}
export interface ObjectMap {
  oid: string;
  type: string;
  order?: number;
  version?: string;
  visible: boolean;
  opacity?: string | number;
  transform: Transform;
  imageURL?: string;
  translation?: {
    value: {
      style: {
        autoSizing?: {
          width: boolean;
          height: boolean;
        };
        verticalAlign?: string;
      };
      children: {
        style: {
          align: string;
        };
        children: ChildrenTextarea[];
      }[];
    };
  };
  transcription?: {
    box: Location[];
    value: string;
  };
  constraintProportions?: boolean;
}
export interface BubbleMap {
  id: string;
  url: string;
  frame: Size & Location;
  type: string;
}
export interface Stroke {
  color?: string;
  width?: string | number;
  enabled?: boolean;
}
export interface Shadow {
  color?: string;
  x?: number;
  y?: number;
  enabled?: boolean;
  blur?: number;
}
export interface Font {
  size?: string | number;
  style?: string;
  family?: string;
  weight?: string;
}
export interface Transform {
  size?: Size;
  center?: Location;
  rotation?: number;
}
export type Align = "left" | "right" | "center";
export interface ChildrenTextarea {
  style: {
    font: Font;
    color: string;
    shadow: Shadow;
    stroke: Stroke;
    lineSpacing: string | number;
  };
  children: string;
}

import React, { createContext } from "react";
import { Chapter } from "../utils/types";

interface ChapterContext {
  chapter: Chapter | null;
}
export const ChapterContext = createContext<ChapterContext>({
  chapter: null,
});

interface ChapterProviderProps {
  chapter: Chapter | null;
  children: React.ReactNode;
}
export const ChapterProvider = ({
  chapter,
  children,
}: ChapterProviderProps) => {
  return (
    <ChapterContext.Provider value={{ chapter }}>
      {children}
    </ChapterContext.Provider>
  );
};

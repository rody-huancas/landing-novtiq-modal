import { useCallback } from "react";

interface ScrollOptions {
  behavior?: ScrollBehavior;
  block?   : ScrollLogicalPosition;
  inline?  : ScrollLogicalPosition;
}

export const useScroll = () => {
  const scrollToSection = useCallback(
    (
      sectionId: string,
      options: ScrollOptions = {
        behavior: "smooth",
        block: "start",
      }
    ) => {
      const section = document.querySelector(`#${sectionId}`);
      if (section) {
        section.scrollIntoView(options);
      }
    },
    []
  );

  return { scrollToSection };
};

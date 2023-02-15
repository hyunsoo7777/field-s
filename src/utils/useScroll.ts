import { useRef } from "react";
import { useEffect } from "react";
export default function useScroll() {
  const aboutTargetRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  const aboutContainerRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  const historyTargetRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  const historyContainerRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const aboutTarget = aboutTargetRef.current;
    const aboutContainer = aboutContainerRef.current;
    const historyTarget = historyTargetRef.current;
    const historyContainer = historyContainerRef.current;

    // 브라우저에 작용하는 스크롤을 아예 없애버리고 전체 페이지가 wheel로만 작용하게끔 설정
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const nextScroll =
        window.scrollY +
        aboutTarget.scrollLeft +
        historyTarget.scrollLeft +
        event.deltaY;
      const aboutTotalScroll =
        aboutTarget.scrollWidth - aboutTarget.offsetWidth;
      const historyTotalScroll =
        historyTarget.scrollWidth - historyTarget.offsetWidth;
      console.log("nextScroll: " + nextScroll);
      console.log("scrollLeft:" + aboutTarget.scrollLeft);
      console.log("aboutContainer.offsetTop: " + aboutContainer.offsetTop);
      console.log("targetTotalScroll: " + aboutTotalScroll);

      if (nextScroll < 0) {
        window.scrollTo({ left: 0, top: 0 });
      } else if (nextScroll < aboutContainer.offsetTop) {
        window.scrollTo({ left: 0, top: nextScroll, behavior: "auto" });
        aboutTarget.scrollTo({
          left: 0,
          top: 0,
          behavior: "auto",
        });
      }
      // about scroll 진행중
      else if (
        nextScroll >= aboutContainer.offsetTop &&
        nextScroll < aboutContainer.offsetTop + aboutTotalScroll
      ) {
        window.scrollTo({
          left: 0,
          top: aboutContainer.offsetTop,
          behavior: "auto",
        });
        aboutTarget.scrollTo({
          left: nextScroll - aboutContainer.offsetTop,
          top: 0,
          behavior: "auto",
        });
      }
      // about과 histroy 사이 scroll 진행중
      else if (
        nextScroll >= aboutContainer.offsetTop + aboutTotalScroll &&
        nextScroll - aboutTotalScroll < historyContainer.offsetTop
      ) {
        window.scrollTo({
          left: 0,
          top: nextScroll - aboutTotalScroll,
          behavior: "auto",
        });
        aboutTarget.scrollTo({
          left: aboutTotalScroll,
          top: 0,
          behavior: "auto",
        });
        historyTarget.scrollTo({
          left: 0,
          top: 0,
          behavior: "auto",
        });
      }
      // history scroll 진행중
      else if (
        nextScroll - aboutTotalScroll >= historyContainer.offsetTop &&
        nextScroll - aboutTotalScroll <
          historyContainer.offsetTop + historyTotalScroll
      ) {
        window.scrollTo({
          left: 0,
          top: historyContainer.offsetTop,
          behavior: "auto",
        });
        historyTarget.scrollTo({
          left: nextScroll - historyContainer.offsetTop - aboutTotalScroll,
          top: 0,
          behavior: "auto",
        });
      }
      // history 아래 scroll 진행중
      else if (
        nextScroll - aboutTotalScroll >=
        historyContainer.offsetTop + historyTotalScroll
      ) {
        window.scrollTo({
          left: 0,
          top: nextScroll - historyTotalScroll - aboutTotalScroll,
          behavior: "auto",
        });
        historyTarget.scrollTo({
          left: historyTotalScroll,
          top: 0,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("wheel", handleScroll, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
  return {
    aboutContainerRef,
    aboutTargetRef,
    historyContainerRef,
    historyTargetRef,
  };
}

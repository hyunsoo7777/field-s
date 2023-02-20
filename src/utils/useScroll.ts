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
    window.onload = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0 });
        aboutTarget.scrollTo(0, 0);
        historyTarget.scrollTo(0, 0);
      }, 100);
    };
    if (
      aboutTarget != null &&
      historyTarget != null &&
      aboutContainer != null &&
      historyContainer != null
    ) {
      // 브라우저에 작용하는 스크롤을 아예 없애버리고 전체 페이지가 wheel로만 작용하게끔 설정
      // scroll은 preventDefault가 안되기 때문
      const handleScroll = (event: WheelEvent) => {
        event.preventDefault();

        // about에서 가로 총 스크롤 값
        const aboutTotalScroll =
          aboutTarget.scrollWidth - aboutTarget.offsetWidth;

        // history에서 가로 총 스크롤 값
        const historyTotalScroll =
          historyTarget.scrollWidth - historyTarget.offsetWidth;

        // 총 스크롤값
        const nextScroll =
          window.scrollY +
          aboutTarget.scrollLeft +
          historyTarget.scrollLeft +
          event.deltaY;
        console.log(nextScroll);

        // 밑에서 갑자기 위로 올렸을때 deltaY값이 커져서 -값이 될경우
        if (nextScroll < 0) {
          window.scrollTo({ left: 0, top: 0 });
          aboutTarget.scrollTo({
            left: 0,
            top: 0,
            behavior: "auto",
          });
        }

        // main과 about 사이 scroll 진행중
        else if (nextScroll < aboutContainer.offsetTop) {
          window.scrollTo({ left: 0, top: nextScroll, behavior: "auto" });
          // 부드럽게 하기 위해 about 전에 내려갈때는 about 고정시키기
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
          console.log("about scroll");

          // windonw top값을 aboutContainer top 위치에 맞춰 고정
          window.scrollTo({
            left: 0,
            top: aboutContainer.offsetTop,
            behavior: "auto",
          });
          // scroll을 함에 따라 target의 scorllLeft위치가 총스크롤값에서 뺀만큼
          aboutTarget.scrollTo({
            left: nextScroll - aboutContainer.offsetTop,
            top: 0,
            behavior: "auto",
          });
        }
        // about과 histroy 사이 scroll 진행중
        // nextScroll에 aboutTotalScroll 값을 빼주어야만 총 스크롤 Y값이랑
        // historyContainer top 값이랑 비교할수 있음
        else if (
          nextScroll >= aboutContainer.offsetTop + aboutTotalScroll &&
          nextScroll - aboutTotalScroll < historyContainer.offsetTop
        ) {
          window.scrollTo({
            left: 0,
            top: nextScroll - aboutTotalScroll,
            behavior: "auto",
          });
          // Left값이 스크롤 끝난 시점에서 고정되어있어야 함
          aboutTarget.scrollTo({
            left: aboutTotalScroll,
            top: 0,
            behavior: "auto",
          });
          // history 전에 hisotry 처음 값으로 고정시키기
          historyTarget.scrollTo({
            left: 0,
            top: 0,
            behavior: "auto",
          });
        }
        // history scroll 진행중
        else if (
          // about 총 가로 스크롤 값을 고려해서 빼줘야함 총 스크롤 Y값이랑 비교해야되서
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
          // 여기서부터는 aboutrhk history 가로 스크롤 총 값 둘다 고려해서 빼줘야 함
          window.scrollTo({
            left: 0,
            top: nextScroll - historyTotalScroll - aboutTotalScroll,
            behavior: "auto",
          });
          // history Left 스크롤 끝난 시점으로 고정
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
      // 다른 페이지에서도 wheel이벤트가 걸리지않도록 없애줌
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }
  }, []);
  return {
    aboutContainerRef,
    aboutTargetRef,
    historyContainerRef,
    historyTargetRef,
  };
}

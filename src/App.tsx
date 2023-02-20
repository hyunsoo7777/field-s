import About from "./components/layout/About";
import NavDark from "./components/common/Nav/NavDark";
import Contact from "./components/layout/Contact";
import History from "./components/layout/History";
import Main from "./components/layout/Main";
import Product from "./components/layout/Product";
import RequestDemo from "./components/layout/RequestDemo";
import Team from "./components/layout/Team";
import Tech from "./components/layout/Tech";
import Footer from "./components/layout/Footer";
import Wave from "./components/include/Wave";
import "./index.css";
import useScroll from "./utils/useScroll";
import { useRef } from "react";
import { IntlProvider } from "react-intl";

interface LocalProps {
  messages: string;
  local: string;
}

function App(props: LocalProps) {
  const teamContainerRef = useRef(null);
  const productContainerRef = useRef(null);
  const techContainerRef = useRef(null);
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "auto",
  });
  const {
    aboutContainerRef,
    aboutTargetRef,
    historyContainerRef,
    historyTargetRef,
  } = useScroll();

  return (
    <IntlProvider locale="en" messages={{}}>
      <div className="App scrollbar bg-white overflow-x-hidden overflow-y-scroll flex flex-col items-center relative">
        <Wave></Wave>
        <NavDark
          dark={true}
          aboutContainerRef={aboutContainerRef}
          aboutTargetRef={aboutTargetRef}
          historyContainerRef={historyContainerRef}
          historyTargetRef={historyTargetRef}
          teamContainerRef={teamContainerRef}
          productContainerRef={productContainerRef}
          techContainerRef={techContainerRef}
        ></NavDark>
        <Main></Main>
        <About
          ContainerRef={aboutContainerRef}
          TargetRef={aboutTargetRef}
        ></About>
        <History
          ContainerRef={historyContainerRef}
          TargetRef={historyTargetRef}
        ></History>
        <Team teamContainerRef={teamContainerRef}></Team>
        <Product productContainerRef={productContainerRef}></Product>
        <Tech techContainerRef={techContainerRef}></Tech>
        <RequestDemo></RequestDemo>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </IntlProvider>
  );
}

export default App;

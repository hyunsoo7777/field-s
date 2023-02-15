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

function App() {
  const {
    aboutContainerRef,
    aboutTargetRef,
    historyContainerRef,
    historyTargetRef,
  } = useScroll();

  return (
    <div className="App w-screen scrollbar bg-white overflow-x-hidden overflow-y-scroll flex flex-col items-center relative">
      <Wave></Wave>
      <NavDark
        dark={true}
        aboutContainerRef={aboutContainerRef}
        aboutTargetRef={aboutTargetRef}
        historyContainerRef={historyContainerRef}
        historyTargetRef={historyTargetRef}
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
      <Team></Team>
      <Product></Product>
      <Tech></Tech>
      <RequestDemo></RequestDemo>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

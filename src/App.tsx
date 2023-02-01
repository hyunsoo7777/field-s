import React from "react";
import About from "./component/layout/About";
import NavDark from "./component/common/Nav/NavDark";
import Contact from "./component/layout/Contact";
import History from "./component/layout/History";
import Main from "./component/layout/Main";
import Product from "./component/layout/Product";
import RequestDemo from "./component/layout/RequestDemo";
import Team from "./component/layout/Team";
import Tech from "./component/layout/Tech";
import Footer from "./component/layout/Footer";
import "./index.css";

function App() {
  return (
    <div className="App h-screen overflow-x-hidden overflow-y-auto">
      <NavDark></NavDark>
      <Main></Main>
      <About></About>
      <History></History>
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

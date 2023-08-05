import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/City/Single/Single";
import Home from "./pages/Home/Home";
import MultiplePage from "./pages/City/XDays/Multiple";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import PageContainer from "./UI/PageContainer/PageCointainer";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  function showSideBarHandler() {
    setShowSideBar((prev) => !prev);
  }
  return (
    <div className={classes.page}>
      <BrowserRouter>
        <Sidebar showNav={showSideBar} changeShowSideBar={showSideBarHandler} />
        <div className={classes.container}>
          <PageContainer>
            <NavBar showSideBar={showSideBarHandler} />

            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path=":city">
                  <Route path="acum" element={<Single />} />
                  <Route path=":days">
                    <Route path="zile" element={<MultiplePage />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/conectare" element={<p>login page</p>} />
              <Route path="/inregistrare" element={<p>register page</p>} />
              <Route path="*" element={<p>no match</p>} />
            </Routes>
          </PageContainer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

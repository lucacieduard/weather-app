import classes from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/City/Single/Single";
import Home from "./pages/Home/Home";
import MultiplePage from "./pages/City/XDays/Multiple";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
import PageContainer from "./UI/PageContainer/PageCointainer";
import NavBar from "./components/navbar/NavBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContextPorvider } from "./context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  function showSideBarHandler() {
    setShowSideBar((prev) => !prev);
  }
  return (
    <AuthContextPorvider>
      <div className={classes.page}>
        <BrowserRouter>
          <Sidebar
            showNav={showSideBar}
            changeShowSideBar={showSideBarHandler}
          />
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
                <Route path="/conectare" element={<Login />} />
                <Route path="/inregistrare" element={<Register />} />
                <Route path="*" element={<p>no match</p>} />
              </Routes>
            </PageContainer>
          </div>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </AuthContextPorvider>
  );
}

export default App;

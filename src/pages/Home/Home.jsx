import MainCity from "../../components/mainCity/mainCity";
import bucuresti_img from "../../assets/image/bucuresti.jpg";
import brasov_img from "../../assets/image/brasov.jpg";
import sibiu_img from "../../assets/image/sibiu.jpg";
import iasi_img from "../../assets/image/iasi.jpg";
import cluj_img from "../../assets/image/cluj.jpg";
import bruxelles_img from "../../assets/image/bruxelles.jpg";
import budapesta_img from "../../assets/image/budapesta.jpg";
import madrid_img from "../../assets/image/madrid.jpg";
import paris_img from "../../assets/image/paris.jpg";
import roma_img from "../../assets/image/roma.jpg";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Modal from "../../UI/Modal/Modal";
import FavoriteCity from "../../components/FavoriteCity/FavoriteCity";

const Home = () => {
  const romania = ["București", "Cluj-Napoca", "Brașov", "Iași", "Sibiu"];
  const europa = ["Brussels", "Paris", "Rome", "Madrid", "Budapest"];
  const romania_img = [
    bucuresti_img,
    cluj_img,
    brasov_img,
    iasi_img,
    sibiu_img,
  ];
  const europa_img = [
    bruxelles_img,
    paris_img,
    roma_img,
    madrid_img,
    budapesta_img,
  ];

  const { user, loading } = useContext(AuthContext);
  return loading ? (
    <Modal />
  ) : (
    <>
      {user && <FavoriteCity city={user.oras} />}
      <MainCity
        title="Orașe din România"
        activeCity="Sibiu"
        orase={romania}
        imagini={romania_img}
      />
      <MainCity
        title="Orașe din Europa"
        activeCity="Rome"
        orase={europa}
        imagini={europa_img}
      />
    </>
  );
};

export default Home;

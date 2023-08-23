import "../Home/Home.scss";
import BeerList from "../../Components/BeerList/BeerCardList";
import { Beer } from "../../Types/Types";

type HomeProps = {
  beerlist: Beer[];
};

const Home = ({ beerlist }: HomeProps) => {
  return <BeerList beerlist={beerlist} />;
};

export default Home;

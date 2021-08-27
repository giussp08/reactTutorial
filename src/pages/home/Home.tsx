import Cards from "../../components/cards/Cards";
import {CardsConst} from '../../const/menu-const';

function Home() {

  return (
    <div>
      <Cards cardArr={CardsConst} />
     
    </div>
  );
}

export default Home;

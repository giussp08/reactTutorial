import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Cards from "../../components/cards/Cards";
import {CardsConst} from '../../const/menu-const';

function Home() {
  let history = useHistory();

  function clickPage(page: string) {
    history.push(page);
  }
  return (
    <div>
      <Cards cardArr={CardsConst} />
     
    </div>
  );
}

export default Home;

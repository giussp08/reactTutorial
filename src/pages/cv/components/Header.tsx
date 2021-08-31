import {Image} from "react-bootstrap";
import { TCv } from "../../../shared/model/cv";

export type HeaderData = {
 headerArr: TCv;
};

const Header = (props: HeaderData) => {
  const { headerArr } = props;
    return (
      <div>
        <h2 style={{ paddingTop: "20%" }}>{headerArr.name}</h2>
        <h2 style={{ color: "orange" }}>{headerArr.surname}</h2>
        <Image className="imgCv" src={headerArr.img} />
      </div>
    );
  };
export default Header;
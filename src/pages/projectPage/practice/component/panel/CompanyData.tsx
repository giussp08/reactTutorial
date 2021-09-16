import { Row } from "react-bootstrap"
import CardLegalInfo from "./Cards/CardLegalInfo";
import CardAdminHead from "./Cards/CardAdminHead";
import CardCorrAddress from "./Cards/CardCorrAddress";
import CardRegOff from "./Cards/CardRegOff";

export type Data={
    id:string;
}

const CompanyData = (props:Data) =>{
    const id = props.id;
    return(
        <div>
            <Row>
                <CardLegalInfo id={id}/>
            </Row>
            <Row style={{paddingTop:"2%"}}>
                <CardRegOff id={id}/>
            </Row>
            <Row style={{paddingTop:"2%"}}>
                <CardAdminHead id={id}/>
            </Row>
            <Row style={{paddingTop:"2%"}}>
                <CardCorrAddress id={id}/>
            </Row>
        </div>
    )
}
export default CompanyData;
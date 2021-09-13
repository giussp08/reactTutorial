import { Card, Row } from "react-bootstrap"
import CardLegalInfo from "./Cards/CardLegalInfo";
import CardAdminHead from "./Cards/CardAdminHead";
import CardCorrAddress from "./Cards/CardCorrAddress";
import CardRegOff from "./Cards/CardRegOff";

const CompanyData = () =>{
    return(
        <div style={{marginLeft:"19%"}}>
            {console.log("ciao")}
            <Row>
                <CardLegalInfo/>
            </Row>
            <Row>
                <CardRegOff/>
            </Row>
            <Row>
                <CardAdminHead/>
            </Row>
            <Row>
                <CardCorrAddress/>
            </Row>
        </div>
    )
}
export default CompanyData;
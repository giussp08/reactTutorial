import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTree} from "@fortawesome/free-solid-svg-icons";

const Result0 = () =>{
    return(
        <div >
            <p style={{ fontSize:"12px", fontWeight:"bold",paddingLeft:"9%"}}>Risultati : 0 </p>
            <FontAwesomeIcon style={{textAlign:"center", width:"100%"}} size="10x" icon={faTree}/>
            <p style={{textAlign:"center",width:"100%" ,fontSize:"12px", fontWeight:"bold", marginTop:"5%"}}>Non ci sono risultati</p>
            <p style={{textAlign:"center",width:"100%" ,fontSize:"10px", fontWeight:"bold",paddingBottom:"10%"}}> Applica i filtri per iniziare una ricerca</p>
        </div>
    )
};

export default Result0;
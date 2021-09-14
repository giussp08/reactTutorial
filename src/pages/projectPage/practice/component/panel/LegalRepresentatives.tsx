import { useEffect, useState } from "react";
import axios from "axios";
import { TLegalRepr } from "../../../../../shared/model/legalRepr";

export type Data={
    id:string;
}

const LegalRepresentatives =(props:Data) =>{
    const id = props.id;
    const [repo,setRepo] = useState([]);

    useEffect(() => {
        const getRepo = async () => {
          try {
            const response = await axios.get("http://localhost:3000/legalRepresentatives");
            const myRepo = response.data;
            setRepo(myRepo);
          } catch (error) {
            console.log(error);
          }
        };
        getRepo();
      }, []);

const myRepo : TLegalRepr[] = repo;
      
return(
    <div>

    </div>
)

}
export default LegalRepresentatives;
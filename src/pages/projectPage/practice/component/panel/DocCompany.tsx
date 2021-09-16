import { useEffect, useState } from "react";
import axios from "axios";
import { TDoc } from "../../../../../shared/model/doc";
import columns from "../../../../const/const-doc";
import DataTable from "react-data-table-component";

export type Data = {
  id: string;
};

const DocCompany = (props: Data) => {
  const id = props.id;
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/companyDoc"
        );
        const myRepo = response.data;
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: TDoc[] = repo;
  let c: TDoc[] = [];

  const myNewTheme= {
    headCells: {
        style:{
            textTransform:"uppercase",
            fontSize:"9px",
            backgroundColor:"whitesmoke",
            height:"40px",marginTop:"2%",
            fontWeight:"bold"
        }
    },
    rows:{
        style:{
            fontSize:"10px"
        }
    }
  }
 /*  const image = document.getElementsByTagName("img")[0];
  myRepo.map(function(img) {
    // Here just assigning the single image URL 
    image.src = img.type;
  })
 */
  return (
    <div>
      {myRepo.map((r, i) => {
        if (r.id === id) {
              c.push(myRepo[i]);
              return <DataTable columns={columns} data={c} highlightOnHover customStyles={myNewTheme} />;
        }
      })}
    </div>
  );
};
export default DocCompany;

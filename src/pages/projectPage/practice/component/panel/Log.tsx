import { useEffect, useState } from "react";
import axios from "axios";
import { TLog } from "../../../../../shared/model/log";
import columns from "../../../../const/const-log";
import DataTable from "react-data-table-component";

export type Data = {
  id: string;
};

const Owners = (props: Data) => {
  const id = props.id;
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const getRepo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/log"
        );
        const myRepo = response.data;
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: TLog[] = repo;
  let c: TLog[] = [];

  const myNewTheme= {
    headCells: {
        style:{
            textTransform:"uppercase",
            fontSize:"9px",
            backgroundColor:"whitesmoke",
            height:"40px",marginTop:"2%"
        }
    },
    rows:{
        style:{
            fontSize:"10px"
        }
    }
  }

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
export default Owners;

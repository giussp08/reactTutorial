import { useEffect, useState } from "react";
import axios from "axios";
import { TOwner } from "../../../../../shared/model/owner";
import columns from "../../../../const/const-owners";
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
        const response = await axios.get("http://localhost:3000/owners");
        const myRepo = response.data;
        setRepo(myRepo);
      } catch (error) {
        console.log(error);
      }
    };
    getRepo();
  }, []);

  const myRepo: TOwner[] = repo;
  let c: TOwner[] = [];

  const myNewTheme = {
    headCells: {
      style: {
        textTransform: "uppercase",
        fontSize: "9px",
        backgroundColor: "whitesmoke",
        height: "40px",
        marginTop: "2%",
      },
    },
    rows: {
      style: {
        fontSize: "10px",
      },
    },
  };

  return (
    <div>
      {myRepo.map((r, i) => {
        if (r.id === id) {
          c.push(myRepo[i]);
          return (
            <DataTable
              columns={columns}
              data={c}
              highlightOnHover
              customStyles={myNewTheme}
            />
          );
        }
      })}
    </div>
  );
};
export default Owners;

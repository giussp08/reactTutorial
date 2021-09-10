import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TPractice } from "../../../../shared/model/practice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import columns from "../../../const/const-header";

export type Data={
    loc:unknown;
}

const PracticeDetailHeader = (props:Data) =>{

    const [repo, setRepo] = useState([]);
    const loc=props.loc;

    useEffect(() => {
      const getRepo = async () => {
        try {
          const response = await axios.get("http://localhost:3000/practice");
          const myRepo = response.data;
          setRepo(myRepo);
        } catch (error) {
          console.log(error);
        }
      };
      getRepo();
    }, []);
  
    const myRepo: TPractice[] = repo;
    
    return(
        <div
            className="table"
            style={{ marginTop: "4%", marginBottom: "4%", textAlign: "center" }}
          >
            <FontAwesomeIcon
              className="center"
              style={{ width: "15%", height: "15%" }}
              icon={faFileInvoiceDollar}
            />
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[7].name + " "}
            </th>
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[10].name + " "}
            </th>
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[11].name + " "}
            </th>
            <th
              className="border-center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[8].name + " "}
            </th>
            <th
              className="center"
              style={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              {columns[0].name + " "}
            </th>

            {myRepo.map((r, i) => {
              if (r.companyTaxCode === loc) {
                return (
                  <tr key={i}>
                    <td className="center"> </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.step + " "}
                    </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.lastEditDateTo + " "}
                    </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.practiceStartDate + " "}
                    </td>
                    <td className="border-center" style={{ fontSize: "12px" }}>
                      {r.package + " "}
                    </td>
                    <td className="center" style={{ fontSize: "12px" }}>
                      {r.companyTaxCode + " "}
                    </td>
                  </tr>
                );
              }
            })}
          </div>
    )
}

export default PracticeDetailHeader;
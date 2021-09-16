import { useEffect, useRef, useState } from "react";
import { TPractice } from "../../../shared/model/practice";
import axios from "axios";
import "./Tablee.css";
import "../../../shared/styles/Hand.css";
import DataTable from "react-data-table-component";
import columns from "../../const/const-header";
import { useHistory } from "react-router";
import Result0 from "../search/Result0";

export type DataType = {
  repo: TPractice[];
};

const Tablee = (props: DataType) => {
  const repo = props.repo;
  let history = useHistory();
  const handleClick = (code: any) => {
    console.log(code);history.push({
      pathname: "/practice",
      state: code,
    });
  };

  


  if (repo.length === 0) {
    return <div><Result0/></div>;
  } else {
    return (
      <div style={{ marginLeft: "10%", marginRight: "14%" ,marginTop:"1%"}}>
        <DataTable
          columns={columns}
          data={repo}
          onRowClicked={(row, ev) => handleClick(row.practiceCode)}
          highlightOnHover
          pointerOnHover
        />
      </div>
    );
  }
};
export default Tablee;

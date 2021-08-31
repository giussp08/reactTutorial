import React from "react";
import { TCv } from "../../../shared/model/cv";

export type ComponentData = {
  nameArr:string
  compArr: TCv;
};

const Component = (props: ComponentData) => {
  const nameArr = props.nameArr;
  const compArr = props.compArr;
console.log(props);
    return (
      <div>
        <h3 style={{ paddingTop: "8%" }}> {nameArr} </h3>
        <hr style={{ width: "90%" }}></hr>
        <p >Text of {nameArr}</p>
      </div>
    );
  };

  export default Component;
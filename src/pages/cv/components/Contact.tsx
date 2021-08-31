import React from "react";
import { TCv } from "../../../shared/model/cv";

export type ContactData = {
  ContactArr: TCv;
};

const Contact = (props: ContactData) => {
  const {ContactArr} = props;
    return (
      <div>
        <h4 className="padding5"> Contact </h4>
        <hr style={{ width: "80%" }}></hr>
        <h6>Address:</h6>
        <p>{ContactArr.address}</p>
        <h6 className="padding5">Phone:</h6>
        <p>{ContactArr.phone}</p>
        <h6 className="padding5">Email:</h6>
        <p>{ContactArr.email}</p>
      </div>
    );
  };

  export default Contact;
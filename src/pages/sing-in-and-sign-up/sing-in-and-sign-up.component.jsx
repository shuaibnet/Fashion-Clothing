import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from '../../components/sign-up/sign-up.component';

import "./sing-in-and-sign-up.style.scss";

const SingInAndSingUpPage = () => (
  <div className="sing-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SingInAndSingUpPage;

import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Fragment>
      <h1>Hello, World !</h1>
      <Link to="/about">About</Link>
    </Fragment>
  );
}

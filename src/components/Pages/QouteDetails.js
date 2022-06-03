import { Fragment } from "react";

import { useParams, Route } from "react-router-dom";
import Comments from "../comments/Comments";

const QouteDetails = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Details Page</h1>
      <p>{params.quotesId}</p>
      <Route path={`/quotes/ ${params.quotesId}/comments`}></Route>
      <Comments />
    </Fragment>
  );
};

export default QouteDetails;

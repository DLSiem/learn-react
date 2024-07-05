import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "ERROR";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Page not found";
  }

  return (
    <PageContent title={title}>
      <h1>{error.status}</h1>
      <p>{message}</p>
    </PageContent>
  );
};

export default ErrorPage;

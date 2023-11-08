import React from "react";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import FetchQuery from "./FetchQuery";

const link = new HttpLink({
  uri: "https://star-wars-graphql-dont-change.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "a751c5151amshb89a31e7e7bdb07p141368jsnb8f10878d806",
    "x-rapidapi-host": "star-wars-graphql-dont-change.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const Task9 = () => {
  return (
    <ApolloProvider client={client}>
      <FetchQuery />
    </ApolloProvider>
  );
};

export default Task9;

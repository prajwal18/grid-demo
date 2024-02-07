import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { FC } from "react";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

interface IApolloClientProvider {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const ApolloClientProvider: FC<IApolloClientProvider> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

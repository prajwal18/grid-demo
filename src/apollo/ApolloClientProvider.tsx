import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { selectSession } from "../store/slice/sessionSlice";
import { getSessionCookie } from "../utils/cookieFunctions";

function createApolloClient(token: string) {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
  });

  // Set the context for the HTTP request with the bearer token
  const authLink = setContext((_, { headers }) => {
    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  // Create the ApolloClient instance
  const client = new ApolloClient({
    link: authLink.concat(httpLink), // Chain the authLink and httpLink
    cache: new InMemoryCache(),
  });

  return client;
}

interface IApolloClientProvider {
  children: React.ReactNode | Array<React.ReactNode> | undefined;
}
const ApolloClientProvider: FC<IApolloClientProvider> = ({ children }) => {
  const { isLoading, isLoggedIn } = useSelector(selectSession);
  const client = useMemo(() => {
    let token = "";
    if (!isLoading && isLoggedIn) {
      token = getSessionCookie();
    }
    return createApolloClient(token);
  }, [isLoading, isLoggedIn]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { create } from "domain";

// No Subscription required for develop process
const httpLink = createHttpLink({
    uri: "http://localhost:3007/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),

});
export default client;
import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query MyQuery {
    countries {
      edges {
        node {
          name
          capital
        }
      }
    }
  }
`;

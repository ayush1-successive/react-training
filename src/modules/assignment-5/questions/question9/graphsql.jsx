import { gql } from "@apollo/client";

export const GET_ALL_PEOPLE = gql`
  query MyQuery {
    allPeople {
      edges {
        node {
          name
          gender
          height
          mass
          homeworld {
            name
          }
        }
      }
    }
  }
`;

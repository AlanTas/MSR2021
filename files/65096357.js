type User {
  id: ID!
  phoneNumber: String!
}

type Query {
  user(id: String!): User!
}

type UpdateUserPayload {
  user: User!
}

type Mutation {
  updateUser(id: String!, phoneNumber: String!): UpdateUserPayload!
}

import { gql, useQuery } from '@apollo/client';

const USER_QUERY = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      __typename
      id
      phoneNumber
    }
  }
`;

const UserComponent = ({ userId }) => {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { id: userId },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <div>{data.user.phoneNumber}</div>;
}

// schema.js
export const typeDefs = gql`
  type DataToKeep {
    # anything here
  }

  extend type Query {
    dataToKeep: DataToKeep # probably nullable?
  }
`;

// cache.js
export const dataToKeepVar = makeVar(null);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        dataToKeep: {
          read() {
            return dataToKeepVar();
          } 
        },
      }
    }
  }
});

import { gql, useQuery } from '@apollo/client';

const DATA_QUERY = gql`
  query dataToKeep {
    dataToKeep @client {
      # anything here
    }
  }
`;

const AnyComponent = ({ userId }) => {
  const { loading, error, data } = useQuery(DATA_QUERY);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return <div>{JSON.stringify(data.dataToKeep)}</div>;
}

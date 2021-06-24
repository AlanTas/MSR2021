import { sequelize } from '../../db';
import { Model, DataTypes } from 'sequelize';

class Service extends Model {}
Service.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
  },
  { sequelize },
);

class Tag extends Model {}
Tag.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  },
  { sequelize },
);

Service.belongsToMany(Tag, { through: 'Service_Tag', as: 'tags' });
Tag.belongsToMany(Service, { through: 'Service_Tag', as: 'services' });

(async function test() {
  try {
    await sequelize.sync({ force: true });
    //seed
    await Service.bulkCreate(
      [
        { name: 'Restaurant X', slug: 'a', tags: [{ name: 'restaurant' }, { name: 'b' }] },
        { name: 'Restaurant Y', slug: 'b', tags: [{ name: 'c' }] },
        { name: 'Restaurant Z', slug: 'c', tags: [{ name: 'restaurant' }] },
      ],
      { include: [{ model: Tag, as: 'tags' }] },
    );
  } catch (error) {
    console.log(error);
  }
})();

export { Service, Tag };

import { ApolloServer, gql } from 'apollo-server';
import * as models from './model';

const typeDefs = gql`
  type Tag {
    id: ID!
    name: String!
  }

  type Service {
    id: ID!
    name: String!
    slug: String!
    tags: [Tag!]!
  }

  type Query {
    findServicesByTag(tag: String!): [Service]!
  }
`;

const resolvers = {
  Query: {
    async findServicesByTag(_, { tag }, { models }) {
      const res = await models.Service.findAll({
        where: {
          '$tags.name$': tag,
        },
        include: [
          {
            model: models.Tag,
            as: 'tags',
          },
        ],
      });
      const data = res.map((v) => v.get({ plain: true }));
      return data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    models,
  },
});

server.listen().then(({ url }) => {
  console.log(`  Server ready at ${url}`);
});

node-sequelize-examples=# select * from "Service";
 id |     name     | slug 
----+--------------+------
  1 | Restaurant X | a
  2 | Restaurant Y | b
  3 | Restaurant Z | c
(3 rows)

node-sequelize-examples=# select * from "Tag";
 id |    name    
----+------------
  1 | restaurant
  2 | b
  3 | c
  4 | restaurant
(4 rows)
node-sequelize-examples=# select * from "Service_Tag";
 ServiceId | TagId 
-----------+-------
         1 |     1
         1 |     2
         2 |     3
         3 |     4
(4 rows)

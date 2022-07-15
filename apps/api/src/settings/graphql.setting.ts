import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';

export class GraphQLModuleSetting implements GqlOptionsFactory<ApolloDriverConfig> {
  async createGqlOptions(): Promise<Omit<ApolloDriverConfig, 'driver'>> {
    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      plugins: [ApolloServerPluginLandingPageLocalDefault({ includeCookies: true })],
      playground: false,
      debug: true,
      context: ({ req, res }) => ({ req, res }),
    };
  }
}

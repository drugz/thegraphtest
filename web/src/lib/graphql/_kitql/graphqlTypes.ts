import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Gravatar = {
  __typename?: 'Gravatar';
  displayName: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  owner: Scalars['Bytes'];
};

export type Gravatar_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  displayName?: InputMaybe<Scalars['String']>;
  displayName_contains?: InputMaybe<Scalars['String']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_ends_with?: InputMaybe<Scalars['String']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_gt?: InputMaybe<Scalars['String']>;
  displayName_gte?: InputMaybe<Scalars['String']>;
  displayName_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_lt?: InputMaybe<Scalars['String']>;
  displayName_lte?: InputMaybe<Scalars['String']>;
  displayName_not?: InputMaybe<Scalars['String']>;
  displayName_not_contains?: InputMaybe<Scalars['String']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']>>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  displayName_starts_with?: InputMaybe<Scalars['String']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imageUrl?: InputMaybe<Scalars['String']>;
  imageUrl_contains?: InputMaybe<Scalars['String']>;
  imageUrl_contains_nocase?: InputMaybe<Scalars['String']>;
  imageUrl_ends_with?: InputMaybe<Scalars['String']>;
  imageUrl_ends_with_nocase?: InputMaybe<Scalars['String']>;
  imageUrl_gt?: InputMaybe<Scalars['String']>;
  imageUrl_gte?: InputMaybe<Scalars['String']>;
  imageUrl_in?: InputMaybe<Array<Scalars['String']>>;
  imageUrl_lt?: InputMaybe<Scalars['String']>;
  imageUrl_lte?: InputMaybe<Scalars['String']>;
  imageUrl_not?: InputMaybe<Scalars['String']>;
  imageUrl_not_contains?: InputMaybe<Scalars['String']>;
  imageUrl_not_contains_nocase?: InputMaybe<Scalars['String']>;
  imageUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  imageUrl_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  imageUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  imageUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  imageUrl_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  imageUrl_starts_with?: InputMaybe<Scalars['String']>;
  imageUrl_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Gravatar_OrderBy {
  DisplayName = 'displayName',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Owner = 'owner'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  gravatar?: Maybe<Gravatar>;
  gravatars: Array<Gravatar>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryGravatarArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGravatarsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Gravatar_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gravatar_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  gravatar?: Maybe<Gravatar>;
  gravatars: Array<Gravatar>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionGravatarArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGravatarsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Gravatar_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Gravatar_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GravatarQueryVariables = Exact<{ [key: string]: never; }>;


export type GravatarQuery = { __typename?: 'Query', gravatars: Array<{ __typename?: 'Gravatar', id: string, owner: any, displayName: string, imageUrl: string }> };


export const GravatarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Gravatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gravatars"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<GravatarQuery, GravatarQueryVariables>;

export const Gravatar = gql`
    query Gravatar {
  gravatars(first: 5) {
    id
    owner
    displayName
    imageUrl
  }
}
    `;
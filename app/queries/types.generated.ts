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
  /** An ISO 8601-encoded date */
  Date: string;
  /** An ISO 8601-encoded datetime */
  DateTime: string;
  /** Represents untyped JSON */
  JSON: any;
};

export type Account = Node & {
  __typename?: 'Account';
  canDelete: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  /** ID of the object. */
  id: Scalars['ID'];
  isStripeConnected: Scalars['Boolean'];
  name: Scalars['String'];
  orders: OrderConnection;
  owner: User;
  products: Array<Product>;
  stripeDashboardUrl?: Maybe<Scalars['String']>;
};


export type AccountOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** Autogenerated input type of AccountOnboardToStripe */
export type AccountOnboardToStripeInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of AccountOnboardToStripe. */
export type AccountOnboardToStripePayload = {
  __typename?: 'AccountOnboardToStripePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Currency = {
  __typename?: 'Currency';
  code: Scalars['String'];
  exponent: Scalars['Int'];
  name: Scalars['String'];
  symbol: Scalars['String'];
};

export type Customer = Node & {
  __typename?: 'Customer';
  account: Account;
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** ID of the object. */
  id: Scalars['ID'];
  lastName: Scalars['String'];
};

export type CustomerInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type InputFieldError = {
  __typename?: 'InputFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountOnboardToStripe: AccountOnboardToStripePayload;
  orderCreate: OrderCreatePayload;
  productCreate: ProductCreatePayload;
  productUpdate: ProductUpdatePayload;
  testMutation: TestMutationPayload;
  userChangeEmail: UserChangeEmailPayload;
  userUpdate: UserUpdatePayload;
};


export type MutationAccountOnboardToStripeArgs = {
  input: AccountOnboardToStripeInput;
};


export type MutationOrderCreateArgs = {
  input: OrderCreateInput;
};


export type MutationProductCreateArgs = {
  input: ProductCreateInput;
};


export type MutationProductUpdateArgs = {
  input: ProductUpdateInput;
};


export type MutationTestMutationArgs = {
  input: TestMutationInput;
};


export type MutationUserChangeEmailArgs = {
  input: UserChangeEmailInput;
};


export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

export type Order = Node & {
  __typename?: 'Order';
  account: Account;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customer: Customer;
  /** ID of the object. */
  id: Scalars['ID'];
  items: Array<OrderItem>;
  product: Product;
  stripeCheckoutSessionUrl: Scalars['String'];
  stripePaymentIntentUrl?: Maybe<Scalars['String']>;
  subtotal: Scalars['String'];
  subtotalCents: Scalars['Int'];
  url: Scalars['String'];
};

/** The connection type for Order. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** A list of nodes. */
  nodes: Array<Order>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** Autogenerated input type of OrderCreate */
export type OrderCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  customer: CustomerInput;
  items: Array<OrderItemInput>;
  productId: Scalars['ID'];
};

/** Autogenerated return type of OrderCreate. */
export type OrderCreatePayload = {
  __typename?: 'OrderCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<InputFieldError>>;
  order?: Maybe<Order>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  currency: Currency;
  /** ID of the object. */
  id: Scalars['ID'];
  productItem: ProductItem;
  questionResponses: Array<OrderQuestionResponse>;
  subtotal: Scalars['String'];
  subtotalCents: Scalars['Int'];
};

export type OrderItemInput = {
  productItemId: Scalars['ID'];
  questionResponses?: InputMaybe<Array<OrderQuestionResponseInput>>;
};

export type OrderQuestion = Node & {
  __typename?: 'OrderQuestion';
  choices?: Maybe<Array<Scalars['String']>>;
  /** ID of the object. */
  id: Scalars['ID'];
  prompt: Scalars['String'];
  type: OrderQuestionType;
};

export type OrderQuestionInput = {
  choices?: InputMaybe<Array<Scalars['String']>>;
  prompt: Scalars['String'];
  type: OrderQuestionType;
};

export type OrderQuestionResponse = Node & {
  __typename?: 'OrderQuestionResponse';
  answer: Scalars['JSON'];
  /** ID of the object. */
  id: Scalars['ID'];
  question: OrderQuestion;
};

export type OrderQuestionResponseInput = {
  answer: Scalars['JSON'];
  questionId: Scalars['ID'];
};

export enum OrderQuestionType {
  Checkbox = 'CHECKBOX',
  LongAnswer = 'LONG_ANSWER',
  MultipleChoice = 'MULTIPLE_CHOICE',
  ShortAnswer = 'SHORT_ANSWER',
  SingleChoice = 'SINGLE_CHOICE'
}

export enum OrderScope {
  PerOrder = 'PER_ORDER',
  PerPerson = 'PER_PERSON',
  PerUnit = 'PER_UNIT'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = Node & {
  __typename?: 'Product';
  account: Account;
  canDelete: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  editUrl: Scalars['String'];
  /** ID of the object. */
  id: Scalars['ID'];
  items: Array<ProductItem>;
  name: Scalars['String'];
  url: Scalars['String'];
};

/** Autogenerated input type of ProductCreate */
export type ProductCreateInput = {
  accountId?: InputMaybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  currencyCode: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  items: Array<ProductItemInput>;
  name: Scalars['String'];
};

/** Autogenerated return type of ProductCreate. */
export type ProductCreatePayload = {
  __typename?: 'ProductCreatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<InputFieldError>>;
  product?: Maybe<Product>;
};

export type ProductItem = Node & {
  __typename?: 'ProductItem';
  currency: Currency;
  description?: Maybe<Scalars['String']>;
  /** ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  orderScope: OrderScope;
  price: Scalars['String'];
  priceCents: Scalars['Int'];
  questions: Array<OrderQuestion>;
  units?: Maybe<Units>;
};

export type ProductItemInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  orderScope: OrderScope;
  price?: InputMaybe<Scalars['String']>;
  priceCents?: InputMaybe<Scalars['Int']>;
  questions?: InputMaybe<Array<OrderQuestionInput>>;
  units?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of ProductUpdate */
export type ProductUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  items: Array<ProductItemInput>;
  name: Scalars['String'];
  productId: Scalars['ID'];
};

/** Autogenerated return type of ProductUpdate. */
export type ProductUpdatePayload = {
  __typename?: 'ProductUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<InputFieldError>>;
  product?: Maybe<Product>;
};

export type Query = {
  __typename?: 'Query';
  currencies: Array<Currency>;
  currency?: Maybe<Currency>;
  order: Order;
  passwordStrength: Scalars['Float'];
  product: Product;
  testEcho: Scalars['String'];
  /** The currently authenticated user. */
  viewer?: Maybe<User>;
};


export type QueryCurrencyArgs = {
  code: Scalars['String'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryPasswordStrengthArgs = {
  password: Scalars['String'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryTestEchoArgs = {
  text?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  testSubscription: Scalars['Int'];
};

export type TestModel = {
  __typename?: 'TestModel';
  birthday?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Autogenerated input type of TestMutation */
export type TestMutationInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Autogenerated return type of TestMutation. */
export type TestMutationPayload = {
  __typename?: 'TestMutationPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<InputFieldError>>;
  model?: Maybe<TestModel>;
};

export type Units = {
  __typename?: 'Units';
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type User = Node & {
  __typename?: 'User';
  email: Scalars['String'];
  /** ID of the object. */
  id: Scalars['ID'];
  name: Scalars['String'];
  primaryAccount: Account;
  unconfirmedEmail?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UserChangeEmail */
export type UserChangeEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  currentPassword: Scalars['String'];
  email: Scalars['String'];
};

/** Autogenerated return type of UserChangeEmail. */
export type UserChangeEmailPayload = {
  __typename?: 'UserChangeEmailPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<InputFieldError>>;
  user?: Maybe<User>;
};

/** Autogenerated input type of UserUpdate */
export type UserUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** Autogenerated return type of UserUpdate. */
export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<InputFieldError>>;
  user?: Maybe<User>;
};

import * as Types from 'app/queries/types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AccountOnboardToStripeVariables = Types.Exact<{
  input: Types.AccountOnboardToStripeInput;
}>;


export type AccountOnboardToStripe = (
  { __typename?: 'Mutation' }
  & { payload: (
    { __typename?: 'AccountOnboardToStripePayload' }
    & Pick<Types.AccountOnboardToStripePayload, 'url'>
  ) }
);

export type AppViewerFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'id' | 'name'>
);

export type CurrencyAmountFieldCurrencyFragment = (
  { __typename?: 'Currency' }
  & Pick<Types.Currency, 'code' | 'exponent'>
);

export type CurrencyAmountFieldQueryVariables = Types.Exact<{
  currencyCode: Types.Scalars['String'];
}>;


export type CurrencyAmountFieldQuery = (
  { __typename?: 'Query' }
  & { currency: Types.Maybe<(
    { __typename?: 'Currency' }
    & Pick<Types.Currency, 'code' | 'exponent'>
  )> }
);

export type CurrencyCodeFieldCurrencyFragment = (
  { __typename?: 'Currency' }
  & Pick<Types.Currency, 'name' | 'code' | 'symbol'>
);

export type CurrencyCodeFieldQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrencyCodeFieldQuery = (
  { __typename?: 'Query' }
  & { currencies: Array<(
    { __typename?: 'Currency' }
    & Pick<Types.Currency, 'name' | 'code' | 'symbol'>
  )> }
);

export type DashboardPageProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'url' | 'name' | 'description'>
);

export type DashboardPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DashboardPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
    & { primaryAccount: (
      { __typename?: 'Account' }
      & Pick<Types.Account, 'id' | 'isStripeConnected'>
      & { products: Array<(
        { __typename?: 'Product' }
        & Pick<Types.Product, 'id' | 'url' | 'name' | 'description'>
      )>, orders: (
        { __typename?: 'OrderConnection' }
        & Pick<Types.OrderConnection, 'totalCount'>
        & { edges: Array<(
          { __typename?: 'OrderEdge' }
          & { node: (
            { __typename?: 'Order' }
            & Pick<Types.Order, 'id' | 'createdAt' | 'code' | 'stripePaymentIntentUrl'>
            & { customer: (
              { __typename?: 'Customer' }
              & Pick<Types.Customer, 'id' | 'firstName' | 'lastName' | 'email'>
            ), product: (
              { __typename?: 'Product' }
              & Pick<Types.Product, 'id' | 'name' | 'url'>
            ), items: Array<(
              { __typename?: 'OrderItem' }
              & Pick<Types.OrderItem, 'id' | 'quantity'>
              & { productItem: (
                { __typename?: 'ProductItem' }
                & Pick<Types.ProductItem, 'id' | 'name'>
              ) }
            )> }
          ) }
        )>, pageInfo: (
          { __typename?: 'PageInfo' }
          & Pick<Types.PageInfo, 'hasNextPage' | 'endCursor'>
        ) }
      ) }
    ) }
  )> }
);

export type DashboardStripeAlertAccountFragment = (
  { __typename?: 'Account' }
  & Pick<Types.Account, 'isStripeConnected'>
);

export type ErrorPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ErrorPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export type HomePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomePageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export type OrderCardOrderFragment = (
  { __typename?: 'Order' }
  & Pick<Types.Order, 'createdAt' | 'code' | 'stripePaymentIntentUrl'>
  & { customer: (
    { __typename?: 'Customer' }
    & Pick<Types.Customer, 'id' | 'firstName' | 'lastName' | 'email'>
  ), product: (
    { __typename?: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'url'>
  ), items: Array<(
    { __typename?: 'OrderItem' }
    & Pick<Types.OrderItem, 'id' | 'quantity'>
    & { productItem: (
      { __typename?: 'ProductItem' }
      & Pick<Types.ProductItem, 'id' | 'name'>
    ) }
  )> }
);

export type OrderCreateMutationVariables = Types.Exact<{
  input: Types.OrderCreateInput;
}>;


export type OrderCreateMutation = (
  { __typename?: 'Mutation' }
  & { payload: (
    { __typename?: 'OrderCreatePayload' }
    & { order: Types.Maybe<(
      { __typename?: 'Order' }
      & Pick<Types.Order, 'id' | 'stripeCheckoutSessionUrl'>
    )>, errors: Types.Maybe<Array<(
      { __typename?: 'InputFieldError' }
      & Pick<Types.InputFieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type OrderFormProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'id'>
  & { currency: (
    { __typename?: 'Currency' }
    & Pick<Types.Currency, 'code' | 'exponent'>
  ), items: Array<(
    { __typename?: 'ProductItem' }
    & Pick<Types.ProductItem, 'id' | 'name' | 'orderScope' | 'price'>
    & { units: Types.Maybe<(
      { __typename?: 'Units' }
      & Pick<Types.Units, 'singular' | 'plural'>
    )> }
  )> }
);

export type OrderFormProductItemFragment = (
  { __typename?: 'ProductItem' }
  & Pick<Types.ProductItem, 'name' | 'orderScope' | 'price'>
  & { units: Types.Maybe<(
    { __typename?: 'Units' }
    & Pick<Types.Units, 'singular' | 'plural'>
  )> }
);

export type ProductCardProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'name' | 'description'>
);

export type ProductCreateMutationVariables = Types.Exact<{
  input: Types.ProductCreateInput;
}>;


export type ProductCreateMutation = (
  { __typename?: 'Mutation' }
  & { payload: (
    { __typename?: 'ProductCreatePayload' }
    & { product: Types.Maybe<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'id' | 'url'>
    )>, errors: Types.Maybe<Array<(
      { __typename?: 'InputFieldError' }
      & Pick<Types.InputFieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type ProductCreatePageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductCreatePageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export type ProductEditPageQueryVariables = Types.Exact<{
  productId: Types.Scalars['ID'];
}>;


export type ProductEditPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )>, product: (
    { __typename?: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'description'>
    & { currency: (
      { __typename?: 'Currency' }
      & Pick<Types.Currency, 'code'>
    ), items: Array<(
      { __typename?: 'ProductItem' }
      & Pick<Types.ProductItem, 'name' | 'description' | 'orderScope' | 'price'>
      & { units: Types.Maybe<(
        { __typename?: 'Units' }
        & Pick<Types.Units, 'plural'>
      )>, questions: Array<(
        { __typename?: 'ProductItemQuestion' }
        & Pick<Types.ProductItemQuestion, 'id' | 'prompt' | 'type' | 'choices'>
      )> }
    )> }
  ) }
);

export type ProductFormProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'name' | 'description'>
  & { currency: (
    { __typename?: 'Currency' }
    & Pick<Types.Currency, 'code'>
  ), items: Array<(
    { __typename?: 'ProductItem' }
    & Pick<Types.ProductItem, 'name' | 'description' | 'orderScope' | 'price'>
    & { units: Types.Maybe<(
      { __typename?: 'Units' }
      & Pick<Types.Units, 'plural'>
    )>, questions: Array<(
      { __typename?: 'ProductItemQuestion' }
      & Pick<Types.ProductItemQuestion, 'id' | 'prompt' | 'type' | 'choices'>
    )> }
  )> }
);

export type ProductItemFieldsItemFragment = (
  { __typename?: 'ProductItem' }
  & Pick<Types.ProductItem, 'name' | 'description' | 'orderScope' | 'price'>
  & { units: Types.Maybe<(
    { __typename?: 'Units' }
    & Pick<Types.Units, 'plural'>
  )>, questions: Array<(
    { __typename?: 'ProductItemQuestion' }
    & Pick<Types.ProductItemQuestion, 'id' | 'prompt' | 'type' | 'choices'>
  )> }
);

export type ProductItemQuestionFieldsQuestionFragment = (
  { __typename?: 'ProductItemQuestion' }
  & Pick<Types.ProductItemQuestion, 'prompt' | 'type' | 'choices'>
);

export type ProductPageProductFragment = (
  { __typename?: 'Product' }
  & Pick<Types.Product, 'canEdit' | 'editUrl' | 'name' | 'description' | 'id'>
  & { currency: (
    { __typename?: 'Currency' }
    & Pick<Types.Currency, 'code' | 'exponent'>
  ), items: Array<(
    { __typename?: 'ProductItem' }
    & Pick<Types.ProductItem, 'id' | 'name' | 'orderScope' | 'price'>
    & { units: Types.Maybe<(
      { __typename?: 'Units' }
      & Pick<Types.Units, 'singular' | 'plural'>
    )> }
  )> }
);

export type ProductPageQueryVariables = Types.Exact<{
  productId: Types.Scalars['ID'];
}>;


export type ProductPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )>, product: (
    { __typename?: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'description' | 'canEdit' | 'editUrl'>
    & { currency: (
      { __typename?: 'Currency' }
      & Pick<Types.Currency, 'code' | 'exponent'>
    ), items: Array<(
      { __typename?: 'ProductItem' }
      & Pick<Types.ProductItem, 'id' | 'name' | 'orderScope' | 'price'>
      & { units: Types.Maybe<(
        { __typename?: 'Units' }
        & Pick<Types.Units, 'singular' | 'plural'>
      )> }
    )> }
  ) }
);

export type ProductUpdateMutationVariables = Types.Exact<{
  input: Types.ProductUpdateInput;
}>;


export type ProductUpdateMutation = (
  { __typename?: 'Mutation' }
  & { payload: (
    { __typename?: 'ProductUpdatePayload' }
    & { product: Types.Maybe<(
      { __typename?: 'Product' }
      & Pick<Types.Product, 'id' | 'url' | 'name'>
    )>, errors: Types.Maybe<Array<(
      { __typename?: 'InputFieldError' }
      & Pick<Types.InputFieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type TestFeedSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type TestFeedSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Types.Subscription, 'testSubscription'>
);

export type TestMutationVariables = Types.Exact<{
  input: Types.TestMutationInput;
}>;


export type TestMutation = (
  { __typename?: 'Mutation' }
  & { testMutation: (
    { __typename?: 'TestMutationPayload' }
    & { model: Types.Maybe<(
      { __typename?: 'TestModel' }
      & Pick<Types.TestModel, 'id' | 'name' | 'birthday'>
    )>, errors: Types.Maybe<Array<(
      { __typename?: 'InputFieldError' }
      & Pick<Types.InputFieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type TestPageQueryVariables = Types.Exact<{
  name: Types.Scalars['String'];
}>;


export type TestPageQuery = (
  { __typename?: 'Query' }
  & Pick<Types.Query, 'testEcho'>
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export type UserEmailFormQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserEmailFormQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'email' | 'unconfirmedEmail'>
  )> }
);

export type UserLoginPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserLoginPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export type UserRegisterPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserRegisterPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export type UserSettingsPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserSettingsPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'email' | 'unconfirmedEmail'>
  )> }
);

export type UserSettingsPageViewerFragment = (
  { __typename?: 'User' }
  & Pick<Types.User, 'name' | 'email' | 'unconfirmedEmail'>
);

export type UserUpdateMutationVariables = Types.Exact<{
  input: Types.UserUpdateInput;
}>;


export type UserUpdateMutation = (
  { __typename?: 'Mutation' }
  & { payload: (
    { __typename?: 'UserUpdatePayload' }
    & { user: Types.Maybe<(
      { __typename?: 'User' }
      & Pick<Types.User, 'id'>
    )>, errors: Types.Maybe<Array<(
      { __typename?: 'InputFieldError' }
      & Pick<Types.InputFieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type WorkPageQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type WorkPageQuery = (
  { __typename?: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name'>
  )> }
);

export const AppViewerFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AppViewerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AppViewerFragment, unknown>;
export const CurrencyAmountFieldCurrencyFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrencyAmountFieldCurrencyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"exponent"}}]}}]} as unknown as DocumentNode<CurrencyAmountFieldCurrencyFragment, unknown>;
export const CurrencyCodeFieldCurrencyFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CurrencyCodeFieldCurrencyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Currency"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}}]}}]} as unknown as DocumentNode<CurrencyCodeFieldCurrencyFragment, unknown>;
export const ProductCardProductFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductCardProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ProductCardProductFragment, unknown>;
export const DashboardPageProductFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DashboardPageProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductCardProductFragment"}}]}},...ProductCardProductFragment.definitions]} as unknown as DocumentNode<DashboardPageProductFragment, unknown>;
export const DashboardStripeAlertAccountFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DashboardStripeAlertAccountFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isStripeConnected"}}]}}]} as unknown as DocumentNode<DashboardStripeAlertAccountFragment, unknown>;
export const OrderCardOrderFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderCardOrderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Order"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"stripePaymentIntentUrl"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"productItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]}}]} as unknown as DocumentNode<OrderCardOrderFragment, unknown>;
export const ProductItemQuestionFieldsQuestionFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductItemQuestionFieldsQuestionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductItemQuestion"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"choices"}}]}}]} as unknown as DocumentNode<ProductItemQuestionFieldsQuestionFragment, unknown>;
export const ProductItemFieldsItemFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductItemFieldsItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plural"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderScope"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductItemQuestionFieldsQuestionFragment"}}]}}]}},...ProductItemQuestionFieldsQuestionFragment.definitions]} as unknown as DocumentNode<ProductItemFieldsItemFragment, unknown>;
export const ProductFormProductFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductFormProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductItemFieldsItemFragment"}}]}}]}},...ProductItemFieldsItemFragment.definitions]} as unknown as DocumentNode<ProductFormProductFragment, unknown>;
export const OrderFormProductItemFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderFormProductItemFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singular"}},{"kind":"Field","name":{"kind":"Name","value":"plural"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderScope"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]} as unknown as DocumentNode<OrderFormProductItemFragment, unknown>;
export const OrderFormProductFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderFormProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"exponent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderFormProductItemFragment"}}]}}]}},...OrderFormProductItemFragment.definitions]} as unknown as DocumentNode<OrderFormProductFragment, unknown>;
export const ProductPageProductFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductPageProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canEdit"}},{"kind":"Field","name":{"kind":"Name","value":"editUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderFormProductFragment"}}]}},...OrderFormProductFragment.definitions]} as unknown as DocumentNode<ProductPageProductFragment, unknown>;
export const UserSettingsPageViewerFragment = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSettingsPageViewerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"unconfirmedEmail"}}]}}]} as unknown as DocumentNode<UserSettingsPageViewerFragment, unknown>;
export const AccountOnboardToStripeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AccountOnboardToStripe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountOnboardToStripeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"payload"},"name":{"kind":"Name","value":"accountOnboardToStripe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<AccountOnboardToStripe, AccountOnboardToStripeVariables>;
export const CurrencyAmountFieldQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrencyAmountFieldQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currencyCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrencyAmountFieldCurrencyFragment"}}]}}]}},...CurrencyAmountFieldCurrencyFragment.definitions]} as unknown as DocumentNode<CurrencyAmountFieldQuery, CurrencyAmountFieldQueryVariables>;
export const CurrencyCodeFieldQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CurrencyCodeFieldQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CurrencyCodeFieldCurrencyFragment"}}]}}]}},...CurrencyCodeFieldCurrencyFragment.definitions]} as unknown as DocumentNode<CurrencyCodeFieldQuery, CurrencyCodeFieldQueryVariables>;
export const DashboardPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DashboardPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"primaryAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"DashboardPageProductFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderCardOrderFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"DashboardStripeAlertAccountFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...DashboardPageProductFragment.definitions,...OrderCardOrderFragment.definitions,...DashboardStripeAlertAccountFragment.definitions,...AppViewerFragment.definitions]} as unknown as DocumentNode<DashboardPageQuery, DashboardPageQueryVariables>;
export const ErrorPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ErrorPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<ErrorPageQuery, ErrorPageQueryVariables>;
export const HomePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const OrderCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OrderCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"payload"},"name":{"kind":"Name","value":"orderCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stripeCheckoutSessionUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<OrderCreateMutation, OrderCreateMutationVariables>;
export const ProductCreateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductCreateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"payload"},"name":{"kind":"Name","value":"productCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ProductCreateMutation, ProductCreateMutationVariables>;
export const ProductCreatePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductCreatePageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<ProductCreatePageQuery, ProductCreatePageQueryVariables>;
export const ProductEditPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductEditPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductFormProductFragment"}}]}}]}},...AppViewerFragment.definitions,...ProductFormProductFragment.definitions]} as unknown as DocumentNode<ProductEditPageQuery, ProductEditPageQueryVariables>;
export const ProductPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currency"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singular"}},{"kind":"Field","name":{"kind":"Name","value":"plural"}}]}},{"kind":"Field","name":{"kind":"Name","value":"orderScope"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductPageProductFragment"}}]}}]}},...AppViewerFragment.definitions,...ProductPageProductFragment.definitions]} as unknown as DocumentNode<ProductPageQuery, ProductPageQueryVariables>;
export const ProductUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"payload"},"name":{"kind":"Name","value":"productUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<ProductUpdateMutation, ProductUpdateMutationVariables>;
export const TestFeedSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"TestFeedSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testSubscription"}}]}}]} as unknown as DocumentNode<TestFeedSubscription, TestFeedSubscriptionVariables>;
export const TestMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"TestMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TestMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testMutation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<TestMutation, TestMutationVariables>;
export const TestPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TestPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"testEcho"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]},{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<TestPageQuery, TestPageQueryVariables>;
export const UserEmailFormQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserEmailFormQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"unconfirmedEmail"}}]}}]}}]} as unknown as DocumentNode<UserEmailFormQuery, UserEmailFormQueryVariables>;
export const UserLoginPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserLoginPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<UserLoginPageQuery, UserLoginPageQueryVariables>;
export const UserRegisterPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserRegisterPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<UserRegisterPageQuery, UserRegisterPageQueryVariables>;
export const UserSettingsPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserSettingsPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSettingsPageViewerFragment"}}]}}]}},...AppViewerFragment.definitions,...UserSettingsPageViewerFragment.definitions]} as unknown as DocumentNode<UserSettingsPageQuery, UserSettingsPageQueryVariables>;
export const UserUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"payload"},"name":{"kind":"Name","value":"userUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UserUpdateMutation, UserUpdateMutationVariables>;
export const WorkPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WorkPageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AppViewerFragment"}}]}}]}},...AppViewerFragment.definitions]} as unknown as DocumentNode<WorkPageQuery, WorkPageQueryVariables>;
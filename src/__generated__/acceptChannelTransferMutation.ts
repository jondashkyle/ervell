/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: acceptChannelTransferMutation
// ====================================================

export interface acceptChannelTransferMutation_accept_channel_transfer_channel_transfer_request_channel {
  __typename: "Channel";
  id: number;
  title: string;
  href: string;
}

export interface acceptChannelTransferMutation_accept_channel_transfer_channel_transfer_request {
  __typename: "ChannelTransferRequest";
  channel: acceptChannelTransferMutation_accept_channel_transfer_channel_transfer_request_channel;
}

export interface acceptChannelTransferMutation_accept_channel_transfer {
  __typename: "AcceptChannelTransferMutationPayload";
  channel_transfer_request: acceptChannelTransferMutation_accept_channel_transfer_channel_transfer_request;
}

export interface acceptChannelTransferMutation {
  accept_channel_transfer: acceptChannelTransferMutation_accept_channel_transfer | null;
}

export interface acceptChannelTransferMutationVariables {
  token: string;
}

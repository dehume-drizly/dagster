// @generated
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CancelBackfill
// ====================================================

export interface CancelBackfill_cancelPartitionBackfill_ReadOnlyError {
  __typename: "ReadOnlyError";
}

export interface CancelBackfill_cancelPartitionBackfill_CancelBackfillSuccess {
  __typename: "CancelBackfillSuccess";
  backfillId: string;
}

export interface CancelBackfill_cancelPartitionBackfill_PythonError {
  __typename: "PythonError";
  message: string;
}

export type CancelBackfill_cancelPartitionBackfill = CancelBackfill_cancelPartitionBackfill_ReadOnlyError | CancelBackfill_cancelPartitionBackfill_CancelBackfillSuccess | CancelBackfill_cancelPartitionBackfill_PythonError;

export interface CancelBackfill {
  cancelPartitionBackfill: CancelBackfill_cancelPartitionBackfill;
}

export interface CancelBackfillVariables {
  backfillId: string;
}

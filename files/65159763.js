case ADDNOTE: return {
  ...state,
  person: {
    ...state.person,
    operations: state.person.operations.map((operation) =>
      operation.id !== action.payload.operationId
        ? operation //not this operation, just return original
        : { // add note
            ...operation,
            notes: [...operation.notes, action.payload],
          }
    ),
  },
};

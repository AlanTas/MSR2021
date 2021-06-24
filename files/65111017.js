getDocument(requestId: string, documentId: DocumentID, requestService: IRequestService): Promise<GetDocumentResult> {
  if (this.storageKey in sessionStorage) {
    const documentsMap: Map<DocumentID, GetDocumentResult> = new Map(JSON.parse(sessionStorage.getItem(this.storageKey)!));
    const document = documentsMap.get(documentId);
    if (document !== undefined) {
      return Promise.resolve(document);
    }
  }

  return requestService.getDocument(requestId, documentId).then(value => {
    this.setDocument(documentId, value);
    return value;
//  ^^^^^^^^^^^^
  });
}

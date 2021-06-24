public getAdminHeaders(): HttpHeaders { // <-- declared return type
  if (localStorage.getItem('access_token')) {
    this._adminHeaders = new HttpHeaders({
      'Authentication': localStorage.getItem('access_token') || 'null'
    });
  } else {
    this._adminHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  return this._adminHeaders;
}

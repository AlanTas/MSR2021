this.setState(prevState => ({
    ...prevState, //copy current state
    clientsList: [
        //copy current clients list with currentClient object filtered out            
        ...prevState.clientsList.filter( e => e.clientID !== this.state.currentClient.clientID),
        { //replace client object
            clientID: this.state.currentClient
            InvoiceNumber: this.state.currentInvoice
        }
    ]
}))

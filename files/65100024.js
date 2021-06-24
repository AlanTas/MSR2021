uncheckAllUnsentHandler = (e) => {
  const newCheckMarkValue = e.target.checked;
  this.setState((prevState, props) => {
    const newUnsentMail = prevState.unsentMail.map(policy => {
      mail.willSend = newCheckMarkValue;
      return mail;
    });
    return {
      unsentMail: newUnsentMail
    }
  });
}

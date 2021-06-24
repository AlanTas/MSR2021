redTimeout = () => {
  const timeoutId = setTimeout(() => {
    this.props.redBoxScore();
    this.setState({
      overlayContainer: 'none'
    });

  }, 5000);
  this.setState({ timeoutId });
}
handleTerminate = () => {
  clearTimeout(this.state.timeoutId);
}

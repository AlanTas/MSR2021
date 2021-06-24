handleSubmit(event) {
  var requestOptions = {}

  const params = new URLSearchParams({
    'name': this.state.name,
    'birth': this.state.birth,
    'oscars': this.state.oscars
  });

  if (this.state.movies.length > 0) {
    params.append("movies", this.state.movies)
  }

  requestOptions.method = "POST";
  requestOptions.body = params;
}

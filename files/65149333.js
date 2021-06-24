try {
  for (const val of response.data['users']) {
    console.log("ENTER");
    var url = 'getDetailUser' + val["id"];
    var res = await call(url); 
    console.log("EXIT")
  }
} catch (error) {
  console.log(error)
}

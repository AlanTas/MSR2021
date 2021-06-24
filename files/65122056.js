const urls = [
  'https://localhost:8000/api/users/available/23342?name=john',
  'https://example.com/api/users/available/23342?name=john',
  'https://example.com/api/users/available/23342',
  'https://example.com/api/users/available?name=john',
];
const regex = /^[a-z]+:\/\/[^:\/]+(:[0-9]+)?\/(.*?)(\/[0-9]+)?(\?.*)?$/;
urls.forEach((url) => {
  var result = url.replace(regex, '$2');
  console.log(url + ' ==> ' + result);
});
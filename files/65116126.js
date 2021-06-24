let users=[{"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}];

const [selectedUser, setselectedUser] = useState(undefined);

setselectedUser({...users[0]}); // <-- I changed this

var a = selectedUser;
a.firstName = "XYZ"
setselectedUser(a);

function App() {
  const [company, setCompany] = useState([]);
  const [price, setPrice] = useState([]);
  const [symbol, setSymbol] = useState([]);

  function fetchCompanyProfile(e) {
    let company = '';
    if(e.target.target.ticker.value){
      company = e.target.ticker.value
    } else {
      company = e.target.innerHTML;
    }
    console.log(company);
    e.preventDefault();
    e.target.reset();
    fetch('https://someapicompany.com/profile/${company}?apikey=xyz')
      .then(res => res.json())
      .then(data => {
        setCompany({ data })
      });

  }

  console.log(company.data)

  return (
    <div className="App">
      <SearchTicker/>
      <SearchCompanyProfile getCompanyProfile={fetchCompanyProfile}/>
      <TickerResults ticker={symbol} getTicker={fetchCompanyProfile}/>
      <CompanyProfile company={company}/>
    </div>
  );
}
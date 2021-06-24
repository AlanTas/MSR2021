var xmlData = `<?xml version='1.0' encoding='UTF-8'?>
<dataset>
    <MOCK_DATA id="1" first_name="Sandor" last_name="Balmer" email="sbalmer0@qq.com" gender="Male" ip_address="148.134.84.45"/>
    <MOCK_DATA id="2" first_name="Val" last_name="Toll" email="vtoll1@tamu.edu" gender="Male" ip_address="249.13.225.19"/>
    <MOCK_DATA id="3" first_name="Phyllida" last_name="Purrier" email="ppurrier2@vimeo.com" gender="Female" ip_address="156.189.251.161"/>
    <MOCK_DATA id="4" first_name="Marjy" last_name="Pittam" email="mpittam3@businessinsider.com" gender="Female" ip_address="193.195.178.210"/>
    <MOCK_DATA id="5" first_name="Kirbee" last_name="Regglar" email="kregglar4@unblog.fr" gender="Female" ip_address="251.218.161.174"/>
    <MOCK_DATA id="6" first_name="Mariquilla" last_name="Caseri" email="mcaseri5@symantec.com" gender="Female" ip_address="247.187.208.116"/>
    <MOCK_DATA id="7" first_name="Juline" last_name="Coase" email="jcoase6@indiatimes.com" gender="Female" ip_address="23.117.236.168"/>
    <MOCK_DATA id="8" first_name="Courtnay" last_name="Scown" email="cscown7@ask.com" gender="Female" ip_address="120.80.78.72"/>
    <MOCK_DATA id="9" first_name="Armin" last_name="Mc Caghan" email="amccaghan8@ameblo.jp" gender="Male" ip_address="244.47.41.88"/>
    <MOCK_DATA id="10" first_name="Josie" last_name="Gunthorp" email="jgunthorp9@yahoo.co.jp" gender="Female" ip_address="169.142.65.100"/>
</dataset>`

parser = new DOMParser();
xmlDoc = parser.parseFromString(xmlData, "text/xml");
mock_data =  xmlDoc.getElementsByTagName("MOCK_DATA");

for (let data in mock_data){
  console.log(mock_data[data].getAttribute('first_name'))
}
<xsd:events xmlns:xsd="http://epevents.post.ee/xsd">
    <event id=“1234”>
      <packetCode>ABC123</packetCode>
      <eventCode>EVENT_CODE</eventCode>
      <eventDate>2020-12-03T14:34:09.000+02:00</eventDate>
      <stateCode>STATUS_CODE</stateCode>
      <eventSource zip="123">Some place</eventSource>
    </event>
    <event id=“456”>
      <packetCode>DEF456</packetCode>
      <eventCode>EVENT_CODE</eventCode>
      <eventDate>2020-12-03T14:40:44.000+02:00</eventDate>
      <stateCode>STATUS_CODE</stateCode>
      <eventSource zip="123">Some place</eventSource>
    </event>
  </xsd:events>

{
    "xsd:events": {
        "event": [
            {
                "packetCode": "ABC123",
                "eventCode": "EVENT_CODE",
                "eventDate": "2020-12-03T14:34:09.000+02:00",
                "stateCode": "STATUS_CODE",
                "eventSource": "Some place"
            },
            {
                "packetCode": "DEF456",
                "eventCode": "EVENT_CODE",
                "eventDate": "2020-12-03T14:40:44.000+02:00",
                "stateCode": "STATUS_CODE",
                "eventSource": "Some place"
            }
        ]
    }
}

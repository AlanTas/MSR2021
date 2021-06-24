[
  {
    "name": "data.0.id.no",
    "value": null
  },
  {
    "name": "data.0.id.uid",
    "value": null
  },
  {
    "name": "data.0.id.dataBody.area",
    "value": "Universe"
  },
  {
    "name": "data.0.id.dataBody.place",
    "value": "LMN"
  },
  {
    "name": "data.0.id.dataBody.information1.0.code",
    "value": "abc"
  },
  {
    "name": "data.0.id.dataBody.information1.0.group",
    "value": "xyz"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.0.definition.type",
    "value": "up"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.0.definition.features.featurekey",
    "value": "ABC"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.0.definition.features.featureValues",
    "value": null
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.0.definition.mandatory",
    "value": true
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.0.cost.currency",
    "value": "USD"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.0.cost.value",
    "value": 1
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.1.definition.type",
    "value": "down"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.1.definition.mandatory",
    "value": true
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.1.cost",
    "value": "100"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.2.definition.type",
    "value": "left"
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.2.definition.value",
    "value": null
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.2.definition.mandatory",
    "value": true
  },
  {
    "name": "data.0.id.dataBody.information1.0.data.2.cost",
    "value": false
  },
  {
    "name": "data.0.id.dataBody.hobby.indoor",
    "value": false
  },
  {
    "name": "data.0.id.dataBody.hobby.outdoor",
    "value": true
  },
  {
    "name": "data.0.id.dataBody.petName",
    "value": "Tiger"
  },
  {
    "name": "data.0.id.details",
    "value": "detail"
  },
  {
    "name": "data.0.id.phone",
    "value": "contact"
  }
]

var output = Array();

function iterate(data, name, output)
{
    for(let key in data)
    {
        let value = data[key];

        if(value != null && (typeof(value) == "object" || typeof(value) == "array"))
        {
            iterate(value, name + "." + key, output);
        }
        else
        {
            output.push({name:name + "." + key, value:value});
        }
    }
}


iterate(data, "data", output);

console.log("Output", JSON.stringify(output, 0, 2));

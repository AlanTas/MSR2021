// Create keys for the properties of the objects. This uses the offset
// of the start of the property as its key.
let jsonify = distribution_bins.replace(/{/g, "[");
jsonify = jsonify.replace(/}/g, "]");

// Wrap +INF in quotes.
jsonify = jsonify.replace(/\+INF/g, `"+INF"`);

// Parse.
const distribution_data = JSON.parse(jsonify);

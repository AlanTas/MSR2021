.filter((frontMatter) => {
  // Get the front matter into a string, separated by spaces
  const concat = Object.values(frontMatter).join(" ").toLowerCase();

  // Look for a string in quotes, if not then just find a word
  const regex = /\"([\w\s\\\-]+)\"|([\w\\\-]+)/g;

  // Get all the queries
  const queries = [...searchValue.toLowerCase().matchAll(regex)].map((arr) => arr[1] || arr[2]);

  // Make sure that every query is satisfied
  return queries.every((q) => concat.includes(q));
});

.filter((frontMatter) => {
  // Get the front matter into a string, separated by spaces
  // The prepended and appended spaces are important for the regex later!
  const concat = ` ${Object.values(frontMatter).join(" ").toLowerCase()} `;

  // Look for a string in quotes, if not then just find a word
  const regex = /\"([\w\s\\\-]+)\"|([\w\\\-]+)/g;

  // Get all the queries
  const queries = [...searchValue.toLowerCase().matchAll(regex)].map((arr) => arr[1] || arr[2]);

  // Make sure that every query is satisfied
  // [\\s\\.?!_] and [\\s\\.?!_] check for a space or punctuation at the beginning and end of a word
  // so that something like "deter" isn't matching inside of "undetermined"
  return queries.every((q) => new RegExp(`[\\s\\.?!_]${q}[\\s\\.?!_]`).test(concat));
});

export default {
  computed: {
    filteredOffers() {
      const searchTerm = this.search.toLowerCase();
      return this.items.filter((offer) => {
        return offer.title.toLowerCase().match(searchTerm);
      });
    }
  }
}

const items = [
  { title: 'Foo bar' },
  { title: 'The Milk Is Delicious' },
  { title: 'Baz qux' },
  { title: 'I drink chocolate milk' },
]

const search = 'milk'
const searchTerm = search.toLowerCase()
const result = items.filter((offer) => {
  return offer.title.toLowerCase().match(searchTerm)
})

console.log(result)
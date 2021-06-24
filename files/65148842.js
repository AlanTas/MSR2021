class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
class Deck {
  static suits = ["S", "C", "D", "H"];
  static ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  constructor() {
    this.cards = this.getAllCards();
  }
  getAllCards() {
    var cards = [];

    for (var i = 0; i < Deck.suits.length; i++) {
      for (var j = 0; j < Deck.ranks.length; j++) {
        var card = new Card(Deck.suits[i], Deck.ranks[j]);
        cards.push(card);
      }
    }
    return cards;
  }
}
console.log(new Deck().cards);
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
class Deck {
  static suits = ["S", "C", "D", "H"];
  static ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  constructor() {
    this.cards = Deck.suits.flatMap(suit => Deck.ranks.map(rank => new Card(suit, rank)));
  }
}
console.log(new Deck().cards);
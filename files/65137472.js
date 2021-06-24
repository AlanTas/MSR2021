/* Function should compare the user's wishlist with the parks */
function getWishlistParksForUser(parks, users, userID) {
  return users[userID].wishlist.map(wishId => parks.find(p => p.id == wishId));
}

// The users objects (non-editable)
const users = {
  "karah.branch3": {
    visited: [2],
    wishlist: [1, 3],
  },
  "dwayne.m55": {
    visited: [2, 3],
    wishlist: [1, 2],
  },
};

// The parks array (non-editable)
const parks = [{
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    },
  },
  {
    id: 2,
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: {
      state: "Utah"
    },
  },
  {
    id: 3,
    name: "Zion",
    areaInSquareKm: 595.9,
    location: {
      state: "Utah"
    },
  },
];

console.log(getWishlistParksForUser(parks, users, "dwayne.m55"));
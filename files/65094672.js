function rollDieAsync() {
  return getPseudoRandomInt()
    .then(random => {
      var dieVal = (random % 6) + 1
      var reroll = random > 251
      if(reroll){
        return rollDieAsync()
      }else{
        return dieVal
      }
   })
}

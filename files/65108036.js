client.on('voiceStateUpdate', (newState, oldState) => {
 if (newState.channelID && !oldState.channelID) {
  console.log('Someone joined');
  // ...
 } else if (oldState.channelID && !newState.channelID) {
  console.log('Someone left');
  // ...
 } else {
  console.log('Neither of the two actions occured');
  // ...
 }
});

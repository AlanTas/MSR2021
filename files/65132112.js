const MY_IDENTIFIER = generateSomeIdentifierUniqueToThisClient();

publish({
   identifier:MY_IDENTIFIER,
   data: // the actual content of your message
});

handleIncoming = data => {
  // this was a message you sent
  if(data.identifier === MY_IDENTIFIER) return;

  // handle it
}


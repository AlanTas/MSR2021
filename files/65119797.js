execute(client, connection, message, args) {
message.channel.send(client.helpers.get('CreateEmptyEmbed').execute("Poll", client, false)
    .setTitle('test')
    .addField(`0`)
).then(embedMessage => {
    embedMessage.react(`✅`)
    embedMessage.react(`❎`)
    const filter = (reaction, user) => user.bot!; //Ignores bot reactions
    collector = embedMessage.createReactionCollector(filter,{time:15000)) //The time parameter (in milliseconds) specified for how much time the reactionCollector collects reactions
    collector.on('collect',(reaction,user)=>{ //When a reaction is collected
         const embed = embedMessage.embeds[0] // Get the embed that you want to edit.
         embed.fields[0] = {name : 'The name of the new field' , value : 'Value of new field'}
         await embedMessage.edit(embed)
         })
    collector.on('end',()=>{ //When the time we specified earlier is over
        //Do stuff
         })
    
})



function kick(msg, args, client){

  const name = args[0];

  console.log("Before: " + name);

  msg.reply(`${getMention(name, msg, client)} is being kicked`);
  const channel = msg.member.voice.channel;
  console.log("Voice channel: " + channel);
  msg.guild.member(getMention(name, msg, client)).voice.kick();
  //console.log(msg.guild.member(getMention(name, msg, client)).voice.kick);
}

function getMention(name, msg, client){

  if(!name) return;

  if(name.startsWith("<@") && name.endsWith(">")){
    name = name.slice(2,-1);

    if(name.startsWith("!")){
      name = name.slice(1);
    }
  }
  console.log("After: " + name)
  console.log(`@${name} has been kicked`);
  return client.users.cache.get(name);
};

module.exports = { kick }

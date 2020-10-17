/*TODO
  -move getMention() to index.js and pass as paramter
*/


function kick(msg, args, client, admins, blacklist){

  const name = args[0];
  const channel = msg.guild.member(getMention(name, msg, client)).voice.channel;




  if(msg.guild.member(getMention(name, msg, client)).voice.channel != null){

    console.log(`${msg.guild.member(getMention(name, msg, client)).user.username}\'s voice channel: ${channel.name}`);

    var i = 0;
    var execute = true;
    while(execute != false && i < admins.length){
        if(admins[i] == msg.guild.member(getMention(name, msg, client)) || blacklist[i] == msg.guild.member(getMention(name, msg, client))){
          execute = false;
        }
      i++;
    }
    i = 0;


    if(execute){
      msg.guild.member(getMention(name, msg, client)).voice.kick();
    }


  }else{
    console.log("Channel was null");
  }


  setTimeout(function temp(){
      const afterChannel = msg.guild.member(getMention(name, msg, client)).voice.channel;

      if(afterChannel === channel){
        msg.reply(` tried to kick ${getMention(name, msg, client)}`);
        console.log(`${msg.guild.member(getMention(name, msg, client)).user.username} has NOT been kicked\n\n`);
      }else{
        msg.reply(` has kicked ${getMention(name, msg, client)}`);
        console.log(`${msg.guild.member(getMention(name, msg, client)).user.username} has been kicked\n\n`);
      }

  }, 1000);//give the Discord API 1 second to re-evaluate @mentioned's voice channel (API doesn't update instantly)


}

function getMention(name, msg, client){

  if(!name) return;

  if(name.startsWith("<@") && name.endsWith(">")){
    name = name.slice(2,-1);

    if(name.startsWith("!")){
      name = name.slice(1);
    }
  }



  return client.users.cache.get(name);
}
module.exports = { kick }

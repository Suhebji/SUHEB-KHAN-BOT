const fs = require("fs");
module.exports.config = {
  name: "owner",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "PRINCE SILENT", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("OWNER") ||
     react.includes("Oner") || react.includes("Owner") || react.includes("owner") ||
react.includes("OWNER") ||
react.includes("Sir") ||     
react.includes("sir")) {
    var msg = {
        body: `${name} 🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒✬✿╭┳✪✪╤───────────➛➣ ★�*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ༄𒁍≛⃝𝐌𝐑.𝐒𝐔𝐇𝐄𝐁 𝐊𝐇𝐀𝐍🍀🍒💐)✪��★  ✬✿╭┳✪✪╤───────────➛➣🤩🌿✰✧✧✧✧✦🌸 FACEBOOK ID LINK :https://www.facebook.com/profile.php?id=100085068887359
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛  ✿`,attachment: fs.createReadStream(__dirname + `/noprefix/suhebk.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }

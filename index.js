////////////////////////////////////////////////////////
//             CREATED BY 𝕳𝖚𝖌𝖚𝖎𝖙𝖎𝖘#1234         
//          SUPPORT: discord.link/huguitis     
//           SOON I WILL UPDATE THIS BOT!       
////////////////////////////////////////////////////////


// FOR REPL.IT USERS: require('http').createServer((req, res) => res.end(`¡El bot esta online!`)).listen(3000);
const Aoijs = require("aoi.js") // Declaring package
const config = require('./config.json'); // Declaring the config.json file
const bot = new Aoijs.Bot({
  mobile: false, // mobile presence
  token: config.token, // You can also use process.env.token for keep secure ur token
  prefix: config.prefix // prefix
})

// Declaring the command handler
bot.loadCommands("./Comandos") 
bot.loadCommands("./Utils")

// Declaring callbacks
bot.onJoined()
bot.onMessage() 

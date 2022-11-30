const { Telegraf } = require("telegraf")

const uuid = require('uuid');
require('dotenv').config();
let factgenerator = require('./factsGenerator');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start( (ctx) => {
    let message = `Please use the /facts command to generate facts `;

    ctx.reply(message);
})


bot.command('facts', async (ctx) => {
    try {
        ctx.reply('Generating facts..., Please wait...');
        let imagePath = `./temp/${uuid()}.jpg`
        await factgenerator.generateimage(imagePath)
        await ctx.replyWithPhoto({source: imagePath})
        factgenerator.deleteImage(imagePath)

}catch (err) {
        console.log(err)
        ctx.reply("err sending image")
    
    }

})


bot.launch()
.then(console.log('bot launched successfully'));




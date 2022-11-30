const { Telegraf } = require('telegraf')
const { v4: uuidV4 } = require('uuid')
require('dotenv').config()
let factGenerator = require('./factsGenerator')
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start('start', (ctx) => {
    let message = `Please use the /facts command to generate facts `;

    ctx.reply(message);
})


bot.command('facts', async (ctx) => {
    try {
        ctx.reply('Generating facts..., Please wait...');
        let imagePath = `./temp/${uuidV4()}.jpg`
        await factGenerator.generateImage(imagePath)
        await ctx.replyWithPhoto({source: imagePath})
        factgenerator.deleteImage(imagePath)

}catch (err) {
        console.log(err)
        
    
    }

})


bot.launch()
.then(console.log('bot launched successfully'));




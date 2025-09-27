const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
require('dotenv').config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once('ready', () => {
    console.log(`Bot is ready ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    message.channel.send(`<@${message.author.id}>: ${message.content}`);
})

client.login(process.env.DISCORD_TOKEN)
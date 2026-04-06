require('dotenv').config();
const util = require('util');
const { exec } = require('child_process');

const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`✅ Bot ${client.user.tag} đã sẵn sàng!`);
});

client.on('messageCreate', async (message) => {
});

client.login(process.env.DISCORD_TOKEN);
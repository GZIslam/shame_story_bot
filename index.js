require('dotenv').config();
const bot_token = process.env.BOT_TOKEN;
const TelegramBot = require("node-telegram-bot-api");
const onMessage = require("./src/onMessage");
const commands = require("./src/commands");

const launchBot = () => {
    const bot = new TelegramBot(bot_token, { polling: true });
    bot.setMyCommands(commands);

    bot.on("message", async (msg) => {
        await onMessage(msg, bot);
    });

    // bot.on("callback_query", async (msg) => {
    //     await onCallbackQuery(msg);
    // });
}

launchBot();
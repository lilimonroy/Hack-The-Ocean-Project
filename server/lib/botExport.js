const TelegramBot = require("node-telegram-bot-api");

process.env["NTBA_FIX_319"] = 1;

// replace the value below with the Telegram token you receive from @BotFather
const token = "5392820293:AAGtsVgrylGk1OnmjV-gF4vcRxJVd5V8Ir4";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

module.exports = bot
const TelegramApi = require('node-telegram-bot-api')
const {TelegramError} = require("node-telegram-bot-api/lib/errors");
const token = "5386687425:AAFxG1RmSguxaC-sfakzTn3HG6Ma-MpiQAY"
const bot = new TelegramApi(token, {polling:true})


const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Информация о пользователе'},
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text == '/start') {
            await bot.sendMessage(chatId, `Добро пожаловать! (Ваня, Паша, приветствую!)`)
            return bot.sendSticker(chatId, `./123.webp`)
        }
        if (text == '/info')
        {
            return bot.sendMessage(chatId, `Кто у нас тут? \nИмя: ${msg.from.first_name} \nФамилия: ${msg.from.last_name}`)
        }
        return bot.sendMessage(chatId, `Я не понимаю данной команды!`)
    })
}

start()
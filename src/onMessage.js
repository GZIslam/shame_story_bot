const startMessage = "«Привет, спасибо за участие в стыдобайках! Прикрепляй файлы,которые нужны для раскрытия твоей истории ниже»"
const description = "После первого вечера мы задумались о том, что в нашей жизни бывают истории, за которые нам потом неловко и стыдно. Эти истории часто всплывают перед сном спустя многие годы. Ну было, согласитесь?\n\nМы, ведущие проекта, хотим помочь вас справиться с неловкими эпизодами жизни, добавить юмор и поддержку. На «Стыдобайках» вы можете рассказать свою историю нам и аудитории или оставить её в нашем боте.\n\nАвтор самой стыдной истории получит звание «Стыдобайкер» и 2 косаря🤪";
const date = "Мероприятие пройдет 02.09.2025 на Красной площади";

const group = -4779853344;

const admins = {
    860131994: 777,
    78174397: 333,
};

const onMessage = async (msg, bot) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const messageId = msg.message_id;

    if(chatId === group) return;
    // console.log({msg});
    if(text === "/start") {
        await bot.sendMessage(chatId, startMessage);
    } else if(text === "/date") {
        await bot.sendMessage(chatId, date);
    } else if(text === "/description") {
        await bot.sendMessage(chatId, description);
    } else if(text === "/id") {
        await bot.sendMessage(chatId, userId);
    } else {
        Object.keys(admins).forEach(async (admin) => {
            if(admin > 500) {
                await bot.forwardMessage(admin, chatId, messageId);
            }
        });
        await bot.forwardMessage(group, chatId, messageId);
    }
};

module.exports = onMessage
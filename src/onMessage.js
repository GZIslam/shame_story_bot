const startMessage = `Привет, спасибо за участие в стыдобайках! Прикрепляй файлы,которые нужны для раскрытия твоей истории ниже.\n\n«В этой истории вы должны быть участником, либо очевидцем. Мы, как ведущие проекта, поможем справиться с вашим эпизодом жизни, добавим юмор и поддержку. Автор самой стыдной истории получит звание "Стыдобайкер" и 2 косаря на помощь психолога.\n\nЧто ждем в вашей истории:\n1. Основные действия истории\n2. Место, где эта история произошла \n3. Условия, которые повлияли на ход вашей истории\n4. Участники\n5. Последствия , как на вас повлияло это чувство стыда\n\nЧем подробнее история, тем интереснее нам будет с ней работать. Факторы, которые неважно знать в истории — не упоминаем»`;
const description = "После первого вечера мы задумались о том, что в нашей жизни бывают истории, за которые нам потом неловко и стыдно. Эти истории часто всплывают перед сном спустя многие годы. Ну было, согласитесь?\n\nМы, ведущие проекта, хотим помочь вас справиться с неловкими эпизодами жизни, добавить юмор и поддержку. На «Стыдобайках» вы можете рассказать свою историю нам и аудитории или оставить её в нашем боте.\n\nАвтор самой стыдной истории получит звание «Стыдобайкер» и 2 косаря🤪";
const date = "Мероприятие пройдет 2.02.2025 в баре «Мистер Лось» (второе заведение) начало в 19:00, точный адрес 56.857141, 35.912561";
const answer = "Спасибо! ❤️";
const group = -1002278043638;

// const admins = {
//     860131994: 777,
//     78174397: 333,
// };

const onMessage = async (msg, bot) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const migrateFromChatId = msg.migrate_from_chat_id;
    const userId = msg.from.id;
    const messageId = msg.message_id;

    // console.log({ chatId, migrateFromChatId, msg });
    if (chatId === group || migrateFromChatId === group || chatId === -1002278043638) return;
    if (text === "/start") {
        await bot.sendMessage(chatId, startMessage);
    } else if (text === "/date") {
        await bot.sendPhoto(chatId, "./src/assets/images/where.jpg", { caption: date });
    } else if (text === "/description") {
        await bot.sendMessage(chatId, description);
    } else if (text === "/id") {
        await bot.sendMessage(chatId, userId);
    } else {
        await bot.forwardMessage(group, chatId, messageId);
        await bot.sendMessage(chatId, answer);
    }
};

module.exports = onMessage;
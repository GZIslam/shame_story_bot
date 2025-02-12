const startMessage = `Привет, спасибо за интерес к «Стыдобайкам»! Будем рады тебе и твоей стыдной истории😈\n\nЧтобы поделиться стыдобайкой тебе нужно быть её участником, либо очевидцем. Антон и Кирилл, как ведущие проекта, помогут справиться с твоим эпизодом жизни, добавят юмор и поддержку.\n\nНа десерт: автор самой стыдной истории получит звание «Стыдобайкера» и 2 косаря на помощь психолога🤪\n\nЧто ждем в твоей истории:\n1. Основные действия\n2. Место, где эта история произошла \n3. Условия, которые повлияли на ход вашей истории\n4. Участники\n5. Последствия , как на вас повлияло это чувство стыда\n\nЧем подробнее история, тем интереснее нам будет с ней работать. Факторы, которые неважно знать в истории — не упоминаем🫂\n\nВ нашем боте вы можете прикрепить любые материалы, которые лучше раскроют вашу историю: скриншот, голосовое сообщение, картинку или видео.`;
const description = `«Стыдобайки» — проект двух ведущих Антона Соколова и Кирилла Фаюстова про принятие неловких ситуаций и взгляд на них через призму юмора.\n\nПосле первого юмористического вечера Антон и Кирилл задумались о том, что в жизни бывают истории, за которые нам потом неловко и стыдно. Эти истории часто всплывают перед сном спустя многие годы. Ну было, согласитесь?)\n\nАнтон и Кирилл хотят помочь людям справиться с неловкими эпизодами жизни, добавить юмор и поддержку. На «Стыдобайках» каждый может поделиться своей стыдной истории и получить отклики от аудитории.\n\nАвтор самой стыдной истории получает звание «Стыдобайкер» и 2 косаря🤪`;
const date = `Вечер пройдет 16.02 (воскресенье) в баре «Пролетарка»\n📌просп. Калинина, 21А\n\nСбор гостей в 18:30\nВход 200₽`;
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
        await bot.sendPhoto(chatId, "./src/assets/images/where-2.jpg", { caption: date });
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
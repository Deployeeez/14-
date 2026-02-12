import asyncio
import logging
import os
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton

# Включаем логирование, чтобы видеть ошибки в консоли
logging.basicConfig(level=logging.INFO)

# ТВОИ ДАННЫЕ

# Бот ищет токен в переменных окружения сервера
bot = Bot(token=os.getenv("BOT_TOKEN")) # Сервер сам подставит токен отсюда
# Ссылка на твой GitHub Pages (ОБЯЗАТЕЛЬНО HTTPS)
WEBAPP_URL = "https://github.com/Deployeeez/14-.git" 

# Инициализация бота
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

# Обработчик команды /start
@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    markup = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="❤️ Открыть наш мир", web_app=WebAppInfo(url=WEBAPP_URL))]
    ])
    
    await message.answer(
        "Привет, любимая! ❤️\n\n"
        "Я подготовил для тебя кое-что особенное к 14 февраля.\n"
        "Нажми кнопку ниже, чтобы увидеть.",
        reply_markup=markup
    )

# Запуск процесса поллинга (постоянной проверки сообщений)
async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":

    asyncio.run(main())

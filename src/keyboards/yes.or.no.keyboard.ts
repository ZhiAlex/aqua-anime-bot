import { Markup } from "telegraf";

export const yesOrNoKeyboard = Markup.inlineKeyboard([
	Markup.button.callback('yes', 'yes'),
	Markup.button.callback('no', 'no')
])

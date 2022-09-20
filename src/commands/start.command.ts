import { Context } from 'telegraf'
import { mainKeyboard } from '../keyboards/main.keyboard'
import { MyContext } from '../types/context';

export const start = (ctx: MyContext) => {
	ctx.reply('hi', mainKeyboard)
	console.log(ctx.from);
}

import { Scenes } from 'telegraf'
import LocalSession from 'telegraf-session-local'
import { bot } from './bot'
import "./commands"
import { addAnimeScene } from './scenes/add.anime.scene'
import { MyContext } from './types/context'

const { enter } = Scenes.Stage

const stage = new Scenes.Stage<MyContext>([addAnimeScene])

bot.use(new LocalSession({database: 'session.json'}).middleware())
bot.use(stage.middleware())
bot.use((ctx, next) => {
	ctx.session.chatId
	ctx.session.inlineMessageId
	ctx.session.messageId
	ctx.scene.session.myProps
	next()
})
bot.hears('add anime', (ctx) => ctx.scene.enter('ADD_ANIME_SCENE'))
bot.hears('delete anime', ctx => {
	ctx.reply('deleted')
})

bot.launch()

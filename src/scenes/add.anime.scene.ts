import { Scenes } from "telegraf";
import { SceneContext } from "telegraf/typings/scenes";
import { emptyKeyboard } from "../keyboards/empty.keyboard";
import { yesOrNoKeyboard } from '../keyboards/yes.or.no.keyboard'
import { MyContext } from "../types/context";

const { leave, enter } = Scenes.Stage

export const addAnimeScene = new Scenes.BaseScene<MyContext>('ADD_ANIME_SCENE')
addAnimeScene.enter(ctx => ctx.reply('enter url', emptyKeyboard))
addAnimeScene.on('message', ctx => {
	const message = ctx.reply('Its your anime?\n *anime_name*', yesOrNoKeyboard)
	// ctx.session.chatId = message.chat.id
	// ctx.session.messageId = message.message_id
	message.then(messageData => {
		ctx.session.chatId = messageData.chat.id
		ctx.session.messageId = messageData.message_id
	})
})
addAnimeScene.action('yes', ctx => {
	ctx.answerCbQuery()
	ctx.telegram.editMessageText(ctx.session.chatId, ctx.session.messageId, undefined, '1')
	leave<SceneContext>()
})
addAnimeScene.action('no', ctx => {
	ctx.answerCbQuery()
	ctx.telegram.editMessageText(ctx.session.chatId, ctx.session.messageId, undefined, '2')
	leave<SceneContext>()
})
addAnimeScene.leave(ctx => ctx.reply('bye'))

import { Context, Scenes } from "telegraf";

interface MySessionScene extends Scenes.SceneSessionData {
	myProps: string
}

interface MySession extends Scenes.SceneSession<MySessionScene> {
	chatId: number,
	messageId: number
	inlineMessageId: string | undefined
}

export interface MyContext extends Context {
	props: string,
	session: MySession,
	scene: Scenes.SceneContextScene<MyContext, MySessionScene>
}
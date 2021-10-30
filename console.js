const Discord = require('discord.js');
const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Client();
bot.on('ready', () => {
    console.log(`BOT READY`)
});


const mony = { // unused
    files: ['https://cdn.discordapp.com/attachments/600730403103309845/720471916842057739/alien-holding-dollar-sign-illustration-vector-on-white-backgro-209842786.png']
}

// Console Chat, revised by Angel Bot, Added on by Cheese Curd (again) \\

let channelID = "841194210812362802"

// basically a shitty discord \\

bot.on('message', msg => {
	if (msg.channel.id == channelID) {
		if (msg.author == '841301874749603840') {
		
		} else {
			console.log(msg.author.username + ': ' + msg.content)
		}
	}
});
bot.on('messageUpdate', (oldMessage, newMessage) => {
	var msg = newMessage
	if (msg.channel.id == channelID) {
		console.log(msg.author.username + ': ' + msg.content + ' (edited)')
	}
})

bot.on('messageDelete', (messageDelete) => {
	var msg = messageDelete
	if (msg.channel.id == channelID) {
		console.log(msg.author.username + ': ' + msg.content + ' (fucking deleted oh god what did they do)')
	}
})

let y = process.openStdin()
y.addListener("data", res => {
	let x = res.toString().trim()
	switch(true) {
		case x.startsWith("/embed "):
			let text = x.substring(7);
			const cnslembed = new Discord.MessageEmbed()
				.setTitle(text);
			bot.channels.fetch(channelID).then(ch => ch.send(cnslembed));
		break;
		case x.startsWith("/help"):
			console.log(`HELP`)
			console.log(`/channel : Sets the channel via channel ID`)
			console.log(`/embed : Sends an embed version of text, it's just text but in an embed lol`)
			console.log(`/help : Shows all commands with a description (PS: you are here =^v^=)`)
			console.log(`/version : Shows the version number of this console`)
		break;
		case x.startsWith("/channel "):
			channelID = x.substring(9);
			console.log(`Set ChannelID to <#${channelID}>`)
		break;
		case x.startsWith("/version"):
			console.log(`VERSION`)
			console.log(`Date Modified: 10/23/21`)
			console.log(`Version Number: 1.3`)
			console.log(`Bot Name: George ツ`)
		break;
		case x == "":
			console.log(`[SYSTEM] sending '_ _' cause you can't send an empty text you dumb fuck`)
			bot.channels.fetch(channelID).then(ch => ch.send("_ _"));
		default:
			bot.channels.fetch(channelID).then(ch => ch.send(x));
		break;
    }
})

bot.login("")
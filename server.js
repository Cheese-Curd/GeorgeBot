const Discord = require('discord.js');
const {
	Client,
	Attachment
} = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const insults = config.insults;
let activities_list = [
	"you  (probably)",
	"Kel",
]
let t = 5

//const users = Guild.members.cache.map(member => member.id); // Getting the members and mapping them by ID.

bot.on('ready', () => {
	console.log(`BOT STARTED | UPDATED`)
    bot.channels.fetch(`841297340509585459`).then(ch => ch.send(`I got updated fuck-wits`));
	//bot.channels.fetch(`778657903052849172`).then(ch => ch.send(`Heya! I have fully booted and ready to go!`));
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list. \\
		bot.user.setActivity(activities_list[index], {
			type: 'WATCHING'
		})
        console.log("change shet")// sets bot's activities to one of the phrases in the arraylist. \\
	}, 10000); // Runs this every 10 seconds. \\
});

// Insult Sending \\

bot.on('message', msg => {
    if (msg.content == `g.insultme`) {
		//var ping = msg.mentions.users.first();
		var channel = msg.channel.id;
		const mbrs = msg.author
		var choseninsult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
		bot.channels.fetch(channel).then(ch => ch.send(`${msg.author}, ${choseninsult}`));
		console.log(`Insulted ${msg.author.username} with the insult ${choseninsult}`);
    // } else if (msg.content == `g.startinsults`) {
    //     const channel = msg.channel.id;
	// 	//console.log(channel)
	// 	//console.log(members)
	// 	bot.channels.fetch(channel).then(ch => ch.send(`ayo I'm here`));
	// 	//you don't know how fucking LONG it took for me to find that (FUCKING THANG YOU OP: https://stackoverflow.com/questions/52138159/get-random-discord-user)
    //     let randomPer = msg.guild.members.cache.random().user;
	// 	var choseninsult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
	// 	console.log(`Insulted ${randomPer.username} with the insult ${choseninsult}`);
	// 	bot.channels.fetch(channel).then(ch => ch.send(`${randomPer}, ${choseninsult}`));
	// 	console.log("Started Insults in the channel " + channel)
	// 	t = 5
	// 	while (t != 1) {
	// 		insult(channel)
	// 	}
	// 	if (t == 1) {
	// 		bot.channels.fetch(channel).then(ch => ch.send(`Uh oh! looks like your free trial of \`[INSULT_STARTS]\` has expired! Please redo it :D`));
	// 	}
    }
});

bot.on('message', msg => {
	var a = Math.floor(Math.random() * 100)
	if (msg.channel.name == 'vent') {
		// pants
	} else {
		if (a == 30) {
			var choseninsult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
			msg.channel.send(`${msg.author}, ${choseninsult}`);
			console.log(`Insulted ${msg.author.username} with the insult ${choseninsult}`);
		} else if (a == 100) {
			var choseninsult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
			msg.channel.send(`${msg.author}, ${choseninsult}`);
			console.log(`Insulted ${msg.author.username} with the insult ${choseninsult}`);
		} else {
			console.log(a)
		}
	}
	
});

function insult(id) {
	t += 1
	var choseninsult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
	console.log(`Insulted ${randomPer.username} with the insult ${choseninsult}`);
	bot.channels.fetch(channel).then(ch => ch.send(`${randomPer}, ${choseninsult}`));
}

// End \\

bot.login("")
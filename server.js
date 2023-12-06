const Eris = require("eris");
const fs = require("fs")
const config = require("./config.json");
const insults = config.insults;
let activities_list = [
	"you  (probably)",
	"Kel",
]
let t = 5
const token = fs.readFileSync('token.txt').toString().trim();
const { log } = require("./util.js");

// lol, thanks @type. I have suggestions now
/**
 * @type {Eris.Client}
 */
const bot = new Eris(token, {
    intents: [
        "all" // yippee
    ]
});

bot.on('ready', () => {
	log(1, "Bot started.")
    bot.createMessage('841297340509585459', `I got updated fuck-wits`);
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list. \\
		bot.editStatus("online", [ { name: activities_list[index], type: 3 } ])
		log(4, "Changing status...")
	}, 10000); // Runs this every 10 seconds. \\
});

// Insult Sending \\

bot.on('messageCreate', msg => {
    if (msg.content == `g.insultme`)
		bot.createMessage(msg.channel.id, `${msg.author.mention}, ${insult()}`);
});

bot.on('messageCreate', msg => {
	var a = Math.floor(Math.random() * 100)
	if (!msg.channel.name == 'vent')
		if (a == 30 || a == 100)
			bot.send(`${msg.author}, ${insult()}`);
		else
			log(4, `Random number per message sent: ${a}`)
});

function insult()
{
	t += 1
	var choseninsult = insults[Math.floor(Math.random() * (insults.length - 1)) + 1]
	log(1, `Used insult: ${choseninsult}`);
	return choseninsult
}

// End \\

bot.connect();
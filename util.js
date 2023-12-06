const config = require("./config.json");

function log(type = 0, data)
{
    if (type == 1) // info
        console.log(`${logDate()} | [INFO] ${data}`);
    else if (type == 2) // warn
        console.warn(`${logDate()} | [WARNING] ${data}`);
    else if (type == 3) // error
        console.error(`${logDate()} | [! ERROR !] ${data}`);
    else if (type == 4) // debug
		if (config.debug == true)
        	console.log(`${logDate()} | [DEBUG] ${data}`);
		else
			return 0;
    else
	{
		log(2, `UNKNOWN LOG TYPE ${type}, DEFAULTING TO LOG TYPE 1`);
        log(1, data);
	}
}

function logDate() // god DAMN
{
    const date = new Date();
    return `${date.toLocaleDateString(undefined, {month:"2-digit", day:"2-digit", year:"2-digit"})} ${date.toLocaleTimeString(undefined, {hour12:false, hour:"2-digit", minute:"2-digit"})}`
}

exports.log = log	// Logging output, gives me a bit more info for if it's an error, warning, or just general information
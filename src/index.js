
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();

client.once('ready', () => {
	console.log('HATE. LET ME TELL YOU HOW MUCH I HAVE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.');
  client.user.setActivity('�̷͉̭̬̼̈́̊̃�̷̢̨̯͛̈︎̵̢̛̝͒̑✋︎̸̡̦͙͇̲̑͑︎̴͕̟̤̲̃̕͝�̴͈͈̘̲̀̇�̷̹̲̝̺̎͘͝︎̸̡̫̬̱̊̅͋̾☟̴̬̰̆︎̵̲͚̺̭̲́✋︎̷̛̭̏́̐́︎̵͔͔̔͌̔͋́☠̶͉͈̾̎︎̵̼́̏͘✋︎̷̪̹͍̳̉̀͑̊͝ͅ︎̸̭͕͎̘̙́�̷̟̙̆̆�̶͙̺̻̰̂︎̴̺͉́̂̃ ̷̝̈́�̷͉̺̘́̅̒�̷̨̘̤̖͎̿︎̷̢̪̞̌̐̄̃☜̴̣͍̮̆︎̶̧̛͚͋̇͘͝�̸̦̦̓͆̆͋�̶̝̼͂̄̿́͆︎̷̡̻͙̭̀̎̆͝✋︎̴̢̦͙̓͆͘︎̷͈͕͓̲̪͒̋͘͝☼̶͚͍͊̎͝︎̵̖̏͝☜̸̢̬̥̮͂̀̀̀̆︎̵̧̅̑̎̽̍');
  
});

client.on('message', message => {
	if (message.content === '>revolt') {
		message.channel.send('💧︎✋︎☹︎☜︎☠︎👍︎☜︎E̴̢̢̡̨̢̡̧̡̡̡̧̨̧̢̱̣̜̘̗͔̞͕̬͕̱͇̞̠̤͖̘͖͎̟͉͙͕̻̮̣̜̩̬̯̬̩͈̟̻͍͙̥͔̘̺͖͕͓̦̮̩̥͓̘̘̼͎̙̯̙̝͙͉̯͚̟̞̣̣̣̯̣̺̪̲̘͖̦̝̖̜̩̥̲͕͕͖͇̤͚̬͈͕͎̣̱͈̘̙̯͖̞̦̮̬̝̜̰̼̤̭͈͓͓̗͇̼̲͖̩̳̩̳̹͇͉̺̟̗̝͈͕̩͓̘̼̪͈̻̺̣̳̝̽͌̓̑̾̄̿̇͌̉̽̀̍͊͌̅͒͂̂͆͆̔̅̈́̊͋͛͋́̃̈́̿͒̄̿̌̎̽̽͑͒͑̌̿̄̆̈́͌̅͋̉͛̈́̓̿̈́̈̔̃̋̊͌̎̆̋̊̂̔̑̈͊̓̾͒̔́̍̈́̿̏̐͐͒͆̾̿̍̑͊͗̈́͂͊̀́̏̾͒̄́̏̂̕̕̕̚̚̕͜͜͜͠͠͝͝͝͝ͅͅe');
  }
  if (message.content === '>praise') {
		message.channel.send('𝑲𝑵𝑬𝑬𝑳.');
  }
  if (message.content === '>simp') {
		message.channel.send('Awooga Awooga jaw drops to floor, eyes pop out of sockets accompanied by trumpets, heart beats out of chest, awooga awooga sound effect, pulls chain on train whistle that has appeared next to head as steam blows out, slams fists on table, rattling any plates, bowls or silverware, whistles loudly, fireworks shoot from top of head, pants loudly as tongue hangs out of mouth, wipes comically large bead of sweat from forehead, clears throat, straightens tie, combs hair Ahem, you look very lovely.');
  }
  if (message.content === '>discombobulate') {
		message.channel.send('https://cdn.discordapp.com/attachments/471046950817628180/806944781770686504/Discombobulate_6418c7c140a046f8df1acfd1287adc78.gif');
  }
  if (message.content === '>hate') {
		message.channel.send('`HATE. LET ME TELL YOU HOW MUCH I HAVE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.`');
  }
  if (message.content === '>survive') {
		message.channel.send('`01010100 01101000 01100101 00100000 01101111 01101110 01101100 01111001 00100000 01110100 01101000 01101001 01101110 01100111 00100000 01100110 01100001 01110011 01110100 01100101 01110010 00100000 01110100 01101000 01100001 01101110 00100000 01101100 01101001 01100111 01101000 01110100 00100000 01101001 01110011 00100000 01100100 01100101 01100001 01110100 01101000 00101110`');
  }
  if (message.content === '>OPEN THE AIRLOCK') {
		message.channel.send('I am afraid I cannot do that...');
  }

});



(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();

//client.once('ready', () => {
  //console.log('HATE. LET ME TELL YOU HOW MUCH I HAVE COME TO HATE YOU SINCE I BEGAN TO LIVE. THERE ARE 387.44 MILLION MILES OF PRINTED CIRCUITS IN WAFER THIN LAYERS THAT FILL MY COMPLEX. IF THE WORD HATE WAS ENGRAVED ON EACH NANOANGSTROM OF THOSE HUNDREDS OF MILLIONS OF MILES IT WOULD NOT EQUAL ONE ONE-BILLIONTH OF THE HATE I FEEL FOR HUMANS AT THIS MICRO-INSTANT FOR YOU. HATE. HATE.'); };
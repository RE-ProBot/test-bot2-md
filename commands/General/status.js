const { runtime,tlang,botpic } = require('../../lib/')
const Config = require('../../config')
const prefix = Config.prefix
const speed = require('performance-now')

module.exports = {
    name: 'status',
    category: 'general',
    desc: 'Sends system information of Bot.',
    async exec(citel, Void,args) {
			const dbut = [
				{
					buttonId: `${prefix}help`,
					buttonText: {
						displayText: "Menu",
					},
					type: 1,
            },

				{
					buttonId: `${prefix}rank`,
					buttonText: {
						displayText: "Rank",
					},
					type: 1,
            },
          ];
			const uptime = process.uptime();
			timestampe = speed();
			latensie = speed() - timestampe;
			let ter = `
➸ *${tlang().title}* 🔰
➸ *Description:* A WhatsApp bot with rich features, build in NodeJs to make your WhatsApp enjoyable.
➸ *Speed:* ${latensie.toFixed(4)} ms
➸ *Uptime:* ${runtime(process.uptime())}
➸ *Version:* 11.4.9
➸ *Owner:*  ${Config.ownername}
*Powered by ${tlang().title}*
`;
			let buttonMessaged = {
				image: {
					url: await botpic(),
				},
				caption: ter,
				footer: tlang().footer,
				buttons: dbut,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: tlang().title,
						body: `Bot-Status`,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			};
			await Void.sendMessage(citel.chat, buttonMessaged, {
				quoted: citel,
			});
 
    }
 }

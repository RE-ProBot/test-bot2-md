
const { tlang,botpic } = require('../../lib')
module.exports = {
    name: 'repo',
    category: 'general',
    alias: ["script", "git", "sc"],
    desc: 'Sends userbot github repo link.',
    async exec(citel, Void) {
        
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: `Hey ${citel.pushName}\n*This is Luna*\n\n*Web:* https://luna-scripts.com/Start\n\n*Whatsapp Hub:* https://hq.luna-scripts.com`,
            footer: ` ` + tlang().footer,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "Secktor-Repo",
                body: "Easy to Use",
                thumbnail: log0,
                mediaType: 2,
                mediaUrl: `https://luna-scripts.com`,
                sourceUrl: `https://skybot.link`,
              },
            },
          };
          await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
          });
 
    }
 }
      

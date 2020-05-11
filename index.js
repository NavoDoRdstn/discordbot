const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NzA5NDYwOTU2MzIwODkwOTEy.XrmgbA.aC2RT4cU-jXG290y16N6pVw9smw';

bot.on('ready', () =>{
    console.log('bot online');
})

bot.on('message', msg=>{

    if(msg.author.bot) return;

    if(msg.content.includes('CBT')){
        dothing()
    }

    if(msg.content.includes('CBt')){
        dothing()
    }
    
    if(msg.content.includes('CbT')){
        dothing()
    }
    
    if(msg.content.includes('Cbt')){
        dothing()
    }
    
    if(msg.content.includes('cBT')){
        dothing()
    }
    
    if(msg.content.includes('cBt')){
        dothing()
    }
    
    if(msg.content.includes('cbT')){
        dothing()
    }
    
    if(msg.content.includes('cbt')){
        dothing()
    }

    function dothing(){
        msg.channel.send('Cock and ball torture (CBT), penis torture or dick torture is a sexual activity involving application of pain or constriction to the penis or testicles. This may involve directly painful activities, such as genital piercing, wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation, kneeing or kicking. The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.');
    
    }
})



bot.login(token);
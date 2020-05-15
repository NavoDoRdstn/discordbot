const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzA5NDYwOTU2MzIwODkwOTEy.XrmgbA.aC2RT4cU-jXG290y16N6pVw9smw';

bot.on('ready', () =>{
    console.log('bot online');
})

bot.on('message', msg=>{

    var e = 0

    if(msg.author.bot) return;

     

    if(msg.content.includes('CBT')){
        e = 1
    }

    if(msg.content.includes('CBt')){
        e = 1
    }
    
    if(msg.content.includes('CbT')){
        e = 1
    }
    
    if(msg.content.includes('Cbt')){
        e = 1
    }
    
    if(msg.content.includes('cBT')){
        e = 1
    }
    
    if(msg.content.includes('cBt')){
        e = 1
    }
    
    if(msg.content.includes('cbT')){
        e = 1
    }
    
    if(msg.content.includes('cbt')){
        e = 1
    }

    if(msg.content.includes('ball torture')){
        e = 1
    }
    
    if(msg.content.includes('Ball Torture')){
        e = 1
    }

    if(msg.content.includes('BALL TORTURE')){
        e = 1
    }

    if(e == 1){
        msg.channel.send('Cock and ball torture (CBT), penis torture or dick torture is a sexual activity involving application of pain or constriction to the penis or testicles. This may involve directly painful activities, such as genital piercing, wax play, genital spanking, squeezing, ball-busting, genital flogging, urethral play, tickle torture, erotic electrostimulation, kneeing or kicking. The recipient of such activities may receive direct physical pleasure via masochism, or emotional pleasure through erotic humiliation, or knowledge that the play is pleasing to a sadistic dominant. Many of these practices carry significant health risks.');
    
    }
})



bot.login(token);
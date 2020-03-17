module.exports = {
    name: 'role',
    description: 'Gives the role to the user',
    //args: true,
    usage: '<@user> <role>',
    execute(message, args){
        let roleObj = message.guild.roles.find(role => role.name === args[1]);
        let member = message.mentions.members.first();
        let senderRole = message.member.roles.toString();
        console.log(senderRole);

        if(!args[0]){
            return message.reply(`You have the role(s) ${senderRole}!`);
        }
        else{
            member.addRole(roleObj).catch(console.error);
            console.log(`${message.author.username} gave ${args[1]} role to ${args[0]}`);
            message.channel.send(`Gave ${args[0]} the ${args[1]} role!`);
        }
    }
}
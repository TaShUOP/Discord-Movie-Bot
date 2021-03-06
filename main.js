const Discord = require('discord.js')

const fs = require('fs')

const client = new Discord.Client()

const data = fs.readFileSync('token.txt', 'utf8')

const prefix = '-'

client.commands = new Discord.Collection()

const commandFiles = fs
  .readdirSync('./commands/')
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)

  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('bot ready!')
})

client.on('message', (message) => {
  message.member.roles.cache.has
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args)
  } else if (command === 'rqst') {
    client.commands.get('rqst').execute(message, args)
  } else if (command === 'movie') {
    client.commands.get('movie').execute(message, args)
  } else if (command === 'sug') {
    client.commands.get('sug').execute(message, args)
  }
})
client.login(data)

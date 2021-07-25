const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()

const data = fs.readFileSync('token.txt', 'utf8')

client.once('ready', () => {
  console.log('bot ready!')
})

client.login(data)

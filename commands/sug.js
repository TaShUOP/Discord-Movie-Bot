module.exports = {
  name: 'sug',
  description: 'See the suggestion list',
  execute(message, args) {
    if (message.member.roles.cache.has('868846077791576105')) {
      message.channel.send('sug')
    } else {
      message.channel.send("You don't have the right permissions.")
    }
  },
}

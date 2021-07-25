module.exports = {
  name: 'movie',
  description: 'Suggest a Movie',
  execute(message, args) {
    message.channel.send('movie')
  },
}

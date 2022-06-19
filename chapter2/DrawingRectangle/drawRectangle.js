function main() {
  var canvas = document.getElementById('example')
  var ctx = canvas.getContext('2d')

  if (!canvas) {
    console.log("failed to retrieve the <canvas> element")
  }

  ctx.fillStyle = 'rgba(0,255,255,1)'
  ctx.fillRect(120, 10, 150, 150)
}
main()

function main() {
  var canvas = document.getElementById('webgl')
  var gl = getWebGLContext(canvas)

  if (!gl) {
    console.log("failed to get rendering context for WebGL")
  }
  console.log("rendering context for WebGL has been loaded")

  gl.clearColor(0.5, 0.2, 0.2, 0.8)

  gl.clear(gl.COLOR_BUFFER_BIT)
}

main()

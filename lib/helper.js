function initGL() {
  let canvas = document.getElementById('webgl')
  let gl = getWebGLContext(canvas)


  if (!gl) {
    console.log("failed to get rendering context for WebGL ..")
  }

  console.log("%c Rendering context for WebGL has been loaded!!", "color:black;background-color:skyblue", "")

  let VSHADER_SOURCE = document.getElementById('vShader').innerText
  let FSHADER_SOURCE = document.getElementById('fShader').innerText

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to init shaders')
    return;
  }

  // gl.clear(gl.COLOR_BUFFER_BIT);
  // 渲染器renderer 重新设置 背景色
  // gl.clearColor(1.0, 1.0, 0.0, 1.0)
  // 视点
  return gl;
}

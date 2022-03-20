// 顶点着色器
var VSHADER_SOURCE = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
  }
`;
// 片元着色器
var FSHADER_SOURCE = `
  void main () {
     gl_FragColor = vec4(1.0, 0.0, 0.0 , 1.0);    
  }
`

function main() {
  var canvas = document.getElementById('webgl')
  var gl = getWebGLContext(canvas)

  if (!gl) {
    console.log("failed to get rendering context for WebGL")
  }

  console.log("rendering context for WebGL has been loaded")

  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to init shaders')
    return;
  }

  gl.clearColor(0.5, 0.2, 0.2, 0.8)

  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.drawArrays(gl.points, 0, 1)
}

main()

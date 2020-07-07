
//通用接口地址设置
var URL_T="http://172.16.6.16:8080/music/server";
var URL_N="http://172.16.6.16:80";
// var URL_T="http://172.20.10.2:8080/music/server";
// var URL_N="http://172.20.10.2:80";
// var URL_T="http://39.107.97.173:8080/music/server";
// var URL_N="http://39.107.97.173:80";
// var URL_T="http://192.168.0.102:8080/music/server";
// var URL_N="http://192.168.0.102:80";
function getURL_T(){
  return URL_T;
}
function getURL_N(){
  return URL_N;
}
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo)
{
//shijianchuo是整数，否则要parseInt转换
var time = new Date(shijianchuo);
var y = time.getFullYear();
var m = time.getMonth()+1;
var d = time.getDate();
var h = time.getHours();
var mm = time.getMinutes();
var s = time.getSeconds();
return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
}

// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   var width = img.width;
//   var height = img.height;
//   // calculate the width and height, constraining the proportions
//   if(width > height) {
//     if(width > 100) {
//       height = Math.round(height *= 100 / width);
//       width = 100;
//     }
//   } else {
//     if(height > 100) {
//       width = Math.round(width *= 100 / height);
//       height = 100;
//     }
//   }
//   canvas.width = width; /*设置新的图片的宽度*/
//   canvas.height = height; /*设置新的图片的长度*/
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0, width, height); /*绘图*/
//   var dataURL = canvas.toDataURL("image/png", 0.8);
//   return dataURL.replace("data:image/png;base64,", "");
// }
function getBase64Image(imgurl,width,height) {
  var image = new Image();
  image.src = imgurl;
  var canvas = document.createElement("canvas");
     canvas.width = width ? width : image.width;
     canvas.height = height ? height : image.height;
     var ctx = canvas.getContext("2d");
     ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
     var dataURL = canvas.toDataURL();
     return dataURL;
}

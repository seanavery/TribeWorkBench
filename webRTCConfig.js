console.log("hello from browser config file")

// make code compatible acrosse chrome, fireFox, opera

var webrtc_capbale = true;
var rtc_peer_connection = null;
var rtc_session_description = null;
var get_user_media = null;
var connect_stream_to_src = null;
var stun_server = "stun.1.google.com:19302";

if(navigator.getUserMedia) {
  rtc_peer_connection = RTCPeerConnection;
  rtc_session_description = RTCSessionDescription;
  get_user_media = window.getUserMedia.bind(navigator);
  connect_stream_to_src = function(media_stream, media_element) {
    media_element.srcObject = media_stream;
    media_element.play();
  };
  alert("defualt browser is supported");
}
else if(navigator.mozGetUserMedia) {
  rtc_peer_connection = mozRTCPeerConnection;
  rtc_session_description = mozRTCSessionDescription;
  get_user_media = window.mozGetUserMedia.bind(navigator);
  connect_stream_to_src = function(media_stream, media_element) {
    media_element.mozSrcObject = media_stream;
    media_element.play();
  };
  alert("firefox");
}
else if(navigator.webkitGetUserMedia) {
  rtc_peer_connection = webkitRTCPeerConnection;
  rtc_session_description = RTCSessionDescription;
  get_user_media = navigator.webkitGetUserMedia.bind(navigator);
  connect_stream_to_src = function(media_stream, media_element) {
    media_element.src = webkitURL.createObjectURL(media_stream);
  };
  alert("broweser has webkit(chrome)");
}
else {
  webrtc_capable = false;
  alert("browser is not compatible");
}
console.log(navigator);

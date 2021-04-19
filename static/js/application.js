var insecureWebSocket = new WebSocket("ws://echo.wss-websocket.net");
var secureWebSocket = new WebSocket("wss://echo.wss-websocket.net");

secureWebSocket.onmessage = function(message) {
  $("#log-text").append("<div class='panel panel-default'><div class='panel-heading'>" + $('<span/>').text("🙈🔐 " + message.data).html() + "</div></div>");
  $("#log-text").stop().animate({
    scrollTop: $('#log-text')[0].scrollHeight
  }, 800);
};

insecureWebSocket.onmessage = function(message) {
  $("#log-text").append("<div class='panel panel-default'><div class='panel-heading'>" + $('<span/>').text("🙊🔓 " + message.data).html() + "</div></div>");
  $("#log-text").stop().animate({
    scrollTop: $('#log-text')[0].scrollHeight
  }, 800);
};

$("#input-form").on("submit", function(event) {
  event.preventDefault();
  var text = $("#input-text")[0].value;
  if ($('#input-secure')[0].checked) {
    secureWebSocket.send(text);
  } else {
    insecureWebSocket.send(text);
  }
  $("#input-text")[0].value = "";
});

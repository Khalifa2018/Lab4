function setCookie(key, value, expirydate) {
  if (expirydate) {
    document.cookie = key + "=" + value + ";expires=" + expirydate;
  } else {
    document.cookie = key + "=" + value;
  }
}

function getAllCookie() {
  var data = document.cookie.split("; ");
  var usrsData = [];
  for (var i = 0; i < data.length; i++) {
    var key = data[i].split("=")[0];
    var value = data[i].split("=")[1];
    usrsData[key] = value;
  }
  return usrsData;
}

function getCookie(key) {
  var arr = getAllCookie();
  return arr[key];
}

function deleteCookie(key) {
  var date = new Date();
  date.setMonth(date.getMonth() - 1);
  document.cookie = key + "=;expires=" + date.toUTCString();
}

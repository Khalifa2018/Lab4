function setCookie(key, value, expirydate) {
  if (expirydate) {
    document.cookie = key + "=" + value + ";expires=" + expirydate;
  } else {
    document.cookie = key + "=" + value;
  }
}

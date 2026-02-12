// Get encoded value from URL (?d=ENCODED)
const encoded = new URLSearchParams(window.location.search).get("d");

// Base64 decode
function decodeBase64(str) {
  try {
    return atob(str);
  } catch {
    return "";
  }
}

if (encoded) {
  const decoded = decodeBase64(encoded);
  document.getElementById("inputBox").value = decoded;
}

function download() {
  const value = document.getElementById("inputBox").value;
  alert("Decoded value: " + value);
  // later you can put real download logic here
}
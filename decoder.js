// Read encoded value
const encoded = new URLSearchParams(window.location.search).get("d");

function decode(str) {
  try {
    return atob(str);
  } catch {
    return null;
  }
}

if (encoded) {
  const decodedLink = decode(encoded);

  if (decodedLink) {
    // Optional: show it in input if you keep UI
    const input = document.getElementById("inputBox");
    if (input) input.value = decodedLink;

    // Auto redirect after short delay (for UX)
    setTimeout(() => {
      window.location.href = decodedLink;
    }, 500); // half second
  }
}

var vibrationInterval;

function startVibration() {
  if ("vibrate" in navigator) {
    navigator.vibrate([1000]);
  } else {
    alert("Vibration API is not supported on this device.");
  }
}

function stopVibration() {
  if ("vibrate" in navigator) {
    navigator.vibrate(0);
  }
}
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt");
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  console.log(promptEvent);
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  const result = await promptEvent;
  console.log("👍", "result", result);
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
  console.log("👍", "appinstalled", event);
});
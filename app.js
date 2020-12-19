// on pageload if browser support serviceworker
addEventListener("load", async () => {
  let sw = await navigator.serviceWorker.register("./sw.js");
  console.group(sw);
});

// now we need to request to recieve notification
async function subscribe() {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      "BGFJ_mJ9K6cLAlBAeSJVA7MstG3WmUHpcb64OG9Ei8L1KFi09Wp5MmYfUrhSB1KQ1KAX3DRMWvEFiZ-kohCIkyU",
  });
  console.log(JSON.stringify(push));
}

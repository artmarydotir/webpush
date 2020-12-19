const push = require("web-push");

// generate pair key
// let vapidKey = push.generateVAPIDKeys();
// console.log(vapidKey);
// {
//     WebPushError: [Function: WebPushError],
//     supportedContentEncodings: { AES_GCM: 'aesgcm', AES_128_GCM: 'aes128gcm' },
//     encrypt: [Function: encrypt],
//     getVapidHeaders: [Function: getVapidHeaders],
//     generateVAPIDKeys: [Function: generateVAPIDKeys],
//     setGCMAPIKey: [Function (anonymous)],
//     setVapidDetails: [Function (anonymous)],
//     generateRequestDetails: [Function (anonymous)],
//     sendNotification: [Function (anonymous)]
//  }
let vapidKeys = {
  publicKey:
    "BGFJ_mJ9K6cLAlBAeSJVA7MstG3WmUHpcb64OG9Ei8L1KFi09Wp5MmYfUrhSB1KQ1KAX3DRMWvEFiZ-kohCIkyU",
  privateKey: "EsbXMHokvDOVuEU6IG_0pCaJj7ngbqzGe80huilX0cg",
};

push.setVapidDetails(
  "mailto:artmary.ir@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// this sub is waht we pull out from our database of stored people that want to recieve a notification
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d3_dJBnQGjo:APA91bG41C7VWqQNTmkMJlc3g7iEMZwF9j9aGMFjyd8Fm3bAyEzyz4xff5pfUFbW4Z6LpEzGml171z1iJ_SVrMfw0by4YtXx6r8FobKOWB-YXiZiNCpRSDmjyIJeTRgGpiU0XSCBIp-_",
  expirationTime: null,
  keys: {
    p256dh:
      "BGoy_iRmSK6jrnhfwrrzjAVox1LI_6ioh6HnTg2kuq7tRr7ZZA2FSszvtYxbx9eyFR46fZeEubsCRZaggscpvPM",
    auth: "NXg5IZ9QuAaBjSlB0a9kNg",
  },
};
push.sendNotification(sub, "test message");

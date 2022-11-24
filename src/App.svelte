<script>
  import { fade, fly } from "svelte/transition";
  import Alert from "./lib/Alert.svelte";
  import { utterThis, playTTS } from "./lib/TextToSpeek.svelte";
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const socketToken = urlParams.get("token");
  let isShow = false;
  let alert = [];
  let name;
  let message;
  let bgColor;
  let nominal;
  // @ts-ignore
  const streamlabs = io(`https://sockets.streamlabs.com?token=${socketToken}`, {
    transports: ["websocket"],
  });
  streamlabs.on("event", (eventData) => {
    alert.push(eventData);
  });

  setInterval(() => {
    if (alert.length != 0 && !isShow) {
      playAlert();
    } else {
      console.log("alert null");
    }
  }, 1000);

  function playAlert() {
    isShow = true;
    let data = alert.shift();
    let tts;
    name = data.message[0].name;
    if (data.type == "subscription") {
      nominal = "";
      message = "subscriber";
      bgColor="bg-red-500";
      tts = `${data.message[0].name} subscribe untuk ${data.message[0].months} bulan.`;
    } else if (data.type == "superchat") {
      nominal = data.message[0].amount;
      message = data.message[0].comment
      bgColor="bg-green-500"
      tts = `${name} donasi ${data.message[0].displayString}. ${message}`;
    }
    playTTS(tts);
  }
  utterThis.onend = (ev) => {
    setTimeout(() => (isShow = false), 2000);
  };
</script>

<main>
  {#if isShow}
    <div in:fly={{ x: -300, duration: 500 }} out:fade>
      <Alert
        bgColor={bgColor}
        message={message}
        name={name}
        nominal={nominal}
      />
    </div>
  {/if}
</main>

<style>
</style>

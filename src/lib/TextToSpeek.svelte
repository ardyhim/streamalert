<script context="module" lang="ts">
    export const synth = window.speechSynthesis;
    export const utterThis = new SpeechSynthesisUtterance;
    let lang;
    export let voices = synth.getVoices().filter((voice) => {
        if (
            voice.lang == "id-ID" ||
            voice.lang == "jv-ID" ||
            voice.lang == "su-ID" ||
            voice.lang == "en-AU" ||
            voice.lang == "en-US" ||
            voice.lang == "en-UK"
        ) {
            return voice;
        }
    });

    setTimeout(() => {
        voices = synth.getVoices().filter((voice) => {
            if (
                voice.lang == "id-ID" ||
                voice.lang == "jv-ID" ||
                voice.lang == "su-ID" ||
                voice.lang == "en-AU" ||
                voice.lang == "en-US" ||
                voice.lang == "en-UK"
            ) {
                return voice;
            }
        });
    }, 100);

    export const speak = (message) => {
        utterThis.text = message;
        lang = voices[15];
        utterThis.voice = lang;
        synth.speak(utterThis)
    };

    export const playTTS = (message)=> {
        var audio = new Audio('https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3');
        audio.loop = false;
        audio.play(); 
        audio.onended = (ev)=>{
            speak(message);
        }
    }
</script>
export const synth = window.speechSynthesis;
export let voiceList = synth.getVoices().filter((voice) => {
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
})
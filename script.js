let text = document.getElementById("text-area")
let languages = document.getElementById("languages")

const utterance = new SpeechSynthesisUtterance()

function setText() {
    utterance.lang = languages.value
    utterance.text = text.value
    return utterance
}
const startSpeak = () => speechSynthesis.speak(setText())
const stopSpeak = () => speechSynthesis.cancel()
const clearText = () => text.value = ""
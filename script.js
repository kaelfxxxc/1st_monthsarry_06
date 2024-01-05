const audio = document.getElementById('myAudio');

// Check if there's a playback position stored in sessionStorage
const storedPlaybackPosition = sessionStorage.getItem('audioPlaybackPosition');
if (storedPlaybackPosition) {
    audio.currentTime = parseFloat(storedPlaybackPosition);
}

// Save the current playback position when the page is unloaded
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('audioPlaybackPosition', audio.currentTime.toString());
});

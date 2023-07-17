// Function to download the text as a .txt file
function downloadTextAsFile() {
    const text = document.getElementById('text-editor').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my_text_file.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to play the typing sound
function playTypingSound() {
    const typingSound = document.getElementById('typing-sound');
    typingSound.currentTime = 0; // Rewind the sound to start
    typingSound.play();
}

// Attach keypress event to the text editor
document.getElementById('text-editor').addEventListener('keypress', playTypingSound);

// Attach click event to the download button
document.getElementById('download-btn').addEventListener('click', downloadTextAsFile);

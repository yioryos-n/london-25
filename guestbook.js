import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// ⚠️ REPLACE THIS WITH YOUR ACTUAL FIREBASE CONFIG FROM STEP 1
const firebaseConfig = {
    apiKey: "AIzaSyBwKhqApGWTRlyc5L905nfIHcxG3u3vD3g",
    authDomain: "london25-guestbook.firebaseapp.com",
    projectId: "london25-guestbook",
    storageBucket: "london25-guestbook.firebasestorage.app",
    messagingSenderId: "254399239166",
    appId: "1:254399239166:web:56619a2c9a0bba3cdee6af",
    measurementId: "G-077L0SLX66",
    databaseURL: "https://london25-guestbook-default-rtdb.europe-west1.firebasedatabase.app"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// For this simple example, we use a single hardcoded reference path.
// You can change "global_entry" to a unique user ID later if needed.
const guestbookRef = ref(db, 'guestbook/global_entry');

set(guestbookRef, "Welcome to the guestbook! Start typing your message here...");
const textarea = document.getElementById('guestbook-input');
const statusDiv = document.getElementById('save-status');
let typingTimer;

// 1. Load existing text from Firebase automatically when page opens
onValue(guestbookRef, (snapshot) => {
    //console.log(snapshot.val());
    const data = snapshot.val();
    // Only update textarea if user isn't actively typing to prevent cursor jumps
    if (data && document.activeElement !== textarea) {
        textarea.value = data;
    }
});

// 2. Listen for typing and trigger auto-save (Debounce mechanism)
textarea.addEventListener('input', () => {
    statusDiv.textContent = "Typing...";

    // Clear the timer every time the user presses a key
    clearTimeout(typingTimer);
            
    // Wait 1000ms (1 second) after the last keystroke before saving
    typingTimer = setTimeout(saveData, 1000);
});

// 3. Save data function
function saveData() {
    statusDiv.textContent = "Saving...";
            
    set(guestbookRef, textarea.value)
        .then(() => {
            statusDiv.textContent = "All changes saved automatically.";
        })
        .catch((error) => {
            statusDiv.textContent = "Error saving: " + error.message;
        });
}
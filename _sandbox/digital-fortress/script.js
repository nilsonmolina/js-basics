// UI Elements
const message = document.querySelector('#message');
const susanCipher = document.querySelector('#susan-cipher');
const caesarCipher = document.querySelector('#caesar-cipher');

// Event Listeners
message.addEventListener('input', handleMessageChanged);

// Event Functions
function handleMessageChanged(e) {
    const input = e.currentTarget.value;

    encryptSusanCipher(input);
    encryptCaesarCipher(input);
}

// Encryption Methods
function encryptSusanCipher(message) {
    let encrypted = '';
    for (const char of message.toLowerCase()) {
        const charCode = char.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) encrypted += `<span>${charCode - 96}</span>`;
        else encrypted += `<span class="not-letter">${char}</span>`;
    }

    susanCipher.innerHTML = encrypted;
}

function encryptCaesarCipher(message) {
  let encrypted = '';
  for (const char of message.toLowerCase()) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 109) charCode += 13;
    else if (charCode >= 110 && charCode <= 122) charCode -= 13;

    if (charCode >= 97 && charCode <= 122) encrypted += `<span>${String.fromCharCode(charCode)}</span>`;
    else encrypted += `<span class="not-letter">${char}</span>`;
  }

  caesarCipher.innerHTML = encrypted;
}

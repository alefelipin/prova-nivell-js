export function showMessage(id, message) {
   document.getElementById(id).innerText = message;
}

export function clearInput(input) {
  input.value = "";  
}
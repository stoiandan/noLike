
const DISABLED = "Enable";
const ENABLED = "Disable";

const stateButton = document.getElementById('state');

const mainDiv = document.getElementsByClassName('main');
/*
Enabled by default, set the current action to disable it if clicked
*/
stateButton.value = ENABLED;


stateButton.onclick = function () {
    if (stateButton.value === ENABLED) {
        stateButton.value = DISABLED;
    } else {
        stateButton.value = ENABLED;
    }
}
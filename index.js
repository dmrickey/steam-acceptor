const nullthrows = (v) => {
    if (v == null) throw new Error("it's a null");
    return v;
}

function injectCode(src) {
    const script = document.createElement('script');
    // This is why it works!
    script.src = src;
    script.onload = function () {
        console.log("script injected");
        this.remove();
    };

    // This script runs before the <head> element is created,
    // so we add the script to <html> instead.
    nullthrows(document.head || document.documentElement).appendChild(script);
}

const doc = document.getElementById('product_key');
const key = doc.getAttribute('value');
if (key) {
    const checkbox = document.getElementById('accept_ssa');
    if (checkbox) {
        checkbox.checked = true;
        injectCode(chrome.runtime.getURL('/click.js'));
    }
}
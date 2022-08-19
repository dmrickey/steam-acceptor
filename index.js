const doc = document.getElementById('product_key');
const key = doc.getAttribute('value');
if (key) {
    const checkbox = document.getElementById('accept_ssa');
    if (checkbox) {
        checkbox.checked = true;

        // doesn't work because of website's security policies
        // const button = document.getElementById('register_btn');
        // if (button) {
        //     window.setTimeout(() => {
        //         button.click();
        //     }, 250);
        // }
    }
}
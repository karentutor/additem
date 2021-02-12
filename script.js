/*Please include:

Users type in the input field and press enter
When they press enter, use the input value and add it as a list item to the unordered list under the input field.
When a user clicks on a list item, the checkbox should fill. And text should turn grey to indicate that it has been "done."

*/

/* Javascript */

const inputTarget = document.getElementById('inputEl');
const wrapperEl = document.querySelector('.request-wrapper');
const selectItem = document.querySelectorAll('.choice');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = inputTarget.value; // get value submitted
    const textNode = document.createTextNode(item); // Create a text node with item

    //Create and append a div to the unordered list
    const devEl = document.createElement('div');
    devEl.setAttribute('class', 'choice');
    wrapperEl.appendChild(devEl);

    //Create and append list item to devEl
    const labelEl = document.createElement('label');
    labelEl.setAttribute('class', 'container');
    labelEl.appendChild(textNode);
    devEl.appendChild(labelEl);


    //Create a checkbox item and add to labelEl above as first inside 
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    labelEl.insertAdjacentElement('beforeend', inputEl);

    //Create a span item and put as adjacent to input
    const spanEl = document.createElement('span');
    spanEl.setAttribute('class', "checkmark");
    labelEl.insertAdjacentElement('beforeend', spanEl);

});

wrapperEl.addEventListener('click', (e) => {

    if (e.target.tagName == 'SPAN') {
        e.target.parentNode.parentNode.classList.toggle('change');
    }
    else e.target.parentNode.classList.toggle('change');
});



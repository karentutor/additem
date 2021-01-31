/*Please include:

Users type in the input field and press enter
When they press enter, use the input value and add it as a list item to the unordered list under the input field.
When a user clicks on a list item, the checkbox should fill. And text should turn grey to indicate that it has been "done."

*/
const inputTarget = document.getElementById('inputEl');
const ulEl = document.getElementById('myRequests');

myForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const item = inputTarget.value; // get value submitted
    const textNode = document.createTextNode(item); // Create a text node with item

    //Create and append list item to unordered list
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    //Create a checkbox item and add to liEl above as first inside 
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'checkbox');
    liEl.insertAdjacentElement('afterbegin', inputEl);

    //Create a span item and attach inputted item as a child
    const spanEl = document.createElement('span');
    spanEl.appendChild(textNode);
    inputEl.insertAdjacentElement('afterend', spanEl);
    /*
    //Get item and create  node
    const item = inputEl.value; // get value submitted
    //const inputNode = document.createTextNode(item); // Create a text node with it

    //Create checkbox 
    const checkEl = document.createElement("input"); // Create a input element
    checkEl.setAttribute("type", "checkbox"); // Make of type checkbox

    //Create a li el and attach text
    const liEl = document.createElement("li");                 // Create a <li> node
    liEl.appendChild(inputNode);
    /*
        //Add the list element to the ul
        ulEl.appendChild(liEl);
    */
    //Add the checkbox as the first child to the ul
    //ulEl.insertBefore(checkEl, ulEl.firstChild);

    //checkEl.insertAdjacentElement("afterend", liEl);

    //Add the list element to the ul
    //ulEl.appendChild(liEl); 

});

// <li><input type="checkbox" /><label></li>




:root {
    --my-start-width: 0;
    --my-end-width: 280px;
}

...

@keyframes progressBar {
    0% { width: var(--my-start-width); }
    100% { width: var(--my-end-width); }
}


//set property: 

document.documentElement.style
    .setProperty('--my-variable-name', '100px');

//get property

getComputedStyle(document.documentElement)
    .getPropertyValue('--my-variable-name'); // returns value


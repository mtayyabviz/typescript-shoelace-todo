export function drawerScript(){

const drawer = document.querySelector('.drawer-overview');
const openButton = drawer.nextElementSibling;
const closeButton = drawer.querySelector('sl-button[variant="primary"]');

openButton.addEventListener('click', () => drawer.show());
closeButton.addEventListener('click', () => drawer.hide());

}
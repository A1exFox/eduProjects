document.body.addEventListener('click', clickIntoBody);
function clickIntoBody(event) {
  if (event.target.closest('.header__burger')) {
    document.body.classList.toggle('activemenu');
    return;
  }
  if (document.body.classList.contains('activemenu')) {
    document.body.classList.toggle('activemenu');
    return;
  }
}
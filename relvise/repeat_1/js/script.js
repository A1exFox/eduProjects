document.body.addEventListener('click', clickIntoBody);
function clickIntoBody(event) {
  if (event.target.closest('.header__burger')) {
    document.body.classList.toggle('activeburger');
    return;
  }
  if (document.body.classList.contains('activeburger')) {
    document.body.classList.remove('activeburger');
    return;
  }
}
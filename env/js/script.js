const ITEM_CSS = '.item';
const LINK_CSS = '.itemtitle';
const ACT_SELECT = 'active';
document.body.addEventListener('click', clickIntoBody);
let openTarget;
function clickIntoBody(event) {
  const obj = event.target;
  if (obj.closest(LINK_CSS)) {
    if (!obj.closest(ITEM_CSS).classList.contains(ACT_SELECT)) {
      if (openTarget) openTarget.classList.remove(ACT_SELECT);
      openTarget = obj.closest(ITEM_CSS);
    } else {
      openTarget = undefined;
    }
    obj.closest(ITEM_CSS).classList.toggle(ACT_SELECT);
  }
}
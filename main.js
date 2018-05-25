'use strict';

const RATE_LIST = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(mutations => {
  mutations.forEach(async function(mutation) {
      if(mutation.target.className !== "_2j04") return;
      console.log(mutation.target)
      const videoContainer = findVideoContainer(mutation.target);
      const manager = VideoManager.fromHtml(videoContainer);
      if(manager === null) return;
      manager.insertRateButtons(RATE_LIST);
  });    
});

function findVideoContainer(node) {
  var t = node;
  while(t.children[0].nodeName !== "VIDEO"){
    t = t.parentNode
  }
  return t
}

const config = {  childList: true, subtree: true, characterData: true, attributes: true };
observer.observe(document, config);

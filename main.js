'use strict';

const RATE_LIST = [0.5, 0.75, 1, 1.25, 1.5, 2];

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const observer = new MutationObserver(mutations => {
  mutations.forEach(async function(mutation) {
      if(mutation.target.nodeName !== "VIDEO") return;
      if(mutation.target.hasAttribute("_mark")) return;

      const videoContainer = mutation.target.parentNode;
      
      const manager = VideoManager.fromHtml(videoContainer);
      if(manager === null) return;
      
      manager.insertRateButtons(RATE_LIST);
  });    
});


const config = {  childList: true, subtree: true, characterData: true, attributes: true };
observer.observe(document, config);

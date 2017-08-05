const selectedClassName = "_2xyd";

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

let observer = new MutationObserver(mutations => {
  mutations.forEach(async function(mutation) {
      if(mutation.target.nodeName !== "VIDEO") return;
      if(mutation.target.hasAttribute("_mark")) return;

      let video = mutation.target;
      let container = video.parentNode;
      let settingBlock = getSettingBlock(container);
      if(settingBlock === null) return;

      let rateList = [0.5, 0.75, 1, 1.25, 1.5, 2];

      //Add rate button into setting block
      for(let rate of rateList) {
        let a = document.createElement("a");
        a.setAttribute("rate", rate);
        a.className = "_4v8v";
        a.innerHTML = `<div class="_2xyg"><div class="${rate === 1 ? selectedClassName: ""}"></div></div><div class="_4v8x">${rate}x</div>`;
        a.addEventListener("click", () => setRate(container, rate));
        
        let len = settingBlock.childNodes.length;
        settingBlock.insertBefore(a, settingBlock.childNodes[len - 1]);
      }
      //Mark this video has been processed
      video.setAttribute("_mark", 1);
  });    
});

function setRate(block, rate){
  getVideoBlock(block).playbackRate = rate;
  let nodes = getSettingBlock(block).querySelectorAll("a[rate]");
  for(let n of nodes){
    if(n.getAttribute("rate") == rate) n.childNodes[0].childNodes[0].className = selectedClassName;
    else n.childNodes[0].childNodes[0].className = "";
  }
}

function getVideoBlock(block){
  return block.querySelector("video");
}

function getSettingBlock(block){
  return block.querySelector("._28h1");
}

const config = {  childList: true, subtree: true, characterData: true, attributes: true };
observer.observe(document, config);
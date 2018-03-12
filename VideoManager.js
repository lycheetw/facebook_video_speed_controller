'use strict';

class VideoManager {

  insertRateButtons(rateList) {
    if(this.video.hasAttribute(VideoManager._MARK)) return;

    const settingBlock = this.settingBlock;
    //Add rate button into setting block
    const div = document.createElement("div");
    for(let rate of rateList) {
      const a = document.createElement("a");
      a.setAttribute("rate", rate);
      a.setAttribute("aria-checked", false);
      a.setAttribute("role", "radio");
      a.className = "_2iw4";
      a.innerHTML = `<div class="_4t7u"><div class="${rate === 1 ? VideoManager._SELECTED_CLASS_NAME: ""}"></div></div><div class="_2iw5">${rate}x</div>`;
      a.addEventListener("click", () => this.setRate(rate));
      div.appendChild(a);
    }
    const len = settingBlock.childNodes.length;
    settingBlock.insertBefore(div, settingBlock.childNodes[0]);
    settingBlock.addEventListener("click", (e) => {
      setTimeout(() => {
        if(settingBlock.querySelector("._4t9q").nodeName == "DIV" ) {
          div.hidden = true;
        } else {
          div.hidden = false
        }
      }, 5);
      
    }, true);
    this.video.setAttribute(VideoManager._MARK, 1);
  }

  setRate(rate) {
    this.video.playbackRate = rate;
    const nodes = this.settingBlock.querySelectorAll("a[rate]");
    for(let n of nodes){
      if(n.getAttribute("rate") == rate) n.childNodes[0].childNodes[0].className = VideoManager._SELECTED_CLASS_NAME;
      else n.childNodes[0].childNodes[0].className = "";
    }
  }
} 

VideoManager._SELECTED_CLASS_NAME = "_4t7r";
VideoManager._MARK = "_mark";

VideoManager.fromHtml = function(htmlNode) {
  const settingBlock = htmlNode.querySelector("._2i_x");
  const video = htmlNode.querySelector("video");

  if(settingBlock === null || video === null) return null;
  if(video.hasAttribute(VideoManager._MARK)) return null;

  const manager = new VideoManager();
  manager.settingBlock = settingBlock;
  manager.video = video;
  return manager;
}
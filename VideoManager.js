'use strict';

class VideoManager {

  insertRateButtons(rateList) {
    if(this.video.hasAttribute(VideoManager._MARK)) return;

    const settingBlock = this.settingBlock;
    //Add rate button into setting block
    for(let rate of rateList) {
      const a = document.createElement("a");
      a.setAttribute("rate", rate);
      a.className = "_4v8v";
      a.innerHTML = `<div class="_2xyg"><div class="${rate === 1 ? VideoManager._SELECTED_CLASS_NAME: ""}"></div></div><div class="_4v8x">${rate}x</div>`;
      a.addEventListener("click", () => this.setRate(rate));
      
      const len = settingBlock.childNodes.length;
      settingBlock.insertBefore(a, settingBlock.childNodes[len - 1]);
    }

    //Mark this video has been processed
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

VideoManager._SELECTED_CLASS_NAME = "_2xyd";
VideoManager._MARK = "_mark";

VideoManager.fromHtml = function(htmlNode) {
  const settingBlock = htmlNode.querySelector("._28h1");
  const video = htmlNode.querySelector("video");

  if(settingBlock === null || video === null) return null;
  if(video.hasAttribute(VideoManager._MARK)) return null;

  const manager = new VideoManager();
  manager.settingBlock = settingBlock;
  manager.video = video;
  return manager;
}
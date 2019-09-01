# Facebook video speed controller
A chrome extension let you change video speed in Facebook

## Screenshots
![alt tag](https://raw.githubusercontent.com/lycheetw/facebook_video_speed_controller/master/images/screenshot.png)

## How
The main idea is using html5 video tag to control playing speed.
1. Using `MutationObserver` to catch new video block when user scrolling web page.
2. Adding speed option into setting block
3. Using `video.playbackRate` to speed up/down playing speed.


## TODO
Facebook will changes their web structure sometimes. It may cause extension stop working.

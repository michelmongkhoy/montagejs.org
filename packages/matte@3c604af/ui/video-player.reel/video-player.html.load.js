montageDefine("3c604af","ui/video-player.reel/video-player.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=video-player.css>\n    <script type="text/montage-serialization">{"dynamictext1":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"duration"}}},"dynamictext2":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"position"}}},"mediacontroller1":{"prototype":"montage/core/media-controller","properties":{"mediaElement":{"#":"video-tag"}},"bindings":{"mediaSrc":{"<-":"@owner.src"}}},"slider1":{"prototype":"ui/input-range.reel","properties":{"element":{"#":"durationSlider"},"min":0},"bindings":{"value":{"<->":"@owner.controller.position"}}},"actioneventlistener1":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"playPause"}},"togglebutton1":{"prototype":"ui/toggle-button.reel","properties":{"element":{"#":"playButton"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener1"},"capture":false}]},"actioneventlistener2":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"rewind"}},"button1":{"prototype":"ui/button.reel","properties":{"element":{"#":"rewindButton"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener2"},"capture":false}]},"actioneventlistener3":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"fastForward"}},"button2":{"prototype":"ui/button.reel","properties":{"element":{"#":"ffButton"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener3"},"capture":false}]},"actioneventlistener4":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"volumeDecrease"}},"button3":{"prototype":"ui/button.reel","properties":{"element":{"#":"decreaseVolume"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener4"},"capture":false}]},"actioneventlistener5":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"volumeIncrease"}},"button4":{"prototype":"ui/button.reel","properties":{"element":{"#":"increaseVolume"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener5"},"capture":false}]},"actioneventlistener6":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"toggleMute"}},"button5":{"prototype":"ui/button.reel","properties":{"element":{"#":"muteButton"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener6"},"capture":false}]},"actioneventlistener7":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"mediacontroller1"},"action":"toggleRepeat"}},"button6":{"prototype":"ui/button.reel","properties":{"element":{"#":"repeatButton"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener7"},"capture":false}]},"actioneventlistener8":{"prototype":"montage/core/event/action-event-listener","properties":{"handler":{"@":"owner"},"action":"toggleFullScreen"}},"button7":{"prototype":"ui/button.reel","properties":{"element":{"#":"fullScreenButton"}},"listeners":[{"type":"action","listener":{"@":"actioneventlistener8"},"capture":false}]},"owner":{"prototype":"ui/video-player.reel","properties":{"element":{"#":"video-player"},"playButton":{"#":"playButton"},"repeatButton":{"#":"repeatButton"},"volumeLevel":{"#":"volumeLevel"},"controls":{"#":"controlWrapper"},"fullScreenPanel":{"#":"fullScreenPanel"},"fullScreenButton":{"#":"fullScreenButton"},"slider":{"@":"slider1"},"durationText":{"@":"dynamictext1"},"positionText":{"@":"dynamictext2"},"controller":{"@":"mediacontroller1"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=video-player class=matte-VideoPlayer>\n        <video data-montage-id=video-tag class=matte-VideoPlayer-video></video>\n        <div data-montage-id=controlWrapper class=control-wrapper>\n            <div data-montage-id=controller class=controller>\n                <div class=controller-button-panel>\n                    <div data-montage-id=repeatButton class="repeat controller-button" title="Repeat Video"></div>\n                    <div data-montage-id=rewindButton class="rw controller-button" title=Rewind> </div>\n                    <div data-montage-id=playButton class="play controller-button" title="Play/Pause"> </div>\n                    <div data-montage-id=ffButton class="ff controller-button" title="Fast Forward"> </div>\n                </div>\n                <div class=controller-scrubber-panel>\n                    <div data-montage-id=position class="position controller-text"></div>\n                    <div data-montage-id=durationSlider class="scrubber dark"></div>\n                    <div data-montage-id=duration class="duration controller-text"></div>\n                </div>\n                <div class=controller-volume-panel>\n                    <div data-montage-id=muteButton class="mute controller-button" title=Mute></div>\n                    <div data-montage-id=decreaseVolume class="volume-minus controller-button" title="Decrease Volume"> </div>\n                    <div class="volume controller-progress"><div data-montage-id=volumeLevel class=volume-progress></div></div>\n                    <div data-montage-id=increaseVolume class="volume-plus controller-button" title="Increase Volume"> </div>\n                </div>\n                <div data-montage-id=fullScreenPanel class=controller-fullscreen-panel>\n                    <div data-montage-id=fullScreenButton class="fullscreen controller-button" title="Toggle Fullscreen"> </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n</html>'});
// ==UserScript==
// @name         Wanikani: Move notes to top
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Moves the notes to the top if there is anything written in them
// @author       Kumirei
// @include      *wanikani.com/review/session
// @include      *preview.wanikani.com/review/session
// @require      https://greasyfork.org/scripts/432418-wait-for-selector/code/Wait%20For%20Selector.js?version=974318
// @grant        none
// ==/UserScript==

(function($, wfs) {
    wfs.wait('#note-meaning, #note-reading', (e)=>{
        if (e.children[1].innerText != "Click to add note") {
            $('#item-info-col2').prepend(e);
        }
    });
})(window.jQuery, window.wfs);

// ==UserScript==
// @name         Bunpro: Auto-show Info
// @namespace    http://tampermonkey.net/
// @version      0.2.7
// @description  Automatically expands the full grammar info when you get a review wrong.
// @author       Kumirei
// @include      *bunpro.jp/study*
// @exclude      *community.bunpro.jp*
// @require      https://greasyfork.org/scripts/370623-bunpro-helpful-events/code/Bunpro:%20Helpful%20Events.js?version=974345
// @grant        none
// ==/UserScript==

(function() {
	//wait until we're reviewing
	$('HTML')[0].addEventListener('quiz-page', function() {
		//do stuff when we press enter and get the answer wrong
		$('#study-answer-input').on('keydown', function(event) {
			if (event.which == 13) {
				openIfWrong();
			}
		});
		//do stuff when we click submit and get the answer wrong
		$('#submit-study-answer').on('click', function() {
			openIfWrong();
		});

	});

	//opens the info if you get the item wrong
	function openIfWrong() {
		if ($('.oops-button')[0].style.display == "block" || $('#learn-new-grammar-page').length) {
			$('.show-grammar-text').click();
		}
	}
})();

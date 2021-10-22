// ==UserScript==
// @name         Wanikani Forums: Deep Quote Hider
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Hides quotes deeper than 3 quotes in posts
// @author       Kumirei
// @match        https://community.wanikani.com/t/*
// @grant        none
// ==/UserScript==

;(function () {
    const depth = 3 // Visible quotes

    document.getElementsByTagName('head')[0].insertAdjacentHTML(
        'beforeend',
        `<style id="DQH">
    ${'blockquote '.repeat(depth + 1)},
    ${'blockquote '.repeat(depth)} .quote {
    	display: none;
    }
    ${'blockquote '.repeat(depth - 1)} > blockquote::before,
    ${'.quote '.repeat(depth)} > blockquote::before {
    	content: 'DEEPER QUOTES HIDDEN';
        font-weight: bold;
        font-size: 18px;
        display: block;
    }
     
    ${'blockquote '.repeat(depth)} {
    	text-align: center;
    }
     
    ${'blockquote '.repeat(depth)} > * {
    	text-align: left;
    }
    </style>
    `,
    )
})()

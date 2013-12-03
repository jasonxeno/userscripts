// ==UserScript==
// @name         sort your deck list by name and hide timestamp
// @description  deckstats.net
// @version      0.0.1
// @namespace    https://github.com/solygen/userscripts-and-bookmarklets
// @repository   https://github.com/solygen/userscripts-and-bookmarklets.git
// @license      MIT
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
//
// @include      http://deckstats.net/decks/*
//
// @updateURL    https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/deckstats.net/deck-list.user.js
// @downloadURL  https://rawgithub.com/solygen/userscripts-and-bookmarklets/master/deckstats.net/deck-list.user.js
// @homepage     https://github.com/solygen/userscripts-and-bookmarklets

// ==/UserScript==

//hide timestamp
$('.decks_list.decks_list_narrow')
    .find('.decks_list_subtitle')
    .remove();

//detach rows
var lines = $('.decks_list.decks_list_narrow')
            .find('tr')
            .remove();

//sort
lines.sort(function (a, b) {
    var valueA = $(a).find('a').text().trim(),
        valueB = $(b).find('a').text().trim();
    if(valueA < valueB) return -1;
    if(valueA > valueB) return 1;
    return 0;
});

//attach rows again
$('.decks_list.decks_list_narrow')
    .find('tbody')
    .append(lines);

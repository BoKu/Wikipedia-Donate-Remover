// ==UserScript==
// @name         Wikipedia Donate Remover
// @namespace    Wikipedia_Donate_Remover
// @version      2021
// @description  Removes annoying banner ad for donating
// @author       BoKu
// @match        https://*.wikipedia.org/*
// @icon         https://www.google.com/s2/favicons?domain=wikipedia.org
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    var SiteNotice = document.getElementById('siteNotice');
    SiteNotice.remove();
})();
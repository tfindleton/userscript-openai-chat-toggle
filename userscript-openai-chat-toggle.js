// ==UserScript==
// @name         OpenAI Chat List Toggle Button
// @namespace    https://github.com/tfindleton/userscript-openai-chat-toggle/
// @version      0.7
// @description  Toggle the chat list visibility on openai.com via a toggle button near the New Chat button
// @author       tfindleton
// @match        https://*.openai.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // SVG icons for open and closed eyes
    const openEyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00a67d"><path d="M12 4c-4.97 0-9 5-9 6.5S7.03 17 12 17s9-5 9-6.5S16.97 4 12 4zm0 11c-2.21 0-4-2.79-4-4.5S9.79 6 12 6s4 2.79 4 4.5-1.79 4.5-4 4.5zm0-6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>`;
    const closedEyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f22c3d"><path d="M12 4c-4.97 0-9 5-9 6.5S7.03 17 12 17s9-5 9-6.5S16.97 4 12 4zm0 11c-2.21 0-4-2.79-4-4.5S9.79 6 12 6s4 2.79 4 4.5-1.79 4.5-4 4.5zm0-6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zM3.707 20.293l1.414-1.414 13.576-13.576-1.414-1.414L3.707 17.879z"/></svg>`;

    // Function to toggle chat list visibility
    function toggleChatList() {
        const chatList = document.querySelector('.flex.flex-col.gap-2.text-gray-100.text-sm');
        if (chatList) {
            if (chatList.style.display === 'none') {
                chatList.style.display = 'block';
                button.innerHTML = closedEyeIcon;
                button.setAttribute('title', 'Hide Chat List');
            } else {
                chatList.style.display = 'none';
                button.innerHTML = openEyeIcon;
                button.setAttribute('title', 'Show Chat List');

            }
        } else {
            console.error('Chat list not found');
        }
    }

    // Create the toggle button and style it
    const button = document.createElement('button');
    button.innerHTML = closedEyeIcon;
    button.className = 'flex py-2 px-2 items-center gap-3 rounded-md cursor-pointer';
    button.style.position = 'fixed';
    button.style.top = '11px';
    button.style.left = '209px';
    button.style.zIndex = '9999';
    button.style.backgroundColor = '#202123';

    // Add the click event listener to the button
    button.addEventListener('click', toggleChatList);

    // Append the button to the page
    document.body.appendChild(button);

})();

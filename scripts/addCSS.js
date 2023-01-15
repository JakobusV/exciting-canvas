var head = document.getElementsByTagName('HEAD')[0];

var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL(`root-animation.css`);

head.appendChild(link);
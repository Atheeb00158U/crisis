/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("window.addEventListener('DOMContentLoaded', function () {\r\n  var content = document.getElementById('content');\r\n\r\n  var bgScreen = document.createElement('div');\r\n  bgScreen.id = \"bgscreen\";\r\n\r\n  var crisisButton = document.createElement(\"button\");\r\n  crisisButton.id = \"crisisButton\";\r\n  crisisButton.textContent = \"CRISIS!\"\r\n\r\n  bgScreen.appendChild(crisisButton);\r\n  \r\n  content.appendChild(bgScreen);\r\n  bgScreen.classList.toggle('glowing');\r\n\r\n\r\n  crisisButton.addEventListener(\"click\", function() {\r\n    clearScreen();\r\n    enterCryptedMessage();\r\n  });\r\n});\r\n  \r\n  function enterCryptedMessage(){\r\n    var content = document.getElementById('content');\r\n    \r\n    var heading = document.createElement('h1');\r\n    heading.textContent = 'Enter the Code';\r\n    content.appendChild(heading);\r\n  \r\n    var input = document.createElement('input');\r\n    input.type = 'text';\r\n    input.id = 'codeInput';\r\n    input.placeholder = 'Enter the code';\r\n    content.appendChild(input);\r\n  \r\n    var submitButton = document.createElement('button');\r\n    submitButton.className = 'button';\r\n    submitButton.textContent = 'Submit';\r\n    submitButton.addEventListener('click', checkCode);\r\n    content.appendChild(submitButton);\r\n  \r\n    input.addEventListener('keydown', function(event) {\r\n      if (event.key === 'Enter') {\r\n        event.preventDefault();\r\n        submitButton.click();\r\n      }\r\n    });\r\n  };\r\n\r\n  function checkCode() {\r\n    var codeInput = document.getElementById('codeInput');\r\n    var code = codeInput.value;\r\n    \r\n    if (code === 'openprojector') {\r\n      clearScreen();\r\n      showDecryptedMessage();\r\n    }\r\n  }\r\n  \r\n  function clearScreen() {\r\n    var content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n  }\r\n  \r\n  function showDecryptedMessage() {\r\n    var content = document.getElementById('content');\r\n    var contain = document.createElement(\"div\")\r\n    contain.id ='decrypt-container' ;\r\n\r\n    var heading = document.createElement('h1');\r\n    heading.textContent = 'CODE DECRYPTED';\r\n    content.appendChild(heading);\r\n  \r\n    var instructions = document.createElement('p');\r\n    instructions.id  = \"instructions\"\r\n    instructions.textContent = \"China's leaked war council speech\";\r\n    contain.appendChild(instructions);\r\n    content.appendChild(contain);\r\n  \r\n    var crisisButton = document.createElement('button');\r\n    crisisButton.className = 'button';\r\n    crisisButton.textContent = 'CRISIS!';\r\n    crisisButton.addEventListener('click', playVideo);\r\n    content.appendChild(crisisButton);\r\n  }\r\n  \r\n  function playVideo() {\r\n    var content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n  \r\n    var video = document.createElement('video');\r\n    video.id = 'video';\r\n    video.src = 'CHINA.mp4';\r\n    video.controls = true;\r\n    video.addEventListener('ended', showText);\r\n    content.appendChild(video);\r\n    video.play();\r\n  }\r\n\r\n  \r\n  function showText() {\r\n    var content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n    var head2 = document.createElement(\"h1\");\r\n    head2.textContent = \"Objectives\";\r\n    content.appendChild(head2);\r\n    var text = document.createElement('p');\r\n    text.id = 'text';\r\n    text.textContent = 'Discuss legitimate solutions for the current china crisis, and simultaneously discuss the encrypted crisis, which has been decrypted by the EB';\r\n    content.appendChild(text);\r\n    text.style.display = 'block';\r\n  };\r\n  \r\n\r\n\n\n//# sourceURL=webpack://webdev/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;
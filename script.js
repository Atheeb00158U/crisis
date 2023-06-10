window.addEventListener('DOMContentLoaded', function () {
  var content = document.getElementById('content');

  var bgScreen = document.createElement('div');
  bgScreen.id = "bgscreen";

  var crisisButton = document.createElement("button");
  crisisButton.id = "crisisButton";
  crisisButton.textContent = "CRISIS!"

  bgScreen.appendChild(crisisButton);
  
  content.appendChild(bgScreen);
  bgScreen.classList.toggle('glowing');


  crisisButton.addEventListener("click", function() {
    clearScreen();
    enterCryptedMessage();
  });
});
  
  function enterCryptedMessage(){
    var content = document.getElementById('content');
    
    var heading = document.createElement('h1');
    heading.textContent = 'Enter the Code';
    content.appendChild(heading);
  
    var input = document.createElement('input');
    input.type = 'text';
    input.id = 'codeInput';
    input.placeholder = 'Enter the code';
    content.appendChild(input);
  
    var submitButton = document.createElement('button');
    submitButton.className = 'button';
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', checkCode);
    content.appendChild(submitButton);
  
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitButton.click();
      }
    });
  };

  function checkCode() {
    var codeInput = document.getElementById('codeInput');
    var code = codeInput.value;
    
    if (code === 'openprojector') {
      clearScreen();
      showDecryptedMessage();
    }
  }
  
  function clearScreen() {
    var content = document.getElementById('content');
    content.innerHTML = '';
  }
  
  function showDecryptedMessage() {
    var content = document.getElementById('content');
    var contain = document.createElement("div")
    contain.id ='decrypt-container' ;

    var heading = document.createElement('h1');
    heading.textContent = 'CODE DECRYPTED';
    content.appendChild(heading);
  
    var instructions = document.createElement('p');
    instructions.id  = "instructions"
    instructions.textContent = "China's leaked war council speech";
    contain.appendChild(instructions);
    content.appendChild(contain);
  
    var crisisButton = document.createElement('button');
    crisisButton.className = 'button';
    crisisButton.textContent = 'CRISIS!';
    crisisButton.addEventListener('click', playVideo);
    content.appendChild(crisisButton);
  }
  
  function playVideo() {
    var content = document.getElementById('content');
    content.innerHTML = '';
  
    var video = document.createElement('video');
    video.id = 'video';
    video.src = 'CHINA.mp4';
    video.controls = true;
    video.addEventListener('ended', showText);
    content.appendChild(video);
    video.play();
  }

  
  function showText() {
    var content = document.getElementById('content');
    content.innerHTML = '';
    var head2 = document.createElement("h1");
    head2.textContent = "Objectives";
    content.appendChild(head2);
    var text = document.createElement('p');
    text.id = 'text';
    text.textContent = 'Discuss legitimate solutions for the current china crisis, and simultaneously discuss the encrypted crisis, which has been decrypted by the EB';
    content.appendChild(text);
    text.style.display = 'block';
  };
  


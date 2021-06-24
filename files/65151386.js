// JS animation script start here

var question = 0;

var questions = Array.from(document.getElementsByClassName("quiz")).reduce((carry, item) => {
  carry.push(item.textContent.trim())
  return carry;
}, []);

var anim;
var targets;

function prepQuestion() {
  $("#rect").text(questions[question]);

  var textWrappers = document.querySelectorAll('#rect');
  textWrappers.forEach(textWrapper => {
    textWrapper.innerHTML = textWrapper.textContent.replace(/(\S*)/g, m => {
      return `<span class="word">` +
        m.replace(/(-|)?\S(-|@)?/g, "<span class='letter'>$&</span>") +
        `</span>`;
    });
  });

  targets = Array.from(document.querySelectorAll('#rect .letter'));

  anim = anime.timeline()
    .add({
      targets: targets,
      scale: [3, 1],
      scaleY: [1.5, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 150,
      delay: (el, i) => 20 * i
    });
}

// init
prepQuestion();

function next() {
  anim = anime.timeline()
    .add({
      targets: targets.reverse(),
      scale: [1, 3],
      scaleY: [1, 1.5],
      opacity: [1, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 50,
      delay: (el, i) => 10 * i
    });

  anim.complete = () => {
    if (question == questions.length - 1) {
      question = 0;
    } // reset question
    else {
      question++;
    }

    prepQuestion();
  };
}

function previous() {
  anim = anime.timeline()
    .add({
      targets: targets.reverse(),
      scale: [1, 3],
      scaleY: [1, 1.5],
      opacity: [1, 0],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 50,
      delay: (el, i) => 10 * i
    });

  anim.complete = () => {
    if (question == 0) {
      question = questions.length - 1;
    } // reset question
    else {
      question--;
    }

    prepQuestion();
  };
}
// JS animation script end here

// textarea script start here

const sendButton = document.getElementById('send-btn');
const textArea = document.getElementById('input');
const innerDiv = document.getElementById('rect');
const container = document.getElementById('q-container');
var message = textArea.value;

sendButton.addEventListener('click', function() {
  // split the textarea entries into an array
  let lines = (textArea.value).split("\n");

  // iterate over each line, creating a div/span and inserting into the DOM
  lines.forEach((line) => {
    let encodedLine = encodeHtmlEntity(line);
    let newElement = `<div class="quiz">${encodedLine}</div>`;
    container.innerHTML += newElement;
    questions = Array.from(document.getElementsByClassName("quiz")).reduce((carry, item) => {
      carry.push(item.textContent.trim())
      return carry;
    }, []);
  });

  // reset the textarea
  textArea.value = '';

});

function encodeHtmlEntity(input) {
  var output = input.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return '&#' + i.charCodeAt(0) + ';';
  });

  return output;
}
  #rect {
    font-weight: 900;
    font-size: 1.5em;
    font-family: rr;
  }
  
  #rect .letter {
    line-height: 1em;
  }
  
  #quizss {
    display: none;
  }
  
  .word {
    white-space: nowrap;
  }
<script src="/scripts/snippet-javascript-console.min.js?v=1"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<div id="q-container">
<div class="quiz">Question-1 : The color of !the sky is...?</div>
<div class="quiz">Question-2 : Paper comes from...?</div>
<div class="quiz">Question-3 : How many hours in a day?</div>
<div class="quiz">Question-4 : A Giraffe is a fish?</div>
</div>

<div id="rect"></div>

<br><br>
<textarea class="input" id="input" placeholder="Message..."></textarea>
<button class="waves-effect waves-light" id="send-btn">Send</button>

<br><br>
<Button id="rc" onclick="previous()">previous</Button>
<Button id="rc" onclick="next()">Next</Button>
var question = 0;

//var  questions = [
//    "The color of the sky is...?",
//    "Paper comes from...?",
//    "How many hours in a day?"
//  ];
var questions = Array.from(document.getElementsByClassName("quiz")).reduce((carry, item) => {
  carry.push(item.textContent.trim())
  return carry;
}, []);

var anim;
var targets;

function prepQuestion() {
  $("#questions").text(questions[question]);

  var textWrappers = document.querySelectorAll('#questions');
  textWrappers.forEach(textWrapper => {
    textWrapper.innerHTML = textWrapper.textContent.replace(/(\S*)/g, m => {
      return `<span class="word">` +
        m.replace(/(-|)?\S(-|@)?/g, "<span class='letter'>$&</span>") +
        `</span>`;
    });
  });

  targets = Array.from(document.querySelectorAll('#questions .letter'));

  anim = anime.timeline()
    .add({
      targets: targets,
      scale: [3, 1],
      scaleY: [1.5, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 400,
      delay: (el, i) => 60 * i
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
      duration: 100,
      delay: (el, i) => 30 * i
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
#questions {
  font-weight: 900;
  font-size: 2.5em;
  font-family: rr;
}

#questions .letter {
  display: inline-block;
  line-height: 1em;
}

.word {
  white-space: nowrap;
}
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.0/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<div class="quiz">The color of the sky is...?</div>
<div class="quiz">Paper comes from...?</div>
<div class="quiz">How many hours in a day?</div>
<div class="quiz">A Giraffe is a fish?</div>

<div id="questions"></div>
<br>
<Button id="rc" onclick="next()">Next</Button>
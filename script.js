//Code for the drop-down FAQ
let toggles = document.getElementsByClassName("toggle1");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

var button1 = $("toggle1");
button1.on("click", dropdown);

function dropdown() {
  for(let i=0; i<toggles.length; i++) {
  toggles[i].addEventListener("click", ()=>{
    if(parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "gold";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    }
    else{
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for(let j=0; j<contentDiv.length; j++) {
      if(j!==i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
  }
}

//Dropdown code ends here!
//Form code starts here!
var secretContainer = $(".secretContainer");
var submitButton = $("input[type='button']");
submitButton.on("click",giveResources);
function giveResources(){
  secretContainer.empty();
  var q1value = $("input[name = 'q1']:checked").val(); //finding which one was checked in question one
  var q2value = $("input[name = 'q2']:checked").val();
  var q3value = $("input[name = 'q3']:checked").val();
  var q4value = $("input[name = 'q4']:checked").val();
  var q5value = $("input[name = 'q5']:checked").val();
  var q6value = $("input[name = 'q6']:checked").val();
  var q7value = $("input[name = 'q7']:checked").val();
  var q8value = $("input[name = 'q8']:checked").val();
  var q9value = $("input[name = 'q9']:checked").val();
  var q10value = $("input[name = 'q10']:checked").val();
  secretContainer.append(`<h2>Based on your answers, we think you should study</h2>`)
  if(q1value === "Yes" || q1value === "Sometimes"){
    secretContainer.append(`<h2>geometry! Here are some links for you:</h2>  <a href="https://schoolyourself.org/learn/geometry" class="sourcelinks"> Interactive geometry lessons</a>
      <a href="https://www.youtube.com/c/ProfessorLeonard/videos" class="sourcelinks"> Youtube channel helpful for learning concepts </a>
      <a href="https://schoolyourself.org/learn/geometry" class="sourcelinks"> Interactive geometry lessons</a>`);
  }
  if(q2value === "Yes" || q2value === "Sometimes"){
    secretContainer.append(`<h2>english! Here are some links for you:</h2><a href="https://grammar.yourdictionary.com/spelling-and-word-lists/spelling-rules.html" class="sourcelinks">
            Spelling rules</a>
          <a href="https://www.education.com/games/spelling/?msclkid=30c3e94f7b49182796658ba5a687ef4f&utm_source=bing&utm_medium=cpc&utm_campaign=Search%20-%20Games%20-%20Exact&utm_term=fun%20spelling%20games&utm_content=Spelling%20Games"
            class="sourcelinks"> Simple spelling games </a>`);
  }
  if(q3value === "Yes" || q3value === "Sometimes"){
    secretContainer.append(`<h2>biology! Here are some links for you:</h2>  <a href="https://www.khanacademy.org/science/ap-biology" class="sourcelinks">Advanced Biology Concepts </a>
      <a href = "http://www.bozemanscience.com/biology-main-page" class="sourcelinks">Biology Videos With Examples</a>
       <a href = "http://www.bozemanscience.com/ap-biology" class="sourcelinks">More Complex Biology Videos With Examples</a>
      <a href = "https://www.tests.com/practice/biology-exam" class="sourcelinks">Test What You Know!</a>`);
  }
 if(q4value === "Yes" || q4value === "Sometimes"){
    secretContainer.append(`<h2>chemistry! Here are some links for you:</h2>   <a href="https://www.youtube.com/watch?v=bka20Q9TN6M" class="sourcelinks" >Simple explanation </a>
        
  <a href="https://www.youtube.com/watch?v=-KfG8kH-r3Y&list=PL0o_zxa4K1BWziAvOKdqsMFSB_MyyLAqS" class="sourcelinks">Chemistry Simple Playlist(long videos)</a>
      <a href = "https://www.youtube.com/watch?v=ZuWa827qAao&list=PLybg94GvOJ9EbbO2RXPWTUNIIE0C7hSfm" class="sourcelinks>Chemistry Simple Playlist(short videos)   "</a>
       <a href = "https://smhs-honchem.weebly.com/problem-sets.html" class="sourcelinks">Concept Practice</a>
      <a href = "https://www.khanacademy.org/science/organic-chemistry" class="sourcelinks">Organic Chem!</a>`);
  }
  if(q5value === "Yes" || q5value === "Sometimes"){
    secretContainer.append(`<h2> world history! Here are some links for you:</h2><a href="https://www.youtube.com/c/SteveHeimler/playlists" class="sourcelinks"> A youtube channel all about World History!</a>
        <a href="https://www.varsitytutors.com/world_history-practice-tests" class="sourcelinks"> Free practice tests to test learning</a>
        <a href="https://www.khanacademy.org/humanities/world-history" class="sourcelinks"> Khan Academy Videos about world history </a>
      <a href="https://sheg.stanford.edu/history-lessons" class="sourcelinks"> Stanford University History Lessons </a>`);
  }
  if(q6value === "Yes" || q6value === "Sometimes"){
    secretContainer.append(`<h2>physics! Here are some links for you:</h2>  <a href="https://www.youtube.com/watch?v=JvSClZ3vHOI" class = "sourcelinks">Simple explanation</a>
        
  <a href="https://stacker.com/stories/3640/15-basic-physics-concepts-help-you-understand-our-world" class = "sourcelinks">Important Physics Concepts</a>
      <a href = "https://www.khanacademy.org/science/physics" class = "sourcelinks">Detailed Explanations Of Physics Concepts</a>`);
  }
  if(q7value === "Yes" || q7value === "Sometimes"){
    secretContainer.append(`<h2>algebra! Here are some links for you:</h2> <a href="https://youtu.be/ZtsMI9yyTuo" class="sourcelinks"> A youtube video that explains algebra in 30 mins</a>
        <a href="https://www.khanacademy.org/math/algebra-basics" class="sourcelinks"> Khan Academy's algebra basics course</a>
        <a href="https://www.mathsisfun.com/algebra/introduction.html" class="sourcelinks"> Introduction to algebra using puzzles </a>
      <a href="https://www.cuemath.com/algebra/linear-equations/" class="sourcelinks"> Linear equations </a>`);
  }
  if(q8value === "Yes" || q8value === "Sometimes"){
    secretContainer.append(`<h2>spanish! Here are some links for you:</h2> <a href="https://www.tellmeinspanish.com/vocab/thank-you-in-spanish/" class="sourcelinks"> Expressing
            thankfulness</a>
          <a href=" https://www.tellmeinspanish.com/vocab/congratulations-in-spanish/" class="sourcelinks">
            Congradulating people </a>
          <a href=" https://www.tellmeinspanish.com/mexico/how-to-order-food/" class="sourcelinks"> Ordering food </a>
          <a href=" https://www.tellmeinspanish.com/grammar/how-to-buy-in-spanish/" class="sourcelinks"> Shopping <a>
              <a href="https://www.tellmeinspanish.com/grammar/how-to-buy-in-spanish/https://www.tellmeinspanish.com/vocab/introduce-in-spanish/"
                  <a href=" https://www.spanish.academy/blog/1000-most-common-spanish-words-for-beginners/> Common words <a>
          <a href="https://www.spanish.academy/blog/a-complete-spanish-pronunciation-guide-for-beginners/" class="sourcelinks">Pronounciation guide</a>
          <a href="https://www.tellmeinspanish.com/spanish-grammar-guide/" class="sourcelinks">Grammar guide </a>
          <a href="https://studyspanish.com/pronunciationhttps://studyspanish.com/grammar/lessons/genoun2" class="sourcelinks"> Learn both together </a>`);
  }
  if(q9value === "Yes" || q9value === "Sometimes"){
    secretContainer.append(`<h2>history! Here are some links for you:</h2> <a href="https://www.youtube.com/c/SteveHeimler/playlists" class="sourcelinks"> Playlists with detailed info about U.S. History </a>
      <a href="https://www.varsitytutors.com/us_history-practice-tests" class="sourcelinks"> Free practice tests for US History </a>
      <a href="https://www.khanacademy.org/humanities/us-history" class="sourcelinks"> Khan Academy Videos about U.S. History</a>
      <a href="https://www.choices.edu/?gclid=CjwKCAjw3K2XBhAzEiwAmmgrAgID4h2EX9QMfHMd0XsriLomfxZUAFJCI2RlwSzmame3JjiWVY6RdhoCFjgQAvD_BwE" class="sourcelinks"> Brown University U.S. History Lessons</a><a href="https://www.history.com/topics/native-american-history" class="sourcelinks"> Timeline and Information about Native Americans</a>
        <a href="https://www.britannica.com/topic/American-Indian" class="sourcelinks"> Tribes and History of American Indians</a>`);
  }
  if(q10value === "Yes" || q10value === "Sometimes"){
    secretContainer.append(`<h2>vocab! Here are some links for you:</h2><a href="https://www.education.com/games/spelling/?msclkid=30c3e94f7b49182796658ba5a687ef4f&utm_source=bing&utm_medium=cpc&utm_campaign=Search%20-%20Games%20-%20Exact&utm_term=fun%20spelling%20games&utm_content=Spelling%20Games"
            class="sourcelinks"> Simple spelling games </a>`);
  }
}

let newDoc = function () {
    $('body').replaceWith( 
        
        
        `<header id="docHeader">
        <section id="docTitle">
         <img src="images/docs_48dp.png" placeholder="docs" />
         <input type="text" placeholder="Untitled document" />
         <ul id="options">
             <li><button class="mainOption">File</button></li>
             <li><button class="mainOption">Edit</button></li>
             <li><button class="mainOption">View</button></li>
             <li><button class="mainOption">Insert</button></li>
             <li><button class="mainOption">Format</button></li>
             <li><button class="mainOption">Tools</button></li>
             <li><button class="mainOption">Table</button></li>
             <li><button class="mainOption">Add-Ons</button></li>
             <li><button class="mainOption">Help</button></li>
             <li><p id="status" class="nochange" contenteditable="false"></p></li>
           </ul>
        </section>
        <section id="styleOpt">
          <span></span>
          <span></span>
          <span></span>
        </section>
   </header>
    <main id="docSection">  
        <div id="measure"></div>
        <div class="docArea" id="docArea" contenteditable="true" onkeydown="deleteSelec(event)"></div>
     </main>
 
     ` );
}



$('#newPlus').on('click', newDoc);

// function used to autosave user input
autoSave = (function () {

  timer = null;

  // function to get user input from the text area
  function userInput() {
      element = document.getElementsByClassName("docArea")

      if (element.length <= 0)
          return null;

      return element[0];


  }

  // function to save user input from the text area
  function save() {
      doc = userInput();
      if (doc) {
          localStorage.setItem("autoSave" + document.location, doc.value)
      }
      $('#status').text('All Changes Saved!');
  }

  // function to restore user input from the text area on reload
  function restore() {
      saved = localStorage.getItem("autoSave" + document.location)
      doc = userInput();
      if (saved && doc) {
          doc.value = saved;
      }
  }

  return {
      // function to start autosave timer
      start: function () {
          doc = userInput();
          restore();
         
              timer = null;
          

          timer = setInterval(save, 5000);
          $('#status').text('Saving...');
      }
  }
}())

// Starting the autosave function
$(document).keydown(function () {
  autoSave.start()
})


// function to delete saved user input 
function deleteSelec(event) {
  if (event.keyCode === 8) {
      document.execCommand("delete");
  }
}

//font family selection
const theFont = function(){
    let selFont = $('#thefonts').val();
    selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt){
        range = selection.getRangeAt(0);
    }

    document.designMode = "on";
    if (range){
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("fontName", false, selFont);
    document.designMode = "off";
}

//font color selection
const theColor = function(){
    let selColor = $('#fontcolor').val();
    selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt){
        range = selection.getRangeAt(0);
    }

    document.designMode = "on";
    if (range){
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("ForeColor", false, selColor);
    document.designMode = "off";
}

//font size selection
const theSize = function(){
    let selSize = $('#fontsize').val();
    selection = window.getSelection();
    if (selection.rangeCount && selection.getRangeAt){
        range = selection.getRangeAt(0);
    }

    document.designMode = "on";
    if (range){
        selection.removeAllRanges();
        selection.addRange(range);
    }
    document.execCommand("fontSize", false, selSize);
    document.designMode = "off";
}

$('select[name="fontdown"]').change(theFont);
$('select[name="colordown"]').change(theColor);
$('select[name="sizedown"]').change(theSize);

// function used to autosave user input
autoSave = (function () {


    timer = null;
  
    // function to get and save user input from the text area
    function save() {
        element = document.getElementsByClassName("title")
        title = element[0]
         input = $('#docAreaText').map(function(){return $('#docArea').html() }).get();
        doc = input[0]
        
        if (doc || title) {
              localStorage.setItem("autoSave" + document.location, title.value + doc)
        console.log(title.value + doc)
        }
        $('#status').text('All Changes Saved!');
    }
  
    // function to restore user input from the text area on reload
    function restore() {
        saved = localStorage.getItem("autoSave" + document.location)
        doc = $('#docAreaText').map(function(){return $('#docArea').html() }).get();
        element = document.getElementsByClassName("title")
        output = doc[0] + element
        if (saved && output) {
            
            //  $('#docArea').append(output);
        }
    }
  
    return {
        // function to start autosave timer
        start: function () {
            
            restore();
           
                timer = null;
            
  
            timer = setInterval(save, 5000);
            $('#status').text('Saving...');
        }
    }
  }())
  
  // Starting the autosave function
  
  $(document).ready(function () {
    autoSave.start()
  })
  
  $(document).keypress(function () {
    autoSave.start()
  })
  
  
  // function to delete saved user input 
  function deleteSelec(event) {
    if (event.keyCode === 8) {
        document.execCommand("delete");
    }
  }


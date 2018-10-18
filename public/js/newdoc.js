
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

    // function to get user input from the text area
    function userInput() {
        element = document.getElementsByClassName('textarea')

        if (element.length <= 0)
            return null;
            
        return element[0];


    }

    // function to save user input from the text area
    function save() {
        doc = userInput();
        if (doc) {
            localStorage.setItem('autoSave' + document.location, doc.value);
            $.ajax({ url: '/add', method: 'POST'})
        }
        $('#status').text('All Changes Saved!');
    }

    // function to restore user input from the text area on reload
    function restore() {
        saved = localStorage.getItem('autoSave' + document.location)
        console.log(saved)
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
            $('#textarea').keypress(function () {
                timer = null;
                $('#status').text('Saving...');
            });

            timer = setInterval(save, 2000);

        }
    }
}())

// Starting the autosave function
$(document).keypress(function () {
    autoSave.start()
})

$(document).ready(function () {
    autoSave.start()
})


// function to delete saved user input 
function deleteSelec(event) {
    if (event.keyCode === 8) {
        document.execCommand('delete');
    }
}
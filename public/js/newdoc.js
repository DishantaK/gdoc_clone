
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


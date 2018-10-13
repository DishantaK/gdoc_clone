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
           </ul>
        </section>
        <section id="styleOpt">
        <span>
            <select id='thefonts' name=fontdown>
                <option value="K2D">Select Font</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier">Courier</option>
                <option value="Georgia">Georgia</option>
                <option value="Charmonman">Charmonman</option>
                <option value="Kodchasan">Kodchasan</option>
            </select>
        </span>
        <span>
            <select id='fontcolor' name=colordown>
                <option value="black">Select Font Color</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
            </select>
        </span>
        <span>
            <select id='fontsize' name=sizedown>
                <option value= 3>Select Font Size</option>
                <option value= 2>x.5</option>
                <option value= 4>x2</option>
                <option value= 5>x3</option>
                <option value= 6>x4</option>
                <option value= 7>x5</optoin>
                </select>
        </span>
        </section>
   </header>
    <main id="docSection">  
        <div id="measure"></div>
        <div id="docArea" contenteditable="true"></div>
     </main>
 
     ` );
     $('select[name="fontdown"]').change(theFont);
     $('select[name="colordown"]').change(theColor);
     $('select[name="sizedown"]').change(theSize);


}


$('#newPlus').on('click', newDoc);

//font family
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

//font color
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

//font size
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
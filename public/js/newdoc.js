let newDoc = function () {
    $('body').replaceWith( 

        `
        <header id="docHeader">
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
          <span></span>
          <span></span>
          <span></span>
        </section>
   </header>
    <main id="docSection">  
        <div id="measure"></div>
        <div id="docArea"></div>
     </main>
     
     ` 
    );
}


$('#newPlus').on('click', newDoc);
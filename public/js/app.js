let newDoc = function () {
    $('body').replaceWith( 
        
        
        `<header id="docHeader">
        <section id="docTitle">
         <img src="images/docs_48dp.png" placeholder="docs" />
         <input type="text" placeholder="Untitled document" />
         <ul id="options">
             <li>File</li>
             <li>Edit</li>
             <li>View</li>
             <li>Insert</li>
             <li>Format</li>
             <li>Tools</li>
             <li>Table</li>
             <li>Add-Ons</li>
             <li>Help</li>
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
 
     ` );
}



$('#newPlus').on('click', newDoc);
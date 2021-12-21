
let toolsCont = document.querySelector(".tools-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");
let optionsCont = document.querySelector(".options-cont");
let sticky = document.querySelector(".stickynote");
let upload = document.querySelector(".upload");
let optionsFlag = true;
let pencilFlag = false;
let eraserFlag = false;


// true -> tools show, false -> hide tools
optionsCont.addEventListener("click", (e) => {
    optionsFlag = !optionsFlag;

    if(optionsFlag) 
       openTools();
    else
       closeTools();   
})

function openTools() {
   let iconEle = optionsCont.children[0];
   iconEle.classList.remove("fa-times");
   iconEle.classList.add("fa-bars");
   toolsCont.style.display = "flex";
   
}

function closeTools() {
    let iconEle = optionsCont.children[0];
    iconEle.classList.remove("fa-bars");
    iconEle.classList.add("fa-times");
    toolsCont.style.display = "none";

    pencilToolCont.style.display = "none";
    eraserToolCont.style.display = "none";
}

pencil.addEventListener("click", (e) => {
   // true -> show pencil tool, false -> hide pencil tool
   pencilFlag = !pencilFlag;

   if (pencilFlag) 
      pencilToolCont.style.display = "block";
    else 
      pencilToolCont.style.display = "none";
   
})
eraser.addEventListener("click", (e) => {
   // true -> eraser tool, false -> hide eraser tool
   eraserFlag = !eraserFlag;

   if (eraserFlag) 
      eraserToolCont.style.display = "flex";
    else 
      eraserToolCont.style.display = "none"; 
})

upload.addEventListener("click", (e) => {
   // to open file explorer
   let input = document.createElement("input");
   input.setAttribute("type", "file");
   input.click();

   input.addEventListener("change", (e) => {
      let file = input.files[0];
      let url = URL.createObjectURL(file);

      let stickyTemplateHTML = `
      <div class="header-cont">
      <div class="minimize"></div>
      <div class="remove"></div>
      </div>
      <div class="note-cont">
           <img src = '${url}'>
      </div>  
      `;
      createSticky(stickyTemplateHTML);
   })
   
})


sticky.addEventListener("click", (e) => {
     
     let stickyTemplateHTML = `
       <div class="header-cont">
         <div class="minimize"><i class="fas fa-minus"></i></div>
         <div class="remove"><i class="fas fa-times"></i></div>
       </div>
       <div class="note-cont">
          <textarea spellcheck="false"></textarea>
       </div>
     `;
     createSticky(stickyTemplateHTML);
      
})

// Create Sticky
function createSticky(stickyTemplateHTML){
   
   let stickyCont = document.createElement("div");
   stickyCont.setAttribute("class", "sticky-cont");
   stickyCont.innerHTML = stickyTemplateHTML;
   
   // append sticky note to body
   document.body.appendChild(stickyCont);

   let minimize = stickyCont.querySelector(".minimize");
   let remove = stickyCont.querySelector(".remove");
   noteAction(minimize, remove, stickyCont);

   stickyCont.onmousedown = function (event) {
      dragAndDrop(stickyCont, event);
   };

   stickyCont.ondragstart = function () {
      return false;
   };
}

// Make NoteAction
function noteAction(minimize, remove, stickyCont){
   minimize.addEventListener("click", (e) => {
      let noteCont = stickyCont.querySelector(".note-cont");
      let display = getComputedStyle(noteCont).getPropertyValue("display");
      if(display === "none"){
         noteCont.style.display = "block";
      } else {
         noteCont.style.display = "none";
      }
   })
   remove.addEventListener("click", (e) => {
      stickyCont.remove();
   })
}

// Drag and Drop
function dragAndDrop(element, event){
  let shiftX = event.clientX - element.getBoundingClientRect().left;
  let shiftY = event.clientY - element.getBoundingClientRect().top;

 element.style.position = 'absolute';
 element.style.zIndex = 1000;

  moveAt(event.pageX, event.pageY);

  // moves the element at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    element.style.left = pageX - shiftX + 'px';
    element.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the element on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // drop the element, remove unneeded handlers
 element.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    element.onmouseup = null;
  };

}

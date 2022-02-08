//1. so meri pehli operation hai, pehle + button ko click kiya to modal ana chahiye to muje pehle + button ka access chahiye

// 1.1 + button ka access lenge
let addBtn = document.querySelector(".add-btn");

//4.2 remove karneki button
let removeBtn = document.querySelector(".remove-btn");

// 1.5 modal ka container ko select karenge tabki use kr paye
let modalCont = document.querySelector(".modal-cont");

// 2.1 maincontainer ko select karenge
let mainCont = document.querySelector(".main-cont");

//2.3 textarea container chahiye hoga modal hat jane ke bad text bhi jana chahiye
let textareaCont = document.querySelector(".textarea-cont");// yahi text fir ticketgenerate mai bhi pass krna hai

//3.1 priority colors change karne keliye hume sare priority colors ki access chahiye
let allPriorityColors = document.querySelectorAll(".priority-color");

//6. navbar mai jo colors hai uske toolbox, iske andar likhunga mai apni color wali class, ab har ek color ke upar ek eventlistener lagana hai ki jab bhi tumnpe koi click kare to tum uss hisab se filtering karke tickets display karo
let toolBoxColors = document.querySelectorAll(".color");

//3. abhi task hai muje apne priority ki color hai woh by default ek color rhe aur mai priority vary krta rahu to uss hisab se meri priority change hoti rhe aur fir woh color meri ticket pe attach hojaye
//so pehle listout krlete hai
let colors = ["lightpink", "lightblue", "lightgreen", "black"];
//fir hume apni default color add krni hai to use access karenge
let modalPriorityColor = colors[colors.length - 1];

// 1.3 modal ko togle krte rehna hoga clicking karne pe isliye flag rakhenge
let addFlag = false;
//4. remove key press karne ke bad woh active honi chahiye aur firse press kanre pe deactive honi chahiye islye yeh flag remove wali
let removeFlag = false;

//4.6 lock unlock ke icons
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

//6.2 tickets ka array, sabhi jo tickets humare pas hai unka array
let ticketsArr = [];

//7.5 agar local storage ke andar hai meri jira ki tickets to 
if (localStorage.getItem("jira_tickets")) {
    // Retrieve and display tickets
    ticketsArr = JSON.parse(localStorage.getItem("jira_tickets")); //humne string mai kiya tha data ko so yara parse karna padega then iss data ko tickets ki array mai store kardenge
    //isme ajayega ek tickets ki object
    ticketsArr.forEach((ticketObj) => {
        createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID);
    })
}

//6.1 sare colors pe loop lagake unpe event listeners lagayenge
for (let i = 0; i < toolBoxColors.length; i++) {
    //isme access karenge color
    toolBoxColors[i].addEventListener("click", (e) => {
        let currentToolBoxColor = toolBoxColors[i].classList[0]; //yeh humara current color hai
        
        //filtering krne se pehle sari tickets pe loop lagake uskeuparse filterout karna hoga
        //6.3
        let filteredTickets = ticketsArr.filter((ticketObj, idx) => { //yeh muje return karega apni filtered tickets, user ko jis color ki demand hai woh agar == hota hai tickets object ke ticketcolor ke jo equal hoga to woh object return hojayega
            return currentToolBoxColor === ticketObj.ticketColor;
        }) //woh return karega ek object ko

        // Remove previous tickets, mere jo previous tickets hai unko remove karna padega tabhi aap apni filtered tickets ko display karane ka usecase hoga
        let allTicketsCont = document.querySelectorAll(".ticket-cont");
        for (let i = 0; i < allTicketsCont.length; i++) {
            allTicketsCont[i].remove(); //meri jo ticket hai woh remove hojayegi
        }
        // Display new filtered tickets
        filteredTickets.forEach((ticketObj, idx) => {
            //ab mai ticket create krta hu, ab mere pas apne tickeObject mai id bhi hai, apni color bhi hai aur apni task bhi hai
            createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID);
        })
    })
    
    //6.3 
    toolBoxColors[i].addEventListener("dblclick", (e) => {
        // Remove previous tickets
        let allTicketsCont = document.querySelectorAll(".ticket-cont");
        for (let i = 0; i < allTicketsCont.length; i++) {
            allTicketsCont[i].remove();
        }

        ticketsArr.forEach((ticketObj, idx) => { //iske bad create karenge apni ticket ko
            createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketID);
        })
    })
}

//3.2 Listener for modal priority coloring, for each loop lagayenge
allPriorityColors.forEach((colorElem, idx) => {
    //jobhi meri color element hai mai usme listener lagaunga jo color hai uspe border to lagaunga usse pehle jitne bhi baki priority color hai unn sabhise border wali class hata denge, jiske upar bhi apna border laga hua hai unko clear krdeta hu
    colorElem.addEventListener("click", (e) => { 
        allPriorityColors.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border"); //jitne bhi priority color elements ke class list mese remove karunga apni border wali class
        })
        //sabhiko maine remove krdiya tha ab final woh element bachta hai jispe user ne click kiya tha
        colorElem.classList.add("border"); //so uss color pe add kardunga border nam ka class

        modalPriorityColor = colorElem.classList[0]; //modal ki priorit color will be this color, yahi paremeter mai pass karunga generate ticket mai
    })
})

// 1.2 add button pe event listener add karenge 
// event listener click ka aur event ki object (e) aur callback
addBtn.addEventListener("click", (e) => {
    // jab bhi add button pe click ho to modal ajana chahiye aur fir ticket generate hogi
    // Display Modal
    // Generate ticket

    // AddFlag, true -> Modal Display
    // AddFlag, False -> Modal None
    addFlag = !addFlag;

    // 1.4 addflag agar true rahega to muje modal ko display karana hai
    if (addFlag) { //addFlag agar true hai to to modalke container pe display value ko flex krdo
        modalCont.style.display = "flex";  
    }
    else {
        modalCont.style.display = "none";
    }
})

//4.3 yaha ajayega click ka event listener
removeBtn.addEventListener("click", (e) => {
    //jab bhi aap remove button ko click karenge to removeflag ko toggle krte rahenge
    removeFlag = !removeFlag;
    console.log(removeFlag);
})

//2.1 jab bhi shift kare to ek ticket generate krke usko add krdo 
modalCont.addEventListener("keydown", (e) => {
    let key = e.key; //iss humari pas key ajayegi
    if (key === "Shift") { //agar jo key press ki woh equal hai shift ke to iske andar ek ticket ko create krdo aur uss ticket ko yahise add krdo
        createTicket(modalPriorityColor, textareaCont.value); //yahi id bhi karenge
        addFlag = false;//aur addFlag ko false krdena chahiye
        setModalToDefault(); //jaisehi shift key press hogi to modal container ko hatana padega aur text ko bhi hatana padega
    }
})

// 2. iska kam hoga ek ticket ko create krne ka
function createTicket(ticketColor, ticketTask, ticketID) { //isme 3 parameters aa rhe mere pas inko mai code mai inject krdunga

    //unique id ko generate karne keliye ek external library ko use karunga
    let id = ticketID || shortid(); //shortid function se mere pas ek unique id create hojayegi. iska meaning is agar ticketID already hai to kyu generate karna ussi ticket ko use krdo
    //jab bhi meri ticketID undefined hogi iska matlab yahi hai ki mai new ticket generate kr rha hu

    let ticketCont = document.createElement("div");
    //iss ticketcontainer ke upar ek class laga dunga
    ticketCont.setAttribute("class", "ticket-cont");
    // innerHTML ke help apki jo code rahegi usko directly inject kr skte ho
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fas fa-lock"></i>
        </div>
    `;
        // lock ki icon lelenge font awesome se
    //then muje main container ke andar add karna hoga apne ticket ko
    mainCont.appendChild(ticketCont);
    //jab bhi koi shift click kare to ticket generate hona chahiye iske liye ek aur listener create karenge, see 2.1

    //6.3 ticket generate ki to isko ticketArr mai dal denge
    // Create object of ticket and add to array
    if (!ticketID) { //to mai push tabhi karunga jab meri ticketID nhi hai tab aap push kare apni new ticket ki details ko
        ticketsArr.push({ ticketColor, ticketTask, ticketID: id }); //jab bhi aap ticket create karoge to yeh 3 parameters ticketsArr ke andar dal denge. ticketid ke samne likhenge id jisko humne generate kiya.
        //7. local storage humare pas globally available rahega setItem krte hue mai apne key ka nam rakhunga jira_tickets aur meri value hogi tickets ka array, yeh array object hai but apko string form mai hi dalna hai 
        localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
        //yeh string form mai convert hoke apni jagah pe local storage mai jira_tickets ki jagah pe yeh data store hojayegi
    }  
    console.log(ticketsArr);
    //4 jab bhi ticket create karoge to uspe functionality add krdenge usliye call karenge
    handleRemoval(ticketCont, id);//imse apni ticket ki container ko bhej denge
    //4.4 jab ticket banayi tabhi lock aurcolor bhi handlo hone chahiye
    handleLock(ticketCont, id);
    handleColor(ticketCont, id);
}

//4.1 ticket ko handle krneki
function handleRemoval(ticket, id) {
    //4.4 gar removeFlag true hai to remove krdo
    // removeFlag -> true -> remove
    ticket.addEventListener("click", (e) => {
        if (!removeFlag) return;

        let idx = getTikcetIdx(id); //7.4 muje mila ticket ka index
        //mere pas tickets ka array pda hai jo muje local storage se milgya tha ko current state tha

        // DB removal
        ticketsArr.splice(idx, 1); //spliace means woh array mese value ko remove krdega, jis value ko remove krna hai uss value ko remove krdega yahape mai index bhejunga iss value ko
        //abjo tickets array hai usko string mai badalna hai
        let strTicketsArr = JSON.stringify(ticketsArr);
        localStorage.setItem("jira_tickets", strTicketsArr); //ab muje set karna hai apni local storage mai
        
        ticket.remove(); //UI removal, UI pe bhi removal kiya 
    })
}

//4.5 
function handleLock(ticket, id) {
    // mere pas ticket aayeig muje select krna haiu uska lock taki mai uss listener pe yeh lister laga saku
    let ticketLockElem = ticket.querySelector(".ticket-lock"); //yeh hgyi ticketlock ki element, class hogi ticket-lock
    //is lock ke upar aap jab bhi click karo iske andar ek child hai lock to usko access krlenge
    let ticketLock = ticketLockElem.children[0];
    //then iss lock ke upar listener laga denge

    let ticketTaskArea = ticket.querySelector(".task-area"); //4.5 edit wali feature ki lock unlock karne ke bad task ko eidt karneka feature

    ticketLock.addEventListener("click", (e) => {
        let ticketIdx = getTikcetIdx(id); //ticket ki index milgyi ab yeh help karegi local storage mai

        if (ticketLock.classList.contains(lockClass)) { //agar uski class list lock contain krti hai to, lock hai to muje isko unlock karna hoga
            //so pehla kam hai ki lock ko remove krdo aur fir unlock ko add krdo
            ticketLock.classList.remove(lockClass);
            ticketLock.classList.add(unlockClass);
            ticketTaskArea.setAttribute("contenteditable", "true"); //yahape aap unlock kr rhe ho to aap edit wali feature doge
        }
        else { //agar woh unlocked hai to use lock krdo
            ticketLock.classList.remove(unlockClass); //yaha unlock wali class ko remove krdo
            ticketLock.classList.add(lockClass);//aur lock wali class ko add kardenge
            ticketTaskArea.setAttribute("contenteditable", "false"); //yahape aap lock kr rhe ho to aap edit wali feature false kardenge
        }

        //7.3 ab Modify data in localStorage (Ticket Task) bhi karna hoga apni ticket ki task ko isliye bhi pehle apko index lana hoga
        ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText; //ticketski array mai ticket ke index ke upar iske through muje woh object miljyega 
        //iske bad apka data modify ho chuka hai apni current jagah pe lekin apko apne database mai modify karna hai
        localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
    })
}

//4.6 ab implement karna hai ticket ke upar jo color hai usko click kiya to change hona chahiye
function handleColor(ticket, id) {
    let ticketColor = ticket.querySelector(".ticket-color"); //ticket color aagya
    //ab muje pta karna hoga ispe current color kya hai uske hisab se mai apni next color ko add karpaunga
    ticketColor.addEventListener("click", (e) => { //agar usko color change karna hai means woh color pe click karega
        
        //7.1 Get ticketIdx from the tickets array
        let ticketIdx = getTikcetIdx(id);//mere ticket ki id pass kari, woh functions iss id ko array mai dhundke apne perfect index ko muje lake de

        let currentTicketColor = ticketColor.classList[1]; //yeh mere ticket ka current color
        // Get ticket color idx
        let currentTicketColorIdx = colors.findIndex((color) => { //color nam ke array mai jitne bhi colors hai sare one bye one ayenge
            return currentTicketColor === color;  //agar currentticketColor aur color equal hai means muje meri index mil chuki hai jo element hai woh muje mil chuki hai
        })
        //muje current ticket ki color milgyi hai to meri agli wali color hogi currentTicketColorIdx++

        console.log(currentTicketColor, currentTicketColorIdx);
        currentTicketColorIdx++; //mere color ki index ++ hogyi
        let newTicketColorIdx = currentTicketColorIdx % colors.length; //++ krte krte woh array ke bahar ja skti hai so usko range mai laneke liye % use karenge
        let newTicketColor = colors[newTicketColorIdx]; //ab meri new ticket color hogi yeh
        //so ab jo purani wali ticketcolor this usko remove karna hog aur current wale ko add karna hoga
        ticketColor.classList.remove(currentTicketColor);
        ticketColor.classList.add(newTicketColor);

        //7.2maine yaha color to change karliya but yeh bat local storage ko nhi pta yeh bta muje pta hai to mujhei manipulate krna hoga database mai
        // Modify data in localStorage (priority color change)
        ticketsArr[ticketIdx].ticketColor = newTicketColor;//konsa ticket hai humne pta karliyaa aur jo ticketColor property hai usme mai laga deta hu new ticket color
        //isse tickets array mai change agya but local storage mai abhitak nhi aya so woh bhi karenge
        localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
    })
}

//2.2 modal
function getTikcetIdx(id) {
    //humare pas tickets array hai 
    let ticketIdx = ticketsArr.findIndex((ticketObj) => {
        return ticketObj.ticketID === id;
    })
    return ticketIdx;
}

//6.4 modal ko default pe set karne keliye function
function setModalToDefault() {
    modalCont.style.display = "none";
    textareaCont.value = "";
    modalPriorityColor = colors[colors.length - 1];
    //modal ke andar ke sare colours pe loop lagayenge
    allPriorityColors.forEach((priorityColorElem, idx) => {
        priorityColorElem.classList.remove("border"); //apni border ki property ko remove kardenge
    })
    allPriorityColors[allPriorityColors.length - 1].classList.add("border"); //aur jo last color tha black uspe priority add krdi
    
}

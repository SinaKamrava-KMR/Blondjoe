const nav = document.querySelector(".category-wrapper");
const navTags = document.querySelectorAll(".category-wrapper .tag");
const filterTitle =document.querySelectorAll(".filter-wrapper .title")
const tabsContainer = document.getElementById("tabs-wraperr");
const tabs = document.querySelectorAll(".tabs .item");
const tabLine = document.querySelector(".tabs .line");

tabs.forEach(item => {
  item.addEventListener("click", () => {
    resetTabs();
    item.classList.toggle("active")
    setLine(item);
  })
})


window.onresize = function (event) {
  tabs.forEach(item => {
    if (item.classList.contains("active")) {
      setLine(item);
      return;
    }
  })
  
};

filterTitle.forEach(title => {
  title.addEventListener("click", () => {
    title.classList.toggle("clicked")
  })
})

navTags.forEach(tag => {
  tag.addEventListener("click", () => {
    resetTags()
    tag.classList.toggle("tagActive")
  })
})


let isMouseDown = false;
let clickedX = 0;
nav.addEventListener("mousedown", (e) => {
  clickedX=e.screenX
  isMouseDown = true;
})
nav.addEventListener("mouseup", () => {
  isMouseDown = false;
})

nav.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    let elm = e.target.closest(".category-wrapper");
    

    let x = ((clickedX - e.screenX).toFixed(0));

   elm.style.transform=`translateX(${x}px)`
  }
});


function resetTags() {
  navTags.forEach(tag => {
    tag.classList.remove("tagActive")
  })
}
function resetTabs() {
  tabs.forEach(tag => {
    tag.classList.remove("active")
  })
}




function setLine(elm) {
  let containerX = tabsContainer.getBoundingClientRect().x;
  let targetx = 0
  let globalTargetX = 0;
  let centerOfTarget = 0;
  let centerOfLine = 0;
 
  globalTargetX = elm.getBoundingClientRect().x;
  targetx = globalTargetX - containerX;
  centerOfTarget = targetx + ((elm.offsetWidth) * .5);
  centerOfLine = (tabLine.offsetWidth) * .5;
  tabLine.style.transform =`translateX(${centerOfTarget-centerOfLine}px)`
  
}



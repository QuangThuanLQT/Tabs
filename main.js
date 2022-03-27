const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

setInterval(autoLoad, 3000);
let index = 0;
function autoLoad() {
  index == 3 ? index = 0 : index++;
  getIndex(index);
}

function getIndex(index) {
  $('.tab-pane.active').classList.remove('active');
  $('.tab-item.active').classList.remove('active');
  tabs[index].classList.add('active');
  panes[index].classList.add('active');
  line.style.left = tabs[index].offsetLeft + "px";
  line.style.width = tabs[index].offsetWidth + "px";
}

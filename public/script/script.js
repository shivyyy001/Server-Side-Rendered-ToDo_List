let ulTasks = $("#ulTasks");
let btnAdd = $("#btnAdd");
let btnReset = $("#btnReset");
let inpNewTask = $("#inpNewTask");
let btnCleanup = $("#btnCleanup");
let btnSort = $("#btnSort");
let listt=$(".list-group-item");

// function addItem() {
//   let listItem = $("<li>")
//     .attr("class", "list-group-item")
//     .text(inpNewTask.val());
//   if (listItem.text()) ulTasks.append(listItem);

//   listItem.click(() => {
//     listItem.toggleClass("done");
//   });

//   inpNewTask.val("");
//   toggleInputButtons();
// }

listt.click((event)=>{
    event.target.classList.add("done");
    inpNewTask.val("");
    toggleInputButtons();
});


function toggleInputButtons() {
  btnReset.attr('disabled',inpNewTask.val() == '');
  btnAdd.attr('disabled',inpNewTask.val() == '');
  btnSort.prop('disabled',ulTasks.children().length<1);
  btnCleanup.prop('disabled',ulTasks.children().length<1);

}

inpNewTask.keypress((e) => {
  if (e.which == 13) {
    addItem();
  }
});

inpNewTask.on("input", () => {
  toggleInputButtons();
});

// btnAdd.click(() => {
//   // let listItem = $("<li>", {
//   //   class: "list-group-item",
//   //   text: inpNewTask.val(),
//   // });

//   addItem();
// });

btnReset.click(() => {
  inpNewTask.val("");
  toggleInputButtons();
  
});

btnCleanup.click(() => {
  $(".done").remove();
  toggleInputButtons();
});

btnSort.click(() => {
  $(".done").appendTo(ulTasks);
});

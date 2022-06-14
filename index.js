/*function save() {
    console.log("save button clicked")//method 1 with---- onclick=save()
}*/

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn" )
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
//console.log(leadsFromLocalStorage)
const tabBtn = document.getElementById("tab-btn")

//localStorage.clear()
//console.log(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//const tabs = [
//   {url:"https://www.linkedin.com/in/per-harold-borgen/"}
//]
tabBtn.addEventListener("click", function(){
    //chrome.tabs.query({active:true, currentWindow:true}, function(){})
    //console.log(tabs[0].url)
      chrome.tabs.query({active:true, currentWindow:true}, function(){
          console,log(tabs)

          myLeads.push(tabs[0].url)
          localStorage.setItem("myLeads",JSON.stringify(myLeads))
          render(myLeads)
      })

})

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    //console.log(localStorage.getItem("myLeads"))
})


function render(leads){
    let listItems= ""
    for(let i=0; i<leads.length; i++){
       listItems += "<li><a target='_blank'href='" + leads[i] + "'>" + leads[i] + " " + "</a></li>"
       //console.log(myLeads[i])
    }
    ulEl.innerHTML = listItems
}








/*let boxBtn = document.getElementById("box")
boxBtn.addEventListener("click", function(){
    console.log("I want to open the box when it is clicked")
})*/

/*const welcomeEl = document.getElementById("welcome-el")

//  PARAMETERS
function greetUser(name,greeting){
    welcomeEl.textContent= `${greeting},${name}`
}
//  ARGUMENTS
greetUser("Paul", "hae")*/

/*function add(num1,num2){
    return num1+num2
  
}
console.log(add(3,4))
console.log(add(9,102)) */

/*function getFirst(arr){
    return arr[0]
}
console.log(getFirst([9,3,5]))*/
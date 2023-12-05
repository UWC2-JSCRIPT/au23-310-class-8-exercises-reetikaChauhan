const noticeEle = document.getElementById("maintenance-notice");
// get a dom hook inyo the notice div
// make a settimeout that has
// a call back function remove the notice div from dom
const removenotice = setTimeout(function(){
    noticeEle.remove()
}, 5000)
removenotice()
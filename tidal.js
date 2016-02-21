"use strict";
(function (w) {
  console.log("Tidal shortkeys", new Date());

  function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
      element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + eventName, callback);
    } else {
      element["on" + eventName] = callback;
    }
  }

  addEvent(document, "keydown", function (e) {
    e = e || window.event;
    if(e.code === "KeyS" && e.ctrlKey && e.shiftKey) {
      e.preventDefault();
      document.querySelector("[data-subview=search] input").focus();
    } else if(e.code === "KeyA" && e.ctrlKey && e.shiftKey) {
      e.preventDefault();
      document.querySelector("[data-subview=albums] [data-subview=items] div a").focus()
    } else {
      return true;
    }
  });




  w.setTimeout(function () {
    w.location.reload();
  }, 1000*60*15);
}(window));

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


  (function ensuraeSarchFieldi() {
    var searchField= document.querySelector("[data-subview=search] input");

    function focusSearchField (e) {
      e = e || window.event;
      if(e.code === "KeyS" && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        //document.querySelector("[data-subview=search] input").focus();
        searchField.focus();
      } else if(e.code === "KeyA" && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        document.querySelector("[data-subview=albums] [data-subview=items] div a").focus()
      } else {
        return true;
      }
    }

    if (searchField) {
      addEvent(searchField, "focus", function (e) {e.target.select();});
      addEvent(document, "keydown", focusSearchField);
    } else {
      setTimeout(ensuraeSarchFieldi, 15);
    }
  }());

}(window));

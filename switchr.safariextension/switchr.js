'use strict';
/*jslint browser:true */

var UP_KEY = 38,
  DOWN_KEY = 40,

  toggleHeaderAndSource = function () {
    var currentLocation = window.location.href,
      isSourceFile = window.location.pathname.substr(-2) === '.m',
      newLocation;
    if (isSourceFile) {
      newLocation = currentLocation.replace('.m', '.h');
    } else {
      newLocation = currentLocation.replace('.h', '.m');
    }
    window.location = newLocation;
  },

  viewingObjcFile = function () {
    return !!document.getElementsByClassName("type-objective-c")[0];
  };

window.onkeydown = function (event) {
  var code = event.keyCode || event.which;
  if (event.metaKey && event.ctrlKey
      && (code === DOWN_KEY || code === UP_KEY)) {
    if (viewingObjcFile) {
      toggleHeaderAndSource();
    }
  }
};

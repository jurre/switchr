'use strict';

var upKey   = 38,
    downKey = 40;

function currentPathExtension() {
  return window.location.pathname.substr(-2);
}

function viewingObjcFile() {
  return currentPathExtension() === '.m' || currentPathExtension() === '.h';
}

function toggleHeaderAndSource() {
  var isSourceFile = currentPathExtension() === '.m';
  var newLocation;
  if (isSourceFile) {
    newLocation = window.location.href.replace('.m', '.h');
  } else {
    newLocation = window.location.href.replace('.h', '.m');
  }
  window.location = newLocation;
}

window.onkeydown = function (event) {
    var code = event.keyCode ? event.keyCode : event.which;
    if (event.metaKey && event.ctrlKey && (code === downKey || code === upKey)) {
      if (viewingObjcFile()) {
        toggleHeaderAndSource();
      }
    }
};

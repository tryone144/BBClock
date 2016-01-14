chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('clock.html', {
    'outerBounds': {
      'width': 640,
      'height': 280
    }
  });
});
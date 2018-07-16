var granimInstance = new Granim({
  element: '#gradcanvas',
  direction: 'left-right',
  opacity: [1, .5, 0],
  isPausedWhenNotInView: false,
  states: {
    "default-state": {
      gradients: [
        ['#e76a8c', '#ff00ff'],
        ['#50cecd', '#00BFFF'],
        ['#ede235', '#FFFF00']
    ],
      transitionSpeed: 3000
    }
  }
});


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
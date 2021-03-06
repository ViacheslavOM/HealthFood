window.addEventListener('DOMContentLoaded', () => {
    
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          timer = require('./modules/timer'),
          cards = require('./modules/cards'),
          calc = require('./modules/calculator'),
          forms = require('./modules/forms'),
          slider = require('./modules/sliders');

    tabs();
    modal();
    timer();
    cards();
    calc();
    forms();
    slider();
});
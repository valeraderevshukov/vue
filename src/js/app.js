// import svg4everybody from 'svg4everybody';
// import './common';
// import { BODY, NO_TOUCH } from './constants';
// import { isTouch } from './utils';
// svg4everybody();

// if (!isTouch()) BODY.addClass(NO_TOUCH);


// import Vue from './lib/vue';
// window.Vue = Vue;

var app = new Vue({
  el: '#app',
  data: {
    items: [
      { 
        name: 'Иван',
        surname: 'Иванов',
        patronymic: 'Иванович',
        avatar: 'https://via.placeholder.com/150x150'
      },
      { 
        name: 'Петр',
        surname: 'Иванов',
        patronymic: 'Иванович'
      },
      { 
        name: 'Василий',
        surname: 'Иванов',
        patronymic: 'Иванович',
        avatar: 'https://via.placeholder.com/150x150'
      },
      { 
        name: 'Роман',
        surname: 'Иванов',
        patronymic: 'Иванович'
      },
      { 
        name: 'Виталий',
        surname: 'Иванов',
        patronymic: 'Иванович',
        avatar: 'https://via.placeholder.com/150x150'
      },
    ],
    itemsVisible: true
  },
  methods: {
    caunterLength: function() {
      return this.items.length;
    }
  }
});

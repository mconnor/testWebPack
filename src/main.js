
/* global vue */
/* eslint-disable */

import Vue from 'vue';
import greeting from '../testModule/config';
import {codersUrl} from '../testModule/config';
import {codersName} from '../testModule/config';
import {myList} from '../testModule/config';
require('./style.scss');

let myurl = "http://rocketnumber9.org/contact/";
console.log("Running App version " + VERSION);
if (!PRODUCTION) console.log('Debug info')
if (PRODUCTION) console.log('Production log')

Vue.component('todo-item', {
  props: ['todo'],
  template: `<li class='spreadout'>{{todo.text}}
            <a class='button is-small' v-on:click="onCliked()">x</a>
            </li>`,
  methods: {
    onCliked(){
      alert('clicked '  + this.todo.text);
    }
  }
});
Vue.component('bottom-aside', {
  template: `<p><a href='{{contacturl}}'>{{name}}</a></p>`,
  data(){
    return {
      name: codersName,
      contacturl: codersUrl
    }
  }
});
const vueApp = new Vue({
  el: '#root',
  data: {
    headline: greeting,
    someList: myList,
    loaded: false
  }
});

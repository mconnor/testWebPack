
/* global vue */
/* eslint-disable */
import _ from 'lodash';
import Vue from 'vue';
import apiKey from '../testModule/config';
import phone from '../testModule/config';

//function() {
    // create a new div element
    // and give it some content
    console.log("Running App version " + VERSION);
    if (!PRODUCTION) console.log('Debug info')
    if (PRODUCTION) console.log('Production log')


    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(` there and greetings-${_.partition([1, 2, 3, 4], n => n % 2)}`);
    //const newContent = document.createTextNode(`xxx and greetings`);

    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);


    Vue.component('todo-item', {
      props: ['todo'],
      template: `<li>{{todo.text}}
                <button class='button' v-on:click="onCliked()">x</button>
      </li>`,
      methods: {
        onCliked(){
          alert('clicked '  + this.todo.text);
        }
      }
    });

    const vueApp = new Vue({
      el: '#root',

      data: {
        headline: 'this is the headline',
        someList: [
          { text: apiKey },
          { text: "xxLearn JavaScript" },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      },
      mounted() {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
      }
    });
//};
//init();
//document.addEventListener('DOMContentLoaded', init);

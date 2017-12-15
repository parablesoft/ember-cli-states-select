import Ember from "ember";
//import computed from 'ember-computed-decorators';
//import {  } from 'ember-computed-decorators';
const {Controller} = Ember;
export default Controller.extend({
  
  state: "FL",
  state2: "GA",
  actions:{
    focusOut(){
      alert("Elvis has left the building");
    }
  }

});

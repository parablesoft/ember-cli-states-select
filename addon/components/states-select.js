import Ember from 'ember';
import layout from '../templates/components/states-select';
import {provinceList,stateList} from "../utils/lists";


const {set,Component} = Ember;
export default Component.extend({
  provinceList,
  stateList,
  "show-canada": false,
  layout: layout,
  tagName: "",
  onlyDisplayStateCode: false,
  actions:{
    selected(selectedValue){
      set(this,"value",selectedValue);
    },
    blur(){
      if(this.attrs.onBlur!=undefined){
				this.attrs.onBlur();
      }
    }
  },
});

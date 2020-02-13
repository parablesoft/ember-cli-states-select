import Controller from '@ember/controller';
import { action, set } from '@ember/object';


export default class ApplicationController extends Controller {



	box3 = "FL"
	box1 = null
	box2 = "Michigan"



	@action
	updateValue(field,value){
		set(this,field,value)
	}

	@action
	handleBlur(){
	}

}

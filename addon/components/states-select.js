import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking"
import {
	provinceList,
	stateList
} from "../data"

import { action } from '@ember/object';


export default class StatesSelectComponent extends Component {

	showCanada = this.fetchArg(["show-canada","showCanada"],false)

	onlyDisplayStateCode = this.args.onlyDisplayStateCode

	@tracked value = this.findInitialValue()


	findInitialValue(){
		let { value } = this.args

		if(value === undefined)
			return null

		return this.options.find( item => {
			return item.code === value ||
				item.name === value
		})

	}

	get options(){
		let output = stateList

		if(this.showCanada)
			output = output.concat(provinceList)

		return output
	}


	@action
	handleChange(value){
		this.value = value
		this.args.onUpdate(value.code)
	}


	fetchArg(list,defaultValue=null){
		let result = list.find( item => {
			let value = this.args[item]
			return value != undefined
		})

		return result != undefined ?
			this.args[result] : 
			defaultValue

	}
}


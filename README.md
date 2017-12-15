# ember-cli-states-select

An [ember-cli](http://www.ember-cli.com) addon for using 
[emberx-select](https://github.com/thefrontside/emberx-select) with US states populated in Ember
applications.

## Install

In your application's directory:
```bash
$ ember install ember-cli-states-select
```


### Ember Compatibility

Version `>= 0.0.7` of this addon is compatible with Ember `>= 1.13.X` and
requires Ember CLI `>= 1.13.X`.


## Basic usage

In your Handlebars template:

```handlebars
{{states-select value=model.state}}
```

Pass in the field you want to bind the value of the component to, and you're off and running. This will render a select list with all the states, as shown below:

```
<select>
	<option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	....Truncated for the sake of brevity...
</select>
```

### Other usage options
```
<label for="someIdForThisComponent">State</label>
{{states-select 
  value=model.state 
  class="form-control" 
  id="someIdForThisComponent" 
  onlyDisplayStateCode=true
  disabled=true
  on-focus-out=(action "someAction")
}}
```

#### Options described
The label is only included to show how you would use the 'for'. 

**class** - If you'd like to add a CSS class to the generated `<select>` element (like "form-control" from Twitter Bootstrap), pass in a value for 'class'.

**id** - If you would like to tie a label to the component, pass in an id and then use that id with the 'for' attribute on your label.

**onlyDisplayStateCode** - Default is false. If you would only like to display the two digit code in your select options, then set this to true. It will render something similar to this:

**disabled** - Default is false. If you would like to put the control in a disabled state, simply set this to true.

**on-focus-out**  - Pass in an action for when the control loses focus. 



### Tests 

Not yet available.

## emberx-select

For more information on the emberx-select component, please see below:

* [emberx-select](https://github.com/thefrontside/emberx-select)

## Other Mentions
Thanks to this [gist](https://gist.github.com/mshafrir/2646763#file-states_titlecase-json) for the initial list of states. 

## Contribution
Fork this repository, make a feature branch and send in a pull request.


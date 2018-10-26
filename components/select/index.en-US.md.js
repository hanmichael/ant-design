webpackJsonp([156],{1862:function(t,e){t.exports={content:["section",["p","Select component to select value from options."],["h2","When To Use"],["ul",["li",["p","A dropdown menu for displaying choices - an elegant alternative to the native ",["code","<select>"]," element."]],["li",["p","Utilizing ",["a",{title:null,href:"/components/radio/"},"Radio"]," is recommended when there are fewer total options (less than 5)."]]]],meta:{category:"Components",type:"Data Entry",title:"Select",filename:"components/select/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>'},["code",'<Select>\n  <Option value="lucy">lucy</Option>\n</Select>']],["h3","Select props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","allowClear"],["td","Show clear button."],["td","boolean"],["td","false"]],["tr",["td","autoClearSearchValue"],["td","Whether the current search will be cleared on selecting an item. Only applies when ",["code","mode"]," is set to ",["code","multiple"]," or ",["code","tags"],"."],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","Get focus by default"],["td","boolean"],["td","false"]],["tr",["td","defaultActiveFirstOption"],["td","Whether active first option by default"],["td","boolean"],["td","true"]],["tr",["td","defaultValue"],["td","Initial selected option."],["td","string","|","string","[","]",["br"],"number","|","number","[","]"],["td","-"]],["tr",["td","disabled"],["td","Whether disabled select"],["td","boolean"],["td","false"]],["tr",["td","dropdownClassName"],["td","className of dropdown menu"],["td","string"],["td","-"]],["tr",["td","dropdownMatchSelectWidth"],["td","Whether dropdown's width is same with select."],["td","boolean"],["td","true"]],["tr",["td","dropdownStyle"],["td","style of dropdown menu"],["td","object"],["td","-"]],["tr",["td","filterOption"],["td","If true, filter options by input, if function, filter options against it. The function will receive two arguments, ",["code","inputValue"]," and ",["code","option"],", if the function returns ",["code","true"],", the option will be included in the filtered set; Otherwise, it will be excluded."],["td","boolean or function(inputValue, option)"],["td","true"]],["tr",["td","firstActiveValue"],["td","Value of action option by default"],["td","string","|","string","[","]"],["td","-"]],["tr",["td","getPopupContainer"],["td","Parent Node which the selector should be rendered to. Default to ",["code","body"],". When position issues happen, try to modify it into scrollable content and position it relative. ",["a",{title:null,href:"https://codesandbox.io/s/4j168r7jw0"},"Example"]],["td","function(triggerNode)"],["td","() => document.body"]],["tr",["td","labelInValue"],["td","whether to embed label in value, turn the format of value from ",["code","string"]," to ",["code","{key: string, label: ReactNode}"]],["td","boolean"],["td","false"]],["tr",["td","maxTagCount"],["td","Max tag count to show"],["td","number"],["td","-"]],["tr",["td","maxTagPlaceholder"],["td","Placeholder for not showing tags"],["td","ReactNode/function(omittedValues)"],["td","-"]],["tr",["td","mode"],["td","Set mode of Select"],["td","'default' ","|"," 'multiple' ","|"," 'tags'"],["td","'default'"]],["tr",["td","notFoundContent"],["td","Specify content to show when no result matches.."],["td","string"],["td","'Not Found'"]],["tr",["td","optionFilterProp"],["td","Which prop value of option will be used for filter if filterOption is true"],["td","string"],["td","value"]],["tr",["td","optionLabelProp"],["td","Which prop value of option will render as content of select."],["td","string"],["td",["code","value"]," for ",["code","combobox"],", ",["code","children"]," for other modes"]],["tr",["td","placeholder"],["td","Placeholder of select"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","showArrow"],["td","Whether to show the drop-down arrow"],["td","boolean"],["td","true"]],["tr",["td","showSearch"],["td","Whether show search input in single mode."],["td","boolean"],["td","false"]],["tr",["td","size"],["td","Size of Select input. ",["code","default"]," ",["code","large"]," ",["code","small"]],["td","string"],["td","default"]],["tr",["td","suffixIcon"],["td","The custom suffix icon"],["td","ReactNode"],["td","-"]],["tr",["td","tokenSeparators"],["td","Separator used to tokenize on tag/multiple mode"],["td","string","[","]"],["td"]],["tr",["td","value"],["td","Current selected option."],["td","string","|","number","|","string","[","]","|","number","[","]"],["td","-"]],["tr",["td","onBlur"],["td","Called when blur"],["td","function"],["td","-"]],["tr",["td","onChange"],["td","Called when select an option or input value change, or value of input is changed in combobox mode"],["td","function(value, option:Option/Array","<","Option>)"],["td","-"]],["tr",["td","onDeselect"],["td","Called when a option is deselected, the params are option's value (or key) . only called for multiple or tags, effective in multiple or tags mode only."],["td","function(value, option:Option)"],["td","-"]],["tr",["td","onFocus"],["td","Called when focus"],["td","function"],["td","-"]],["tr",["td","onInputKeyDown"],["td","Called when key pressed"],["td","function"],["td","-"]],["tr",["td","onMouseEnter"],["td","Called when mouse enter"],["td","function"],["td","-"]],["tr",["td","onMouseLeave"],["td","Called when mouse leave"],["td","function"],["td","-"]],["tr",["td","onPopupScroll"],["td","Called when dropdown scrolls"],["td","function"],["td","-"]],["tr",["td","onSearch"],["td","Callback function that is fired when input changed."],["td","function(value: string)"],["td"]],["tr",["td","onSelect"],["td","Called when a option is selected, the params are option's value (or key) and option instance."],["td","function(value, option:Option)"],["td","-"]],["tr",["td","defaultOpen"],["td","Initial open state of dropdown"],["td","boolean"],["td","-"]],["tr",["td","open"],["td","Controlled open state of dropdown"],["td","boolean"],["td","-"]],["tr",["td","onDropdownVisibleChange"],["td","Call when dropdown open"],["td","function(open)"],["td","-"]]]],["h3","Select Methods"],["table",["thead",["tr",["th","Name"],["th","Description"]]],["tbody",["tr",["td","blur()"],["td","Remove focus"]],["tr",["td","focus()"],["td","Get focus"]]]],["h3","Option props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","disabled"],["td","Disable this option"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","Same usage as ",["code","value"],". If React request you to set this property, you can set it to value of option, and then omit value property."],["td","string"],["td"]],["tr",["td","title"],["td",["code","title"]," of Select after select this Option"],["td","string"],["td","-"]],["tr",["td","value"],["td","default to filter with this property"],["td","string","|","number"],["td","-"]],["tr",["td","className"],["td","additional class to option"],["td","string"],["td","-"]]]],["h3","OptGroup props"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","key"],["td"],["td","string"],["td","-"]],["tr",["td","label"],["td","Group label"],["td","string","|","React.Element"],["td","-"]]]]]}}});
/*

Class: UI.Skin
	The UI.Skin class defines singleton object that manage skins.

Require:


Arguments:
	Options
	
Options: 
	skin - (string) skin name defined in skins. ie: GreyGlass
	component - (string) 
	path - (optional)

Example:
	(start code)
	this.skin = UI.skin.get({
			skin : this.options.skin,
			component : this.options.name, 
			type : this.options.type, 
			skinProperties : this.options.skinProperties
		});
	(end)
*/

UI.Skin = new Class({
 	Implements	: [Events, Options],
	
	options : {},
 	
	initialize : function(name, options) {
		this.setOptions(options);
		this.defaultSkin = name;
		this.processSkin(this.defaultSkin);
	},
	
	
	processSkin : function(skinName) {
		//we merge syles for each states of each type of components
		var properties = new Hash(this[skinName]);
		properties.each(function(componentProps, componentKey){
			if (componentKey != 'default') {
				$H(componentProps).each(function(typeProps, typeKey){
					$H(typeProps).each(function(stateProps, stateKey){
						if (stateKey != 'shortcuts') {
							//set the default properties for the state provided
							var object = properties['default'];
	
							if (componentProps['default']) {
								//merge with componentKey.defaultType.defaultState
								if (componentProps['default']['default'])
									object = $merge(object, componentProps['default']['default']);
								
								//merge with componentKey.defaultType.stateKey
								if (componentProps['default'][stateKey])
									object = $merge(object, componentProps['default'][stateKey]);
							}
							
							//merge with componentKey.typeKey.defaultState
							if(typeProps['default'])
								object = $merge(object, typeProps['default']);
							
							//merge with componentKey.typeKey.stateKey
							object = $merge(object, stateProps);
							
							properties[componentKey][typeKey][stateKey] = object;
						}
					});
				});
			}
		});
		//we clean properties
		properties.preprocessed = true;
		this[skinName] = properties.getClean();
	},
	

	/*
		Function: get
			get part of the skin définition according component
			
		Properties: (hash)
			skin - (string) the skin object (if not define the skin define when instanciate will be used)
			component - (string) the name of the component
			type - (string) type of the previously define component (default/transparent for window or default/round for button)
	 */
	
	get : function(className){
		//props is this
		var props = {
			skin				: className.options.skin,
			component 			: className.options.component, 
			type 				: className.options.type, 
			skinProperties 		: className.options.skinProperties,
			styles				: className.options.styles
		}
		
		var properties = {};
		var skin = (props.skin) ? props.skin : this.defaultSkin;
		
		//check if it was already preprocessed
		if(!this[skin].preprocessed) this.processSkin(skin);

		//get properties for provided type
		var type = $unlink(this[skin][props.component][props.type]);
		
		$H(type).each(function(state, key){
			if(true) {
				//bind shortcuts
				if(type[key].shortcuts) {
					new Hash(state.shortcuts).each(function(shortcut, name){
						if (className.options[name]) {
							//console.log(name);
							//console.log(className.options.labelStyles);
							//eval('console.log(className.options.labelStyles)');
							//console.log('type[\'' + key + '\'].' + shortcut + ' = $merge(type[\'' + key + '\'].' + shortcut + ',className.options.' + name + ')');
							//console.log(eval('type[\'' + key + '\'].' + shortcut));
							eval('type[\'' + key + '\'].' + shortcut + ' = $merge(type[\'' + key + '\'].' + shortcut + ',className.options.' + name + ')');
						}
					});
					delete type[key].shortcuts;
				}
				
				//merge custom default properties
				if (props.skinProperties && props.skinProperties['default'])
					type[key] = $merge(type[key], props.skinProperties['default']);
					
				//merge state default properties
				if (props.skinProperties && props.skinProperties[key])
					type[key] = $merge(type[key], props.skinProperties[key]);
				
				//merge custom options.styles
				if (props.styles)
					type[key].styles = $merge(type[key].styles, props.styles);
			}
		});

		//return type with all attributes for each state
		return type;
	}
 });
 
UI.Skin.toSingleton();


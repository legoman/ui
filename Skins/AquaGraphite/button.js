
UI.props.AquaGraphite.button = {
	'type': {
		'state': {
			/* components properties */
			components: {
				label: {
					styles: {
						zIndex: 1,
						fontWeight: 'normal',
						position: 'absolute',
						cursor: 'pointer',
						top: 0,
						left: 0,
						padding: '3px 16px 3px',
						whiteSpace: 'nowrap',
						lineHeight: '16px'
					}
				}
			},
			
			/* shortcuts */
			shortcuts: {
				labelStyles: 'components.label.styles'
			},
			
			/* element css properties */
			styles: {
				display: 'inline-block',
				cursor: 'pointer'
			},
			
			/* layers properties */
			layers: {
				littleshadow: {
					offset: ['0px', '0px', '0px', '0px'],
					color: ['#000', '#000'],
					opacity: '.1',
					radius: 12
				},
				background: {
					offset: ['0px', '1px', '1px', '1px'],
					color: ['#494949', '#5f5f5f'],
					opacity: 1,
					radius: 11
				},
				main: {
					color: ['#d4d4d4', '#e5e5e5'],
					radius: 10
				},
				reflect: {
					offset: ['0px', '3px', '65%'],
					color: ['#FFF', '#FFF'],
					opacity: [.8, .3],
					radius: [7, 7, 4, 4]
				},
				light: {
					position: 'absolute',
					offset: ['50%', '5px', '2px'],
					color: ['#FFF', '#FFF'],
					opacity: [0, 1],
					radius: [4, 4, 7, 7]
				}
			}
		},
		'state:over': {},
		'state:active': {
			layers: {
				main: {
					color: ['#7b8997', '#7b8997']
				},
				background: {
					color: ['#494949', '#5f5f5f']
				}
			}
		},
		
		'state:disable': {
			layers: {
				main: {
					color: ['#7b8997', '#7b8997']
				},
				background: {
					color: ['#494949', '#5f5f5f']
				}
			}
		}
	},
	'recessed': {
		'state:default': {
			/* components properties */
			components: {
				label: {
					styles: {
						padding: '2px 16px 2px',
						fontSize: '12px'
					}
				}
			},
			/* shortcuts */
			shortcuts: {
				labelStyles: 'components.label.styles'
			},
			
			/* element css properties */
			styles: {
				display: 'inline-block',
				cursor: 'pointer',
				color: '#fff'
			},
			
			/* layers properties */
			layers: {
				'default': {
					radius: 7
				},
				reorder: ['background', 'main'],
				background: {
					offset: '0px',
					color: ['#666666', '#f2f2f2'],
					opacity: 1,
					radius: 9
				},
				main: {
					position: 'absolute',
					color: '#979797',
					offset: [1.5, 1, 1, 1],
					radius: 8
				}
			}
		},
		over: {
			layers: {
				reorder: ['background', 'main']
			}
		},
		'down': {
			layers: {
				reorder: ['background', 'main'],
				main: {
					color: '#787878'
				
				}
			}
		}
	},
	'roundtextured': {
		'default': {
			/* components properties */
			components: {
				label: {
					styles: {
						padding: '2px 16px 2px',
						lineHeight: '18px',
						margin: '0'
					}
				}
			},
			
			/* shortcuts */
			shortcuts: {
				labelStyles: 'components.label.styles'
			},
			
			/* element css properties */
			styles: {
				display: 'inline-block',
				cursor: 'pointer'
			},
			
			/* layers properties */
			layers: {
				'default': {
					radius: 7
				},
				reorder: ['emboss', 'border', 'main'],
				emboss: {
					offset: '0px',
					color: '#fff',
					opacity: .5,
					radius: 5
				},
				border: {
					position: 'absolute',
					offset: [0, 0, 1, 0],
					color: '#686868',
					opacity: 1,
					radius: 4
				},
				main: {
					position: 'absolute',
					color: ['#fff', 'a9a9a9'],
					offset: [1, 1, 2, 1],
					radius: 3
				}
			}
		},
		
		over: {
			layers: {
				reorder: ['emboss', 'border', 'main']
			}
		},
		'down': {
			layers: {
				reorder: ['emboss', 'border', 'inner1', 'inner2', 'inner3', 'inner4', 'main'],
				inner1: {
					position: 'absolute',
					color: ['#393939', '#686868'],
					offset: [1, 1, 2, 1],
					radius: 3
				},
				inner2: {
					position: 'absolute',
					color: ['#6e6e6e', '#797979'],
					offset: [2, 2, 3, 2],
					radius: 3
				},
				inner3: {
					position: 'absolute',
					color: ['#8c8c8c', '#848484'],
					offset: [3, 3, 4, 3],
					radius: 3
				},
				inner4: {
					position: 'absolute',
					color: ['#a1a1a1', '#8a8a8a'],
					offset: [4, 4, 5, 4],
					radius: 3
				},
				main: {
					color: ['#afafaf', '#8e8e8e'],
					offset: [5, 5, 6, 5],
					radius: 2
				
				}
			}
		}
	},
	window: {
		'default': {
			layers: {
				reorder: ['emboss', 'background', 'main', 'reflect', 'cache'],
				
				'default': {
					position: 'absolute',
					shape: 'circle',
					size: [10, 10],
					opacity: 1,
					offset: 0
				},
				emboss: {
					offset: ['auto', 1, 0],
					size: [14, 14],
					color: '#FFF',
					opacity: .4
				},
				background: {
					gradient: {
						color: ['#2e323d', '#848995']
					},
					size: [14, 14]
				},
				main: {
					size: [11, 11],
					offset: [2, 2.5],
					gradient: {
						color: ['#fff', '#fff'],
						opacity: [.2, .8]
					}
				},
				reflect: {
					size: 3,
					offset: [1.5, 6.5],
					gradient: {
						color: ['#fff', '#fff'],
						opacity: [1, .5]
					}
				},
				cache: {
					shape: 'roundedRect',
					size: [2, 1],
					radius: 0,
					offset: [1, 7],
					color: '#545861',
					opacity: 1
				}
			}
		},
		'down': {
			layers: {
				reorder: ['emboss', 'border', 'inner1', 'inner2', 'inner3', 'inner4', 'main'],
				inner1: {
					position: 'absolute',
					color: ['#393939', '#686868'],
					offset: [1, 1, 2, 1],
					radius: 3
				},
				inner2: {
					position: 'absolute',
					color: ['#6e6e6e', '#797979'],
					offset: [2, 2, 3, 2],
					radius: 3
				},
				inner3: {
					position: 'absolute',
					color: ['#8c8c8c', '#848484'],
					offset: [3, 3, 4, 3],
					radius: 3
				},
				inner4: {
					position: 'absolute',
					color: ['#a1a1a1', '#8a8a8a'],
					offset: [4, 4, 5, 4],
					radius: 3
				},
				main: {
					color: ['#afafaf', '#8e8e8e'],
					offset: [5, 5, 6, 5],
					radius: 2
				
				}
			}
		}
	},
	
	'small': {
		'default': {
			width: 20,
			height: 11,
			
			styles: {
				position: 'absolute',
				top: 0,
				right: 0,
				margin: '5px 7px 0 3px'
			},
			
			layers: {
				'default': {
					position: 'absolute',
					shape: 'circle',
					size: 8
				},
				emboss: {
					offset: [3, 3],
					color: '#FFF',
					opacity: .27
				},
				background: {
					offset: [0, 1],
					size: 8,
					color: ['#3b424d', '#9ba0ab']
				},
				main: {
					size: 3,
					offset: [1, 0],
					color: ['#616975', '#e8e8e8']
				},
				reflect: {
					size: 2,
					offset: [0, 1],
					color: ['#fff', '#fff'],
					opacity: [1, .5]
				}
			}
		},
		over: {
			layers: {
				main: {
					color: ['#cf652a', '#fee776']
				}
			}
		},
		down: {
			layers: {
				main: {
					color: ['#cf652a', '#fee776']
				}
			}
		}
	},
	
	toggleToolbar: {
		'default': {
			width: 20,
			height: 11,
			
			/* css properties */
			styles: {
				padding: '2px 16px 4px 16px',
				position: 'absolute',
				top: '10px',
				right: 0,
				margin: '5px 7px 0 3px'
			},
			
			/* layers properties */
			layers: {
			
				reorder: ['emboss', 'background', 'main', 'reflect', 'light'],
				
				'default': {
					radius: 6
				},
				emboss: {
					offset: 0,
					color: '#fff',
					radius: 5
				},
				background: {
					offset: ['0px', '0px', '1px', '0px'],
					color: ['#494949', '#666666'],
					radius: 5
				},
				main: {
					offset: 1,
					radius: 4,
					color: ['#b2b2b2', '#eee']
				},
				reflect: {
					offset: ['0px', '3px', '65%'],
					color: ['#FFF', '#FFF'],
					opacity: [.8, .3],
					radius: 2
				},
				light: {
					position: 'absolute',
					offset: ['65%', '5px', '2px'],
					color: ['#FFF', '#FFF'],
					opacity: [.1, .7],
					radius: [2, 2, 3, 3]
				}
			}
		},
		'down': {
			layers: {
				main: {
					color: ['#5b697e', '#a9b5c2']
				}
			}
		}
	},
	tab: {
		'default': {
		
			//width : 100,
			height: 17,
			/* css properties */
			
			components: {
				label: {
					styles: {
						padding: '0px 12px 0px 12px',
						'float': 'left',
						margin: '0',
						fontWeight: 'bold',
						fontSize: '0.75em',
						lineHeight: '2em'
					}
				}
			},
			
			/* shortcuts */
			shortcuts: {
				labelStyles: 'components.label.styles'
			},
			
			/* layers properties */
			layers: {
				reorder: ['background', 'main'],
				
				background: {
					offset: 0,
					color: ['#6c6c6c', '#6c6c6c'],
					radius: 0
				},
				main: {
					offset: [0, 1, 1, 0],
					radius: 0,
					color: ['#9a9a9a', '#828282']
				}
			}
		},
		'over': {
			layers: {
				main: {
					color: ['#aeaeae', '#9a9a9a'],
					offset: [0, 1, 0, 0]
				}
			}
		},
		'down': {
			layers: {
				main: {
					color: ['#bfbfbf', '#d1d1d1'],
					offset: [0, 1, 0, 0]
				}
			}
		},
		'active': {
			layers: {
				main: {
					color: ['#eaeaea', '#dedede'],
					offset: [0, 1, 0, 0]
				}
			}
		}
	},
	tabselected: {
		'default': {
		
			/* css properties */
			
			components: {
				label: {
					styles: {
						padding: '4px 8px 6px 8px',
						margin: '0',
						textTransform: 'uppercase',
						fontWeight: 'bold',
						fontSize: '1em'
					}
				}
			},
			
			/* shortcuts */
			shortcuts: {
				labelStyles: 'components.label.styles'
			},
			
			labelStyles: {},
			
			/* layers properties */
			layers: {
			
				reorder: ['background', 'main'],
				
				'default': {
					radius: 0
				},
				
				background: {
					offset: 0,
					color: ['#6c6c6c', '#6c6c6c'],
					radius: 0
				},
				main: {
					offset: [0, 1, 3, 0],
					radius: 0,
					color: ['#eaeaea', '#dedede']
				}
			}
		},
		'over': {
			layers: {
				main: {
					color: ['#5b697e', '#a9b5c2']
				}
			}
		},
		'down': {
			layers: {
				main: {
					color: ['#eaeaea', '#dedede']
				
				}
			}
		},
		'selected': {
			layers: {
				main: {
					color: ['#eaeaea', '#dedede']
				
				}
			}
		}
	}
}
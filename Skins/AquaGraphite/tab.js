
	
UI.props.AquaGraphite.tab = {
	'default': {
		'default': {
		
			//width : 100,
			height: 21,
			/* css properties */
			
			components: {
				label: {
					styles: {
						padding: '4px 12px 4px 12px',
						'float': 'left',
						margin: '0',
						fontWeight: 'bold',
						fontSize: '0.75em',
						lineHeight: '1.4em',
						position: 'relative'
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
					radius: [5,5,0,0]
				},
				main: {
					offset: [0, 1, 1, 0],
					radius: 0,
					color: ['#9a9a9a', '#828282'],
					radius: [5,5,0,0]
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
	first: {
		'default': {
		
			//width : 100,
			height: 21,
			/* css properties */
			
			components: {
				label: {
					styles: {
						padding: '4px 12px 4px 12px',
						'float': 'left',
						margin: '0',
						fontWeight: 'bold',
						fontSize: '0.75em',
						lineHeight: '1.4em',
						position: 'relative'
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
					radius: [5,5,0,0]
				},
				main: {
					offset: [0, 1, 1, 0],
					radius: 0,
					color: ['#9a9a9a', '#828282'],
					radius: [5,5,0,0]
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
	'last': {
		'default': {
		
			//width : 100,
			height: 21,
			/* css properties */
			
			components: {
				label: {
					styles: {
						padding: '4px 12px 4px 12px',
						'float': 'left',
						margin: '0',
						fontWeight: 'bold',
						fontSize: '0.75em',
						lineHeight: '1.4em',
						position: 'relative'
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
					radius: [5,5,0,0]
				},
				main: {
					offset: [0, 1, 1, 0],
					radius: 0,
					color: ['#9a9a9a', '#828282'],
					radius: [5,5,0,0]
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
	}
}	
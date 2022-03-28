// eslint-disable-next-line
export default `
[{
	"componentName": "Canvas",
	"props": {
			"elementStyle": {
					"margin-top": 0,
					"margin-left": 0,
					"margin-bottom": 0,
					"margin-right": 0,
					"padding-top": 30,
					"padding-left": 30,
					"padding-bottom": 30,
					"padding-right": 30,
					"height": "auto",
					"flex-direction": "column",
					"justify-content": "flex-start",
					"align-items": "flex-start",
					"border-radius": 0,
					"box-shadow": {
							"x": 0,
							"y": 0,
							"blur": 0,
							"spread": 0,
							"color": "rgba(0,0,0,0)"
					},
					"background-color": "rgba(0,0,0,0)",
					"background-image": "none",
					"background-attachment": "scroll"
			},
			"parentStyle": {},
			"component": "Container"
	},
	"children": [{
			"componentName": "Table",
			"props": {
					"content": {
							"tField": "tData",
							"tData": [{
									"name": "第1列",
									"data": ["<span style='color: red'>1-1</span>", "2-1", "5-1"]
							}, {
									"name": "第2列",
									"data": ["<a href='https://www.baidu.com'>1-2</a>", "2-2", "5-2"]
							}, {
									"name": "第5列",
									"data": ["1-5", "2-5", "5-5"]
							}]
					},
					"elementStyle": {
							"margin-top": 0,
							"margin-left": 0,
							"margin-bottom": 0,
							"margin-right": 0,
							"border-spacing": 1,
							"border-collapse": "collapse",
							"background": "white",
							"overflow": "hidden",
							"width": "100%",
							"position": "relative",
							"border": {
									"width": "1px",
									"style": "solid",
									"color": "rgb(0, 0, 0)"
							}
					},
					"parentStyle": {}
			},
			"children": [],
			"addition": {},
			"uuid": "232fd567-2392-4131-a2fa-9dd7f7862674"
	}],
	"addition": {},
	"uuid": "ed8d2527-df68-4036-a623-2da656d8da54"
}]
`;

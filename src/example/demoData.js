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
			"componentName": "List",
			"props": {
					"content": {
							"tField": "listData",
							"listData": ["<span style='color: red'>列表1</span>", "列表2", "列表3"]
					},
					"elementStyle": {
							"font-size": 16
					},
					"parentStyle": {}
			},
			"children": [],
			"addition": {},
			"uuid": "284f4c9c-6c24-402a-b285-903cc2b79a23"
	}],
	"addition": {},
	"uuid": "ed8d2527-df68-4036-a623-2da656d8da54"
}]
`;

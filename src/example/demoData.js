// eslint-disable-next-line
export default `
[
    {
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
                "width": 100,
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
            "component": "Container"
        },
        "children": [
            {
                "componentName": "Heading",
                "props": {
                    "headingType": "h1",
                    "content": "这是一个标题.",
                    "textHref": "https://www.baidu.com",
                    "elementStyle": {
                        "font-size": 24,
                        "font-weight": "normal",
                        "text-align": "center",
                        "color": "rgb(0,0,0)",
                        "margin-top": 0,
                        "margin-left": 0,
                        "margin-bottom": 0,
                        "margin-right": 0,
                        "padding-top": 0,
                        "padding-left": 0,
                        "padding-bottom": 0,
                        "padding-right": 0,
                        "text-shadow": {
                            "x": 0,
                            "y": 0,
                            "blur": 0,
                            "color": "rgba(0,0,0,0)"
                        }
                    }
                },
                "children": [],
                "addition": {},
                "uuid": "0d8c4819-6fb2-4896-9fc8-3653a4a56b88"
            },
            {
                "componentName": "Table",
                "props": {
                    "content": {
                        "tData": {
                            "平台": [
                                "1-1",
                                "2-1",
                                "3-1"
                            ],
                            "测试": [
                                "1-2",
                                "2-2",
                                "3-2"
                            ],
                            "通过率": [
                                "1-3",
                                "2-3",
                                "3-3"
                            ]
                        }
                    },
                    "elementStyle": {}
                },
                "children": [],
                "addition": {},
                "uuid": "6db67467-63ee-444e-95f3-4f4b005e0682"
            }
        ],
        "addition": {},
        "uuid": "c2d88a08-1894-44b9-9b17-ea23b91bc2ae"
    }
]
`;

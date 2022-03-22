// eslint-disable-next-line
export default `
[
    {
        "componentName": "Canvas",
        "props": {
            "elementStyle": {
                "overflow": "hidden",
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
                    "content": "这是一个标题.{{desc}}",
                    "elementStyle": {
                        "font-size": 24,
                        "font-weight": "normal",
                        "text-align": "left",
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
                "uuid": "987c53ca-83f5-4760-a098-6e4b7ca0c684"
            },
            {
                "componentName": "Canvas",
                "props": {
                    "elementStyle": {
                        "overflow": "auto",
                        "margin-top": 0,
                        "margin-left": 0,
                        "margin-bottom": 0,
                        "margin-right": 0,
                        "padding-top": 0,
                        "padding-left": 0,
                        "padding-bottom": 0,
                        "padding-right": 0,
                        "width": 100,
                        "height": "auto",
                        "flex-direction": "row",
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
                        "componentName": "Paragraph",
                        "props": {
                            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices non orci nec eleifend. Sed scelerisque lobortis neque eget feugiat. Curabitur ullamcorper ex at porttitor mollis. Curabitur varius lorem nisl, non egestas leo feugiat at. Curabitur volutpat sagittis arcu, ut blandit velit sagittis vel. Vivamus erat mauris, mattis a neque vel, pretium varius ipsum. Phasellus non mauris in dolor luctus suscipit vel ac massa. Sed fringilla lorem sed metus bibendum faucibus. Pellentesque ipsum mauris, auctor ut varius at, aliquam sed quam. Nullam fringilla felis at odio convallis mattis.",
                            "elementStyle": {
                                "font-size": 14,
                                "font-weight": "normal",
                                "text-align": "left",
                                "line-height": "1.5",
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
                        "uuid": "fbdd4bf6-d8e0-4783-91b9-fe2504ddf7df"
                    },
                    {
                        "componentName": "Picture",
                        "props": {
                            "imageUrl": "/img/default_picture_image.86619316.jpg",
                            "elementStyle": {
                                "width": 30,
                                "margin-top": 0,
                                "margin-left": 0,
                                "margin-bottom": 0,
                                "margin-right": 0,
                                "border-radius": 0,
                                "box-shadow": {
                                    "x": 0,
                                    "y": 0,
                                    "blur": 0,
                                    "spread": 0,
                                    "color": "rgba(0,0,0,0)"
                                }
                            }
                        },
                        "children": [],
                        "addition": {},
                        "uuid": "13d8dd7c-f5a4-461e-9a9c-de3ad056dcd5"
                    }
                ],
                "addition": {},
                "uuid": "708a552c-b4ed-450e-8bb8-5a05a330900d"
            },
            {
                "componentName": "Button",
                "props": {
                    "content": "按钮",
                    "btnUrl": "https://www.baidu.com",
                    "elementStyle": {
                        "text-align": "center",
                        "font-size": 16,
                        "padding-top": 5,
                        "padding-bottom": 5,
                        "padding-right": 5,
                        "padding-left": 5,
                        "margin-top": 0,
                        "margin-left": 0,
                        "margin-bottom": 0,
                        "margin-right": 0,
                        "border": "none",
                        "color": "rgb(0,0,0)",
                        "background-color": "rgba(0,0,0, .2)",
                        "border-radius": 3
                    }
                },
                "children": [],
                "addition": {},
                "uuid": "dfe19a32-90b7-4b8f-aa2b-334e64ee8d68"
            }
        ],
        "addition": {},
        "uuid": "002a7170-afdb-4ae6-b57a-30c3af5504cb"
    }
]
`;

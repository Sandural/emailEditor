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
              "componentName": "Table",
              "props": {
                  "content": {
                      "tColumns": [
                          "第一列",
                          "第二列",
                          "第三列"
                      ],
                      "tData": [
                          {
                              "prop1": "1-1",
                              "prop2": "1-2",
                              "prop3": "1-3"
                          },
                          {
                              "prop1": "2-1",
                              "prop2": "2-2",
                              "prop3": "2-3"
                          },
                          {
                              "prop1": "3-1",
                              "prop2": "3-2",
                              "prop3": "3-3"
                          }
                      ]
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

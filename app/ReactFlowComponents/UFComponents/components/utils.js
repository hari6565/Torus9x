export const jsonData = [
  { id: 1, type: "nav", top: "6%", left: "0%", height: "50px", width: "100%" },
  {
    id: 2,
    type: "table",
    top: "50%",
    left: "20%",
    height: "100px",
    width: "60%",
  },
];

export const getWidth = (width, totalWidth) => {
  return (width / 100) * totalWidth;
};

export const renderUiJson = [{
  "Component": "CustomBreadcrumbs",
  "props": [{
    "propName": "items",
    "propType": "array",
    "propDefault": [],
    "propEnabled": true
  }, {
    "propName": "currentPage",
    "propType": "string",
    "propDefault": "home",
    "propEnabled": true
  }, {
    "propName": "setCurrentPage",
    "propType": "function",
    "propDefault": "() => {}",
    "propEnabled": true
  }],
  "styles": [{
    "StyleName": "containerStyle",
    "StyleValue": {
      "padding": "10px",
      "backgroundColor": "#f0f0f0"
    },
    "StyleEnabled": true
  }],
  "events": [{
    "EventName": "onItemClick",
    "EventType": "click",
    "EventAction": "navigate",
    "EventEnabled": true
  }],
  "functions": [{
    "FunctionName": "handleItemClick",
    "FunctionBody": "console.log('Item clicked')",
    "FunctionEnabled": true
  }],
  "items": [
    { "key": "home", "label": "Home" },
    { "key": "music", "label": "Music" },
    { "key": "artist", "label": "Artist" },
    { "key": "album", "label": "Album" },
    { "key": "song", "label": "Song" }
  ],
  "position": {
    "x": 975,
    "y": 180
  },
  "width": 267,
  "height": 276
}]

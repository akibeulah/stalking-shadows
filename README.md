[![Build status](https://badge.buildkite.com/90ff98db996bb137c5be1bdce666c4b1ce68a25b17af0a6a04.svg?branch=master)](https://buildkite.com/harvey/react-component-library) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

#Stalking Shadows
___
A ReactJS library component for creating dynamic text shadows that shift with mouse movement or page scroll.

##Installation
Install `stalking-shadows` from npm: 
```bash
npm install @akibeulah/stalking-shadows@0.6.10
```

##Getting Started
The `stakling-shadows` component uses the cursors location on the screen to cast a text or box shadow dynamically on the dom, like a sun casting shadows on the ground.
Shadows get fuzzy when the cursor is far from the subject, but becomes sharp when the cursor gets closer.

```js
import { TextShadow } from "@akibeulah/stalking-shadows";
 
class Component extends React.Component {
  render() {
    return (
      <TextShadow walkX={26} walkY={30} shadowColor={"#000"}>
        This text has a shadow
      </TextShadow>
    );
  }
}
```

##Usage
| **Props**       	| Required 	| Type   	| Default 	| Description                                                	|
|-----------------	|----------	|--------	|---------	|------------------------------------------------------------	|
| **walkX**       	| true     	| number 	| N/A     	| Sets the mousemove sensitivity of shadow on the x-axis     	|
| **walkY**       	| true     	| number 	| N/A     	| Sets the mousemove sensitivity of shadow on the y-axis     	|
| **shadowColor** 	| true     	| string 	| N/A     	| Specifies the colour of the being cast by the text or box  	|
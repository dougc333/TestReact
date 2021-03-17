Configuration and Tools to export a single file to the browser as a single page app.
https://serverless-stack.com/chapters/create-a-custom-react-hook-to-handle-form-fields.html




npm
---------
npm init
npm --save-dev @babel/plugin-transform-arrow-functions

babel
--------
npm install @babel/polyfill
npm install @babel/runtime
npm install @babel/plugin-transform-runtime

create .babelrc(we can put this inside webpack.config.js and eliminate .babelrc)
{
  "presets:[
     "env",
     "react",
     "stage-2"
  ]
}



setup babel for presets and react. 
presets compiles JS to fit all range of targets ranging from 
browsers to node. 
other presets from blog:
preset-flow
syntax-jsx
transform-react-jsx
transform-react-display-name
{
  "presets":{
     ["env", {
       "targets": {
         "node": "6.10"
       }
     }]
   ]
}



webpack
----------
webpack.config.js






# QWC - Quick Web Components

QWC is the simplest way to create a new webcomponent, no need to write classes, QWC does that for you.

# Usage

1. Quick dirty non reactive element:
   ### index.html
   ```html
   <template is="custom" custom-element="custom-element-name">
     <style>
       .your-scoped-css {
       }
     </style>
     <button>My Custom Element</button>
   </template>
   <custom-element-name></custom-element-name>
   ```
   ### App.js
   ```javascript
   import { init } from "@hydrophobefireman/qwc";
   init();
   ```
2. Custom logic for your element
   ### index.html
   ```html
   <template is="custom" custom-element="my-custom-element">
     ...
   </template>
   <my-custom-element></my-custom-element>
   ```
   ### App.js
   ```javascript
   import { init } from "@hydrophobefireman/qwc";
   init({
     "my-custom-element": {
       modifyConstructor(constructor) {
         // modify class constructor
         Object.defineProperty(constructor, "observedAttributes", {
           get() {
             return ["src"];
           }
         });
       },
       modifyPrototype(prototype) {
         Object.defineProperty(prototype, "attributeChangedCallback", {
           value() {
             //do something with the new attributes
           }
         });
       }
     }
   });
   ```

3) Dynamic properties in the dom
   ### index.html
   ```html
   <template is="custom" custom-element="button-counter">
     <div data-text-content="currentDate"></div>
     <button
       updates-reactively
       data-text-content="count"
       data-onclick="handleClick"
     ></button>
   </template>
   <button-counter></button-counter>
   ```
   Note: only use attribute `updates-reactively` if your event listeners bring changes to your `<custom-element/>` otherwise using the attribute has no effect and leads to unnecessary updates.
   ### App.js
   ```javascript
   import { init } from "@hydrophobefireman/qwc";
   const conf = {
     "button-counter": {
       count: 0,
       handleClick() {
         conf.count++;
       },
       currentDate: new Date().toString()
     }
   };
   init(null, conf);
   ```

NOTE: QWC prefers your `<template>` elements to be inlined in your html instead of having to write html-in-js. But you can provide it with all template elements if you prefer, as the 3<sup>rd</sup> argument

# Installation

`npm i @hydrophobefireman/qwc --save`

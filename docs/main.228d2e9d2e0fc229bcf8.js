(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{L:()=>p});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.task=t,this.id=(new Date).getTime(),this.complete=!1,this.created=new Date}var n,o,r;return n=e,r=[{key:"fromJson",value:function(t){var n=t.id,o=t.task,r=t.complete,a=t.created,i=new e(o);return i.id=n,i.complete=r,i.created=a,i}}],(o=[{key:"imprimirClase",value:function(){console.log("".concat(this.task," - ").concat(this.id))}}])&&t(n.prototype,o),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loadLocalStorage()}var t,r,i;return t=e,(r=[{key:"newTodo",value:function(e){this.todos.push(e),this.saveLocalStorage()}},{key:"eraseTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.saveLocalStorage()}},{key:"toggleTodo",value:function(e){var t,n=o(this.todos);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(console.log(e,r.id),r.id==e){r.complete=!r.complete,this.saveLocalStorage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eraseCompletedTodo",value:function(){this.todos=this.todos.filter((function(e){return!e.complete})),this.saveLocalStorage()}},{key:"saveLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"loadLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(e){return n.fromJson(e)}))}}])&&a(t.prototype,r),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s=document.querySelector(".todo-list"),u=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),v=document.querySelectorAll(".filtro"),m=function(e){var t='\n    <li class="'.concat(e.complete?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox" ').concat(e.complete?"checked":"",">\n            <label>").concat(e.task,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>\n    '),n=document.createElement("div");return n.innerHTML=t,s.append(n.firstElementChild),n.firstElementChild};u.addEventListener("keyup",(function(e){if(13===e.keyCode&&u.value.length>0){var t=new n(u.value);p.newTodo(t),m(t),u.value=""}})),s.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");t.includes("input")?(p.toggleTodo(o),n.classList.toggle("completed")):t.includes("button")&&(p.eraseTodo(o),s.removeChild(n)),console.log(p)})),d.addEventListener("click",(function(){p.eraseCompletedTodo();for(var e=s.children.length-1;e>=0;e--){var t=s.children[e];t.classList.contains("completed")&&s.removeChild(t)}})),f.addEventListener("click",(function(e){var t=e.target.text;if(t){v.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,o=l(s.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var a=r.classList.contains("completed");switch(t){case"Pendientes":a&&r.classList.add("hidden");break;case"Completados":a||r.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}}));var p=new i,y=new n("Aprender Javascript");console.log(p.todos),y.imprimirClase(),p.todos.forEach((function(e){m(e)}))})();
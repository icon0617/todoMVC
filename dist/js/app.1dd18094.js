(function(t){function e(e){for(var o,c,i=e[0],d=e[1],r=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,r||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,i=1;i<s.length;i++){var d=s[i];0!==a[d]&&(o=!1)}o&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var o={},a={app:0},n=[];function c(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=o,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(s,o,function(e){return t[e]}.bind(null,o));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todoMVC/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var r=0;r<i.length;r++)e(i[r]);var u=d;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"127f":function(t,e,s){},"3c7a":function(t,e,s){},4678:function(t,e,s){var o={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=n(t);return s(e)}function n(t){if(!s.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}a.keys=function(){return Object.keys(o)},a.resolve=n,t.exports=a,a.id="4678"},"4bb1":function(t,e,s){"use strict";var o=s("127f"),a=s.n(o);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("router-view")],1)},n=[],c=(s("5c0b"),s("2877")),i={},d=Object(c["a"])(i,a,n,!1,null,null,null),r=d.exports,u=s("8c4f"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"main"}},[s("div",{attrs:{id:"title"}},[t._v("todos")]),s("div",{attrs:{id:"section"}},[s("Edit"),t.$store.state.todoList.length>0?s("Todo"):t._e()],1)])])},f=[],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{}},[s("div",{staticClass:"input-container"},[t.$store.state.todoList.length>0?s("a-icon",{staticClass:"icon",style:t.getStatus?"color:black;":"",attrs:{type:"down"},on:{click:t.clickIcon}}):t._e(),s("a-input",{staticClass:"input",attrs:{placeholder:"What needs to be done?",size:"large"},on:{pressEnter:t.addTodoList},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}})],1)])},j=[],h=(s("498a"),s("5530")),g=s("2f62"),m={name:"Edit",data:function(){return{todo:""}},computed:Object(h["a"])({},Object(g["c"])(["getTodoList","getStatus"])),created:function(){this.getTodoList.length>0&&this.$router.push({path:"/all"})},methods:Object(h["a"])(Object(h["a"])({},Object(g["d"])(["changeStatus","changeTodoList"])),{},{addTodoList:function(){""!=this.todo.trim()&&(this.$store.dispatch("addTodoList",{name:this.todo,status:!1}),this.todo="","/"==this.$route.path&&this.$router.push({path:"/all"}))},clickIcon:function(){this.changeStatus(!this.getStatus);for(var t=0;t<this.getTodoList.length;t++)this.getTodoList[t].status=this.getStatus;this.changeTodoList(this.getTodoList)}})},p=m,v=(s("70f0"),Object(c["a"])(p,b,j,!1,null,"a1d78514",null)),k=v.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"todo-container"}},[s("router-view",{staticStyle:{"box-shadow":"none"}}),s("div",{attrs:{id:"footer"}},[s("span",[t._v(t._s(t.getLeft)+" item left")]),s("a-radio-group",{attrs:{"default-value":"all",id:"button-group"},on:{change:t.tagChange},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}},[s("a-radio-button",{attrs:{value:"all"}},[t._v("All")]),s("a-radio-button",{attrs:{value:"active"}},[t._v("Active")]),s("a-radio-button",{attrs:{value:"completed"}},[t._v("Completed")])],1),t.getTodoList.length>t.getLeft?s("span",{attrs:{id:"clear"},on:{click:t.delComplete}},[t._v("Clear completed")]):t._e()],1)],1)},L=[],y=(s("4de4"),{name:"Todos",data:function(){return{tag:"all"}},computed:Object(h["a"])({},Object(g["c"])(["getTodoList","getLeft"])),methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["changeTodoList"])),{},{tagChange:function(t){this.tag=t.target.value,this.$router.push({path:"/"+this.tag})},delComplete:function(){this.changeTodoList(this.getTodoList.filter((function(t){return 0==t.status})))}})}),O=y,w=(s("6e03"),Object(c["a"])(O,T,L,!1,null,"52c1c47a",null)),_=w.exports,x={name:"App",components:{Edit:k,Todo:_},created:function(){window.localStorage.getItem("todos")&&this.$store.dispatch("changeTodoList",JSON.parse(window.localStorage.getItem("todos")))}},S=x,z=(s("4bb1"),Object(c["a"])(S,l,f,!1,null,"6542c93d",null)),C=z.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._l(t.getTodoList,(function(e,o){return["all"==t.tag||e.status===t.status?s("todo-item",{key:o,attrs:{todo:e,index:o}}):t._e()]}))],2)},E=[],M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"todo"},[s("a-checkbox",{staticClass:"checkbox",attrs:{checked:t.todo.status},on:{change:t.checkboxChange}}),s("div",{staticClass:"todo-name",on:{dblclick:t.edit}},[1==t.editMode?s("a-input",{directives:[{name:"autoFocus",rawName:"v-autoFocus"}],attrs:{size:"large"},on:{pressEnter:t.changeTodo,blur:t.blurEdit},model:{value:t.todo.name,callback:function(e){t.$set(t.todo,"name",e)},expression:"todo.name"}}):s("span",{style:t.todo.status?"text-decoration:line-through;color:#d9d9d9":""},[t._v(t._s(t.todo.name))])],1),s("a-icon",{staticClass:"icon",attrs:{type:"close"},on:{click:function(e){return t.delTodo(t.index)}}})],1)},I=[],N=(s("b0c0"),s("a9e3"),{name:"TodoItem",props:{todo:{type:Object},index:{type:Number}},data:function(){return{editMode:!1,value:this.todo.name}},computed:Object(h["a"])({},Object(g["c"])(["getTodoList","getLeft"])),mounted:function(){var t=this;this.$nextTick((function(){document.addEventListener("keyup",(function(e){27==e.keyCode&&(t.todo.name=t.value,t.editMode=!1)}))}))},directives:{autoFocus:{inserted:function(t){t.focus()}}},methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["delTodo","changeStatus","changeTodoList"])),{},{checkboxChange:function(){this.getTodoList[this.index].status=!this.getTodoList[this.index].status,this.changeStatus(0===this.getLeft),this.changeTodoList(this.getTodoList)},changeTodo:function(){this.value=this.todo.name,""==this.todo.name.trim()?this.delTodo(this.index):this.changeTodoList(this.getTodoList),this.editMode=!1},edit:function(){this.editMode=!0},blurEdit:function(){this.changeTodoList(this.getTodoList),this.editMode=!1}})}),P=N,J=(s("e294"),Object(c["a"])(P,M,I,!1,null,"05e725b5",null)),F=J.exports,A={name:"Todos",components:{TodoItem:F},data:function(){return{tag:"all",status:""}},computed:Object(h["a"])({},Object(g["c"])(["getTodoList"])),created:function(){console.log(this.$route.params),console.log(this.tag)},beforeRouteUpdate:function(t,e,s){switch(this.tag=t.params.tag,this.tag){case"all":this.status="";break;case"active":this.status=!1;break;case"completed":this.status=!0;break;default:break}s()},methods:{}},U=A,q=Object(c["a"])(U,$,E,!1,null,"859ea2d6",null),D=q.exports;o["a"].use(u["a"]);var H=[{path:"/",name:"Home",component:C,children:[{path:"/:tag",name:"Todos",component:D}]}],R=new u["a"]({routes:H}),V=R;s("a434");o["a"].use(g["a"]);var W=new g["a"].Store({state:{todoList:[],status:!1},mutations:{addTodoList:function(t,e){t.todoList.push(e)},delTodo:function(t,e){t.todoList.splice(e,1)},changeTodoList:function(t,e){t.todoList=e},changeStatus:function(t,e){t.status=e}},actions:{addTodoList:function(t,e){t.commit("addTodoList",e),window.localStorage.setItem("todos",JSON.stringify(this.state.todoList))},delTodo:function(t,e){t.commit("delTodo",e),window.localStorage.setItem("todos",JSON.stringify(this.state.todoList))},changeTodoList:function(t,e){t.commit("changeTodoList",e),window.localStorage.setItem("todos",JSON.stringify(this.state.todoList))},changeStatus:function(t,e){t.commit("changeStatus",e)}},getters:{getTodoList:function(t){return t.todoList},getLeft:function(t){return t.todoList.filter((function(t){return 0==t.status})).length},getStatus:function(t){return t.status}},modules:{}}),B=s("f23d");s("202f");o["a"].config.productionTip=!1,o["a"].use(B["a"]),new o["a"]({router:V,store:W,render:function(t){return t(r)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var o=s("9c0c"),a=s.n(o);a.a},"6e03":function(t,e,s){"use strict";var o=s("9954"),a=s.n(o);a.a},"70f0":function(t,e,s){"use strict";var o=s("3c7a"),a=s.n(o);a.a},9954:function(t,e,s){},"9c0c":function(t,e,s){},a4d7:function(t,e,s){},e294:function(t,e,s){"use strict";var o=s("a4d7"),a=s.n(o);a.a}});
//# sourceMappingURL=app.1dd18094.js.map
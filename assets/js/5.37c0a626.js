(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("When you create your easyAccess plugin, you can make some configuration through an object:")]),t._v(" "),t._m(1),a("p",[t._v("All possible values for the configuration are explained here:")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("You can add compatibility for the amazing sister plugin: "),a("a",{attrs:{href:"https://mesqueeb.github.io/vuex-easy-firestore",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex Easy Firestore"),a("OutboundLink")],1),t._v(". To do so just pass a variable in the configuration object like so:")]),t._v(" "),t._m(3),a("p",[t._v("This will make sure that whenever you set a value in a module where you enabled 'Vuex Easy Firestore', it will "),a("strong",[t._v("auto-sync to your firestore")]),t._v("! Please see the "),a("a",{attrs:{href:"https://mesqueeb.github.io/vuex-easy-firestore",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex Easy Firestore documentation"),a("OutboundLink")],1),t._v(" for more information on how to set up auto-sync with firestore.")]),t._v(" "),a("p",[t._v("Please note when using both plugins, it is important to pass the 'vuex-easy-firestore' plugin first, and the 'easyAccess' second for it to work properly.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Vuex Easy Access will ignore (and not make mutations/setters) any props that:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),a("p",[t._v("This will create only the mutation and dispatch setter for 'normalProp':")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("And none will be set for '_privateProp' and 'secretProp'!")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("Mutations are used under the hood. These mutations have a simple syntax which is just the name of the prop. Check the "),a("router-link",{attrs:{to:"./reference.html"}},[t._v("Reference")]),t._v(" for a quick overview of the mutations used by Vuex Easy Firestore.")],1),t._v(" "),a("p",[t._v("You can also opt in for mutations to be in "),a("strong",[t._v("the traditional syntax")]),t._v(" (as per the vuex documentation). For this please read "),a("router-link",{attrs:{to:"./hooks.html#hook-into-set"}},[t._v("Syntax for overwriting setters")]),t._v(" in the Hooks chapter.")],1),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("If you have any requests for more customisation of this functionality, please let me know in an "),a("a",{attrs:{href:"https://github.com/mesqueeb/vuex-easy-access/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1),t._v("!")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"advanced-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" createEasyAccess "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex-easy-access'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" easyAccess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createEasyAccess")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token comment"}},[t._v("/* your configuration */")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"firestore-integration-for-google-firebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firestore-integration-for-google-firebase","aria-hidden":"true"}},[this._v("#")]),this._v(" Firestore integration (for Google Firebase)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" easyAccess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createEasyAccess")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vuexEasyFirestore"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"change-get-set-function-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-get-set-function-names","aria-hidden":"true"}},[this._v("#")]),this._v(" Change get() set() function names")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("If for some reason you want to change the default function names for "),a("code",[t._v("get()")]),t._v(" and "),a("code",[t._v("set()")]),t._v(" (or "),a("code",[t._v("delete()")]),t._v(") to something else (eg. capitalising to "),a("code",[t._v("GET()")]),t._v(" and "),a("code",[t._v("SET()")]),t._v("), you can do so by passing an object to "),a("code",[t._v("createEasyAccess()")]),t._v(" like so:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" easyAccess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createEasyAccess")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  setter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'SET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  deletor"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'DELETE'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// See 'Use case: set with ID wildcard'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Now instead of the "),a("code",[t._v("get")]),t._v(" "),a("code",[t._v("set")]),t._v(" keywords, you will only be able to use "),a("code",[t._v("store.GET()")]),t._v(" and "),a("code",[t._v("store.SET()")]),t._v(" and for dispatches "),a("code",[t._v("dispatch('SET/prop', val)")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"ignore-private-state-props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignore-private-state-props","aria-hidden":"true"}},[this._v("#")]),this._v(" Ignore private state props")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("start with an underscore ("),s("em",[this._v("default")]),this._v(")")]),this._v(" "),s("li",[this._v("are added to the "),s("code",[this._v("ignoreProps: []")]),this._v(" config")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// in the config")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" easyAccess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createEasyAccess")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ignoreProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'normalProp.secretProp'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true is the default")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  _privateProp"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// this prop is not touched at all!")]),t._v("\n  normalProp"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    secretProp"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// this prop is not touched at all!")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// and in the defaultMutations")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token function"}},[t._v("defaultMutations")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ignoreProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'normalProp.secretProp'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("mutate('normalProp', newVal)")])]),this._v(" "),s("li",[s("code",[this._v("dispatch('set/normalProp', newVal)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To disable ignoring the ones with an underscore ("),s("code",[this._v("_privateProp")]),this._v(") you need to do:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// in the config")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" easyAccess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createEasyAccess")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ignorePrivateProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true is the default")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// and in your modules:")]),t._v("\nmutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token function"}},[t._v("defaultMutations")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ignorePrivateProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Please note that when passing a prop to "),s("code",[this._v("ignoreProps")]),this._v(" it will be ignored in all modules regardless of the module namespace. This is because 'defaultMutations' doesn't know the exact namespace of the module when it's initiated. You can be specific about the prop to ignore in just the namespace you want by passing the 'moduleNamespace' as third prop to the 'defaultMutations'. See the example below:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// We will use the prop ignoreMeInUser in both the store root and the user module")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// But we will only ignore it in user")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" config "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ignoreProps"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'user/ignoreMeInUser'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" easyAccess "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createEasyAccess")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// add config")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootAndUserState "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ignoreMeInUser"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" userModule "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rootAndUserState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("defaultMutations")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootAndUserState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("moduleNamespace"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'user/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// add config and moduleNamespace")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" user"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" userModule "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  state"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rootAndUserState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("defaultMutations")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootAndUserState"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("moduleNamespace"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// add config and moduleNamespace")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"use-traditional-set-prop-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-traditional-set-prop-syntax","aria-hidden":"true"}},[this._v("#")]),this._v(" Use traditional "),s("code",[this._v("SET_PROP")]),this._v(" syntax")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"missing-any-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#missing-any-features","aria-hidden":"true"}},[this._v("#")]),this._v(" Missing any features?")])}],!1,null,null,null);e.options.__file="advanced.md";s.default=e.exports}}]);
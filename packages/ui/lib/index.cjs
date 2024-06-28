'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script$1 = {
  props: {
    msg: String
  },
  data: function data() {
    return {
      count: 1
    };
  },
  methods: {
    increment: function increment() {
      // `this` will refer to the component instance
      this.count++;
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [vue.createElementVNode("p", null, vue.toDisplayString($props.msg), 1 /* TEXT */), vue.createElementVNode("p", null, vue.toDisplayString($data.count), 1 /* TEXT */), vue.createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.increment && $options.increment.apply($options, arguments);
    })
  }, "Add")], 64 /* STABLE_FRAGMENT */);
}

script$1.render = render$1;
script$1.__file = "src/SharedComponent.vue";

var _hoisted_1 = {
  "class": "bg-white"
};
var _hoisted_2 = {
  "class": "absolute inset-x-0 top-0 z-50"
};
var _hoisted_3 = {
  "class": "flex items-center justify-between p-6 lg:px-8",
  "aria-label": "Global"
};
var _hoisted_4 = /*#__PURE__*/vue.createElementVNode("div", {
  "class": "flex lg:flex-1"
}, [/*#__PURE__*/vue.createElementVNode("a", {
  href: "#",
  "class": "-m-1.5 p-1.5"
}, [/*#__PURE__*/vue.createElementVNode("span", {
  "class": "sr-only"
}, "Your Company"), /*#__PURE__*/vue.createElementVNode("img", {
  "class": "h-8 w-auto",
  src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
  alt: ""
})])], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "flex lg:hidden"
};
var _hoisted_6 = /*#__PURE__*/vue.createElementVNode("span", {
  "class": "sr-only"
}, "Open main menu", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "hidden lg:flex lg:gap-x-12"
};
var _hoisted_8 = ["href"];
var _hoisted_9 = /*#__PURE__*/vue.createElementVNode("div", {
  "class": "hidden lg:flex lg:flex-1 lg:justify-end"
}, [/*#__PURE__*/vue.createElementVNode("a", {
  href: "#",
  "class": "text-sm font-semibold leading-6 text-gray-900"
}, [/*#__PURE__*/vue.createTextVNode("Log in "), /*#__PURE__*/vue.createElementVNode("span", {
  "aria-hidden": "true"
}, "→")])], -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/vue.createElementVNode("div", {
  "class": "fixed inset-0 z-50"
}, null, -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "flex items-center justify-between"
};
var _hoisted_12 = /*#__PURE__*/vue.createElementVNode("a", {
  href: "#",
  "class": "-m-1.5 p-1.5"
}, [/*#__PURE__*/vue.createElementVNode("span", {
  "class": "sr-only"
}, "Your Company"), /*#__PURE__*/vue.createElementVNode("img", {
  "class": "h-8 w-auto",
  src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
  alt: ""
})], -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/vue.createElementVNode("span", {
  "class": "sr-only"
}, "Close menu", -1 /* HOISTED */);
var _hoisted_14 = {
  "class": "mt-6 flow-root"
};
var _hoisted_15 = {
  "class": "-my-6 divide-y divide-gray-500/10"
};
var _hoisted_16 = {
  "class": "space-y-2 py-6"
};
var _hoisted_17 = ["href"];
var _hoisted_18 = /*#__PURE__*/vue.createElementVNode("div", {
  "class": "py-6"
}, [/*#__PURE__*/vue.createElementVNode("a", {
  href: "#",
  "class": "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
}, "Log in")], -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/vue.createStaticVNode("<div class=\"relative isolate px-6 pt-14 lg:px-8\"><div class=\"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80\" aria-hidden=\"true\"><div class=\"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]\" style=\"clip-path:polygon(\n\t\t\t\t\t\t\t74.1% 44.1%,\n\t\t\t\t\t\t\t100% 61.6%,\n\t\t\t\t\t\t\t97.5% 26.9%,\n\t\t\t\t\t\t\t85.5% 0.1%,\n\t\t\t\t\t\t\t80.7% 2%,\n\t\t\t\t\t\t\t72.5% 32.5%,\n\t\t\t\t\t\t\t60.2% 62.4%,\n\t\t\t\t\t\t\t52.4% 68.1%,\n\t\t\t\t\t\t\t47.5% 58.3%,\n\t\t\t\t\t\t\t45.2% 34.5%,\n\t\t\t\t\t\t\t27.5% 76.7%,\n\t\t\t\t\t\t\t0.1% 64.9%,\n\t\t\t\t\t\t\t17.9% 100%,\n\t\t\t\t\t\t\t27.6% 76.8%,\n\t\t\t\t\t\t\t76.1% 97.7%,\n\t\t\t\t\t\t\t74.1% 44.1%\n\t\t\t\t\t\t);\"></div></div><div class=\"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56\"><div class=\"hidden sm:mb-8 sm:flex sm:justify-center\"><div class=\"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20\"> Announcing our next round of funding. <a href=\"#\" class=\"font-semibold text-indigo-600\"><span class=\"absolute inset-0\" aria-hidden=\"true\"></span>Read more <span aria-hidden=\"true\">→</span></a></div></div><div class=\"text-center\"><h1 class=\"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl\"> Data to enrich your online business </h1><p class=\"mt-6 text-lg leading-8 text-gray-600\"> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. </p><div class=\"mt-10 flex items-center justify-center gap-x-6\"><a href=\"#\" class=\"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\">Get started</a><a href=\"#\" class=\"text-sm font-semibold leading-6 text-gray-900\">Learn more <span aria-hidden=\"true\">→</span></a></div></div></div><div class=\"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]\" aria-hidden=\"true\"><div class=\"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]\" style=\"clip-path:polygon(\n\t\t\t\t\t\t\t74.1% 44.1%,\n\t\t\t\t\t\t\t100% 61.6%,\n\t\t\t\t\t\t\t97.5% 26.9%,\n\t\t\t\t\t\t\t85.5% 0.1%,\n\t\t\t\t\t\t\t80.7% 2%,\n\t\t\t\t\t\t\t72.5% 32.5%,\n\t\t\t\t\t\t\t60.2% 62.4%,\n\t\t\t\t\t\t\t52.4% 68.1%,\n\t\t\t\t\t\t\t47.5% 58.3%,\n\t\t\t\t\t\t\t45.2% 34.5%,\n\t\t\t\t\t\t\t27.5% 76.7%,\n\t\t\t\t\t\t\t0.1% 64.9%,\n\t\t\t\t\t\t\t17.9% 100%,\n\t\t\t\t\t\t\t27.6% 76.8%,\n\t\t\t\t\t\t\t76.1% 97.7%,\n\t\t\t\t\t\t\t74.1% 44.1%\n\t\t\t\t\t\t);\"></div></div></div>", 1);
function render(_ctx, _cache) {
  var _component_Bars3Icon = vue.resolveComponent("Bars3Icon");
  var _component_XMarkIcon = vue.resolveComponent("XMarkIcon");
  var _component_DialogPanel = vue.resolveComponent("DialogPanel");
  var _component_Dialog = vue.resolveComponent("Dialog");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("header", _hoisted_2, [vue.createElementVNode("nav", _hoisted_3, [_hoisted_4, vue.createElementVNode("div", _hoisted_5, [vue.createElementVNode("button", {
    type: "button",
    "class": "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.mobileMenuOpen = true;
    })
  }, [_hoisted_6, vue.createVNode(_component_Bars3Icon, {
    "class": "h-6 w-6",
    "aria-hidden": "true"
  })])]), vue.createElementVNode("div", _hoisted_7, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.navigation, function (item) {
    return vue.openBlock(), vue.createElementBlock("a", {
      key: item.name,
      href: item.href,
      "class": "text-sm font-semibold leading-6 text-gray-900"
    }, vue.toDisplayString(item.name), 9 /* TEXT, PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_9]), vue.createVNode(_component_Dialog, {
    "class": "lg:hidden",
    onClose: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.mobileMenuOpen = false;
    }),
    open: _ctx.mobileMenuOpen
  }, {
    "default": vue.withCtx(function () {
      return [_hoisted_10, vue.createVNode(_component_DialogPanel, {
        "class": "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      }, {
        "default": vue.withCtx(function () {
          return [vue.createElementVNode("div", _hoisted_11, [_hoisted_12, vue.createElementVNode("button", {
            type: "button",
            "class": "-m-2.5 rounded-md p-2.5 text-gray-700",
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return _ctx.mobileMenuOpen = false;
            })
          }, [_hoisted_13, vue.createVNode(_component_XMarkIcon, {
            "class": "h-6 w-6",
            "aria-hidden": "true"
          })])]), vue.createElementVNode("div", _hoisted_14, [vue.createElementVNode("div", _hoisted_15, [vue.createElementVNode("div", _hoisted_16, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.navigation, function (item) {
            return vue.openBlock(), vue.createElementBlock("a", {
              key: item.name,
              href: item.href,
              "class": "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            }, vue.toDisplayString(item.name), 9 /* TEXT, PROPS */, _hoisted_17);
          }), 128 /* KEYED_FRAGMENT */))]), _hoisted_18])])];
        }),
        _: 1 /* STABLE */
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["open"])]), _hoisted_19]);
}

var script = {};
script.render = render;
script.__file = "src/WeBrainHero.vue";

exports.SharedComponent = script$1;
exports.WeBrainHero = script;

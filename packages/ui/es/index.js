import { openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, resolveComponent, createVNode, renderList, withCtx, createTextVNode, createStaticVNode } from 'vue';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n";
styleInject(css_248z);

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
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("p", null, toDisplayString($props.msg), 1 /* TEXT */), createElementVNode("p", null, toDisplayString($data.count), 1 /* TEXT */), createElementVNode("button", {
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
var _hoisted_4 = /*#__PURE__*/createElementVNode("div", {
  "class": "flex lg:flex-1"
}, [/*#__PURE__*/createElementVNode("a", {
  href: "#",
  "class": "-m-1.5 p-1.5"
}, [/*#__PURE__*/createElementVNode("span", {
  "class": "sr-only"
}, "Your Company"), /*#__PURE__*/createElementVNode("img", {
  "class": "h-8 w-auto",
  src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
  alt: ""
})])], -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "flex lg:hidden"
};
var _hoisted_6 = /*#__PURE__*/createElementVNode("span", {
  "class": "sr-only"
}, "Open main menu", -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "hidden lg:flex lg:gap-x-12"
};
var _hoisted_8 = ["href"];
var _hoisted_9 = /*#__PURE__*/createElementVNode("div", {
  "class": "hidden lg:flex lg:flex-1 lg:justify-end"
}, [/*#__PURE__*/createElementVNode("a", {
  href: "#",
  "class": "text-sm font-semibold leading-6 text-gray-900"
}, [/*#__PURE__*/createTextVNode("Log in "), /*#__PURE__*/createElementVNode("span", {
  "aria-hidden": "true"
}, "→")])], -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/createElementVNode("div", {
  "class": "fixed inset-0 z-50"
}, null, -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "flex items-center justify-between"
};
var _hoisted_12 = /*#__PURE__*/createElementVNode("a", {
  href: "#",
  "class": "-m-1.5 p-1.5"
}, [/*#__PURE__*/createElementVNode("span", {
  "class": "sr-only"
}, "Your Company"), /*#__PURE__*/createElementVNode("img", {
  "class": "h-8 w-auto",
  src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
  alt: ""
})], -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/createElementVNode("span", {
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
var _hoisted_18 = /*#__PURE__*/createElementVNode("div", {
  "class": "py-6"
}, [/*#__PURE__*/createElementVNode("a", {
  href: "#",
  "class": "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
}, "Log in")], -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/createStaticVNode("<div class=\"relative isolate px-6 pt-14 lg:px-8\"><div class=\"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80\" aria-hidden=\"true\"><div class=\"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]\" style=\"clip-path:polygon(;\"></div></div><div class=\"mx-auto max-w-2xl py-32 sm:py-48 lg:py-56\"><div class=\"hidden sm:mb-8 sm:flex sm:justify-center\"><div class=\"relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20\"> Announcing our next round of funding. <a href=\"#\" class=\"font-semibold text-indigo-600\"><span class=\"absolute inset-0\" aria-hidden=\"true\"></span>Read more <span aria-hidden=\"true\">→</span></a></div></div><div class=\"text-center\"><h1 class=\"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl\"> Data to enrich your online business </h1><p class=\"mt-6 text-lg leading-8 text-gray-600\"> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. </p><div class=\"mt-10 flex items-center justify-center gap-x-6\"><a href=\"#\" class=\"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\">Get started</a><a href=\"#\" class=\"text-sm font-semibold leading-6 text-gray-900\">Learn more <span aria-hidden=\"true\">→</span></a></div></div></div><div class=\"absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]\" aria-hidden=\"true\"><div class=\"relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]\" style=\"clip-path:polygon(;\"></div></div></div>", 1);
function render(_ctx, _cache) {
  var _component_Bars3Icon = resolveComponent("Bars3Icon");
  var _component_XMarkIcon = resolveComponent("XMarkIcon");
  var _component_DialogPanel = resolveComponent("DialogPanel");
  var _component_Dialog = resolveComponent("Dialog");
  return openBlock(), createElementBlock("div", _hoisted_1, [createElementVNode("header", _hoisted_2, [createElementVNode("nav", _hoisted_3, [_hoisted_4, createElementVNode("div", _hoisted_5, [createElementVNode("button", {
    type: "button",
    "class": "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.mobileMenuOpen = true;
    })
  }, [_hoisted_6, createVNode(_component_Bars3Icon, {
    "class": "h-6 w-6",
    "aria-hidden": "true"
  })])]), createElementVNode("div", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.navigation, function (item) {
    return openBlock(), createElementBlock("a", {
      key: item.name,
      href: item.href,
      "class": "text-sm font-semibold leading-6 text-gray-900"
    }, toDisplayString(item.name), 9 /* TEXT, PROPS */, _hoisted_8);
  }), 128 /* KEYED_FRAGMENT */))]), _hoisted_9]), createVNode(_component_Dialog, {
    "class": "lg:hidden",
    onClose: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.mobileMenuOpen = false;
    }),
    open: _ctx.mobileMenuOpen
  }, {
    "default": withCtx(function () {
      return [_hoisted_10, createVNode(_component_DialogPanel, {
        "class": "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      }, {
        "default": withCtx(function () {
          return [createElementVNode("div", _hoisted_11, [_hoisted_12, createElementVNode("button", {
            type: "button",
            "class": "-m-2.5 rounded-md p-2.5 text-gray-700",
            onClick: _cache[1] || (_cache[1] = function ($event) {
              return _ctx.mobileMenuOpen = false;
            })
          }, [_hoisted_13, createVNode(_component_XMarkIcon, {
            "class": "h-6 w-6",
            "aria-hidden": "true"
          })])]), createElementVNode("div", _hoisted_14, [createElementVNode("div", _hoisted_15, [createElementVNode("div", _hoisted_16, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.navigation, function (item) {
            return openBlock(), createElementBlock("a", {
              key: item.name,
              href: item.href,
              "class": "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            }, toDisplayString(item.name), 9 /* TEXT, PROPS */, _hoisted_17);
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

export { script$1 as SharedComponent, script as WeBrainHero };

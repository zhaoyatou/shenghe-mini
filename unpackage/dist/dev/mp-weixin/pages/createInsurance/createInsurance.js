(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/createInsurance/createInsurance"],{

/***/ 175:
/*!**************************************************************************************************************************!*\
  !*** /Users/soindy/Documents/ShengHe/code/shenghe_car_mini/main.js?{"page":"pages%2FcreateInsurance%2FcreateInsurance"} ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _createInsurance = _interopRequireDefault(__webpack_require__(/*! ./pages/createInsurance/createInsurance.vue */ 176));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_createInsurance.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 176:
/*!*******************************************************************************************************!*\
  !*** /Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createInsurance.vue?vue&type=template&id=e71662f8&scoped=true& */ 177);
/* harmony import */ var _createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createInsurance.vue?vue&type=script&lang=js& */ 179);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createInsurance.vue?vue&type=style&index=0&id=e71662f8&scoped=true&lang=css& */ 182);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e71662f8",
  null,
  false,
  _createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/createInsurance/createInsurance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/*!**************************************************************************************************************************************************!*\
  !*** /Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue?vue&type=template&id=e71662f8&scoped=true& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createInsurance.vue?vue&type=template&id=e71662f8&scoped=true& */ 178);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_template_id_e71662f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 178:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue?vue&type=template&id=e71662f8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uLoadingPage: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-loading-page/u-loading-page */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-loading-page/u-loading-page")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-loading-page/u-loading-page.vue */ 318))
    },
    uSticky: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-sticky/u-sticky */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-sticky/u-sticky")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-sticky/u-sticky.vue */ 326))
    },
    "u-Form": function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--form/u--form */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--form/u--form")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--form/u--form.vue */ 225))
    },
    uFormItem: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-form-item/u-form-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-form-item/u-form-item.vue */ 231))
    },
    "u-Input": function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--input/u--input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--input/u--input")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--input/u--input.vue */ 239))
    },
    uIcon: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-icon/u-icon.vue */ 245))
    },
    uRow: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-row/u-row */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-row/u-row")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-row/u-row.vue */ 334))
    },
    uCol: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-col/u-col */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-col/u-col")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-col/u-col.vue */ 342))
    },
    "u-Text": function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--text/u--text */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--text/u--text")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--text/u--text.vue */ 350))
    },
    uButton: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-button/u-button.vue */ 261))
    },
    "u-Textarea": function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u--textarea/u--textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u--textarea/u--textarea")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u--textarea/u--textarea.vue */ 356))
    },
    uUpload: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-upload/u-upload */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-upload/u-upload")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-upload/u-upload.vue */ 362))
    },
    uOverlay: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-overlay/u-overlay */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-overlay/u-overlay")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-overlay/u-overlay.vue */ 372))
    },
    uTransition: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-transition/u-transition */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-transition/u-transition")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-transition/u-transition.vue */ 380))
    },
    uPicker: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-picker/u-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-picker/u-picker.vue */ 310))
    },
    uDatetimePicker: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-datetime-picker/u-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-datetime-picker/u-datetime-picker")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-datetime-picker/u-datetime-picker.vue */ 390))
    },
    uModal: function () {
      return Promise.all(/*! import() | node-modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! uview-ui/components/u-modal/u-modal.vue */ 399))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    "font-weight": 600,
  }
  var g0 = _vm.fileList9.length
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.storeOpen = true
    }
    _vm.e1 = function ($event) {
      _vm.ajaxData.extendInfo.storeId
        ? (_vm.carBrandOpen = true)
        : (_vm.carBrandOpen = false)
    }
    _vm.e2 = function ($event) {
      _vm.ajaxData.extendInfo.carBrand
        ? (_vm.carSeriesOpen = true)
        : (_vm.carSeriesOpen = false)
    }
    _vm.e3 = function ($event) {
      _vm.ajaxData.extendInfo.carSeries
        ? (_vm.carModelOpen = true)
        : (_vm.carModelOpen = false)
    }
    _vm.e4 = function ($event) {
      _vm.provinceCarBrandOpen = true
    }
    _vm.e5 = function ($event) {
      _vm.PurchaseTimeOpen = true
    }
    _vm.e6 = function ($event) {
      _vm.ajaxData.extendInfo.storeId && _vm.ajaxData.extendInfo.carId
        ? (_vm.ExtendedItemOpen = true)
        : (_vm.ExtendedItemOpen = false)
    }
    _vm.e7 = function ($event) {
      _vm.ajaxData.extendInfo.projectId
        ? (_vm.extendTimeOpen = true)
        : (_vm.extendTimeOpen = false)
    }
    _vm.e8 = function ($event) {
      _vm.extendEndOpen = true
    }
    _vm.e9 = function ($event) {
      _vm.saleStoreTypeOpen = true
    }
    _vm.e10 = function ($event) {
      _vm.cardTypeOpen = true
    }
    _vm.e11 = function ($event) {
      _vm.provinceOpen = true
    }
    _vm.e12 = function ($event) {
      _vm.ajaxData.customerInfo.province
        ? (_vm.cityOpen = true)
        : (_vm.cityOpen = false)
    }
    _vm.e13 = function ($event) {
      _vm.payOpen = true
    }
    _vm.e14 = function ($event) {
      _vm.videoPlay = false
    }
    _vm.e15 = function ($event) {
      _vm.loading == false ? _vm.SubmitReview() : _vm.test()
    }
    _vm.e16 = function ($event) {
      _vm.loading == false ? _vm.SaveDraft() : _vm.test()
    }
    _vm.e17 = function ($event) {
      _vm.loading == false ? _vm.PassAudit() : _vm.test()
    }
    _vm.e18 = function ($event) {
      _vm.loading == false ? (_vm.rejectShow = true) : _vm.test()
    }
    _vm.e19 = function ($event) {
      _vm.loading == false ? (_vm.emilShow = true) : _vm.test()
    }
    _vm.e20 = function ($event) {
      _vm.storeOpen = false
    }
    _vm.e21 = function ($event) {
      _vm.provinceCarBrandOpen = false
    }
    _vm.e22 = function ($event) {
      _vm.PurchaseTimeOpen = false
    }
    _vm.e23 = function ($event) {
      _vm.ExtendedItemOpen = false
    }
    _vm.e24 = function ($event) {
      _vm.extendTimeOpen = false
    }
    _vm.e25 = function ($event) {
      _vm.saleStoreTypeOpen = false
    }
    _vm.e26 = function ($event) {
      _vm.carBrandOpen = false
    }
    _vm.e27 = function ($event) {
      _vm.carSeriesOpen = false
    }
    _vm.e28 = function ($event) {
      _vm.carModelOpen = false
    }
    _vm.e29 = function ($event) {
      _vm.extendEndOpen = false
    }
    _vm.e30 = function ($event) {
      _vm.cardTypeOpen = false
    }
    _vm.e31 = function ($event) {
      _vm.provinceOpen = false
    }
    _vm.e32 = function ($event) {
      _vm.cityOpen = false
    }
    _vm.e33 = function ($event) {
      _vm.areaOpen = false
    }
    _vm.e34 = function ($event) {
      _vm.payOpen = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 179:
/*!********************************************************************************************************************************!*\
  !*** /Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createInsurance.vue?vue&type=script&lang=js& */ 180);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 180:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 55));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 57));
var _city = _interopRequireDefault(__webpack_require__(/*! ../../utils/city.js */ 181));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();
var _default = {
  data: function data() {
    var _this = this;
    return {
      videoPlay: false,
      // 整屏加载
      loading: false,
      // 回显参数
      optionData: {},
      operationTrans: false,
      // 处理 盒子的开关
      oldsix: Number(new Date()),
      // 购车时间弹框隐藏参数 (为了不展示时间戳且插件不报错)
      oldsix_chinese: "",
      // 格式化的购车时间参数(为了展示xxxx-xx-xx)
      oldfive: "",
      // 服务有效截止时间弹框隐藏参数(为了不展示时间戳且插件不报错)
      oldfive_chinese: "",
      // 格式化的服务截止时间参数(为了展示xxxx-xx-xx)
      extendEndMaxData: 0,
      // 服务有效截止时间最大可选时间
      cardType_chinese: "",
      // 证件类型(为了不展示id)
      showstoretype: "",
      // 店方信息(展示用 售前售后)
      paytypetext: "",
      // 支付方式(展示用)
      timeYCarRun: "",
      // 原厂质保时间及其公里数(展示用)
      btn1: false,
      // 提交审核 隐显控制
      btn2: false,
      // 保存草稿 隐显控制
      btn3: false,
      // 通过审核 隐显控制
      btn4: false,
      // 驳回申请 隐显控制
      btn5: false,
      // 发送邮件 隐显控制
      // 车型弹框开关
      carModelOpen: false,
      // 车系弹框开关
      carSeriesOpen: false,
      // 延长保修期弹框开关
      extendTimeOpen: false,
      // 发送邮件模态框开关
      emilShow: false,
      // 驳回申请模态框开关
      rejectShow: false,
      // 驳回申请原因
      rejectText: "",
      // 支付方式弹框开关
      payOpen: false,
      // 省弹框开关
      provinceOpen: false,
      // 市弹框开关
      cityOpen: false,
      // 区弹框开关
      areaOpen: false,
      // 证件类型弹框开关
      cardTypeOpen: false,
      // 服务截止时间弹框开关
      extendEndOpen: false,
      // 汽车品牌弹框开关
      carBrandOpen: false,
      // 店方信息弹框开关
      saleStoreTypeOpen: false,
      // 所属门店弹框开关
      storeOpen: false,
      // 车牌省份弹框开关
      provinceCarBrandOpen: false,
      // 购车时间弹框开关
      PurchaseTimeOpen: false,
      // 延保项目弹框开关
      ExtendedItemOpen: false,
      // 身份证正面
      fileList1: [],
      // 身份证反面
      fileList2: [],
      // 行驶证件照
      fileList3: [],
      // 行驶里程
      fileList4: [],
      // 车辆前照
      fileList5: [],
      // 车身后照
      fileList6: [],
      // 线上支付照
      fileList7: [],
      // 刷卡小票
      fileList8: [],
      // 车辆视频
      fileList9: [],
      // 请求字段
      ajaxData: {
        // 车辆信息
        extendInfo: {
          id: "",
          orderNo: "",
          storeId: "",
          // 所属门店id @
          storeName: "",
          // 所属门店名称 @ ! 1
          carBrand: "",
          // 汽车品牌名称 @ ! 1
          carSeries: "",
          // 车系 @ ! 1
          carModel: "",
          // 车型 @ ! 1
          carId: "",
          // 汽车品牌的id @
          carLicenseNum: "",
          // 车牌号各省代称 @ ! 1
          carLicense: "",
          // 首字母加车牌号 @ ! 1
          carCode: "",
          // 车架VIN码 @ ! 1
          carEngine: "",
          // 发动机号 @ ! 1
          carBuyTime: "",
          // 购车时间 @ ! 1
          carPurchase: "",
          // 新车购置价 @ ! 1
          carMileage: "",
          // 行驶里程 @ ! 1
          projectId: "",
          // 延保项目的id @
          projectName: "",
          // 延保项目的名称 @ !
          warrantyTime: "",
          // 原厂质保时间 @ 1
          extendTime: "",
          // 延长保修期 @ ! 1
          extendQuota: "",
          // 延保金额  @ ! 1
          extendEndTime: "",
          // 服务截止时间(日期) @ ! 1
          extendSpace: "",
          // 服务截止时间(公里数) @ ! 1
          extendPrice: "",
          // 延保价格 @
          originCarMileage: "" // 原厂质保里程
        },

        // 支付信息
        payInfo: {
          id: "",
          orderNo: "",
          payType: "",
          // 支付类型 (1微信 2支付宝 3现金 4刷卡) @ ! 1
          payAmount: "",
          // 实收金额 @ ! 1
          entrustAmount: "",
          // 代收金额 @ ! 1
          addAmount: "",
          // 加价金额 @ ! 1
          remark: "",
          // 备注 @ ! 1
          createTime: new Date() // 当前时间时间戳
        },

        // 影像文件
        fileInfos: [],
        // 用户信息
        customerInfo: {
          id: "",
          orderNo: "",
          customerName: "",
          // 客户姓名 @ ! 1
          useName: "",
          // 使用人姓名 @
          cardId: "",
          // 证件号码 @ ! 1
          cardType: "",
          // 证件类型 @ ! 1
          province: "",
          // 户籍省 @ ! 1
          city: "",
          // 户籍市 @ ! 1
          address: "",
          // 详细地址 @ ! 1
          tel: "",
          // 联系电话 @ ! 1
          email: "1337836843@qq.com",
          // 电子邮箱 @ !
          createTime: new Date() // 时间戳
        },

        sourceType: "1",
        // 录单来源 1为移动端
        operStatus: "",
        // 订单状态(1草稿 2审核中 3审核通过 4拨回)
        saleStoreName: "",
        // 店方信息(人员) @ ! 1
        saleStoreType: "",
        // 店方信息(售前售后) @ ! 1
        saleStoreId: "",
        // 所属门店id @
        userSignUrl: "",
        // 用户手写签名图片地址 @ ! 1
        createUserName: "",
        // 经办人 @ ! 1
        area: "" // 区
      },

      // 表单校验
      rules: {
        // 所属门店
        "extendInfo.storeName": [{
          required: true,
          message: "请选择所属门店",
          trigger: ["change", "blur"]
        }],
        // 汽车品牌
        "extendInfo.carBrand": [{
          required: true,
          message: "请选择汽车品牌",
          trigger: ["change", "blur"]
        }],
        // 车系
        "extendInfo.carSeries": [{
          required: true,
          message: "请选择车系",
          trigger: ["change", "blur"]
        }],
        // 车型
        "extendInfo.carModel": [{
          required: true,
          message: "请选择车型",
          trigger: ["change", "blur"]
        }],
        // 车牌省份
        "extendInfo.carLicenseNum": [{
          required: true,
          message: "请选择省份",
          trigger: ["change", "blur"]
        }],
        // 车牌号
        "extendInfo.carLicense": [{
          required: true,
          // pattern: /^[A-Z]{1}[\d\w]{5}$/,
          pattern: /^[A-Z|\d\w]{6,8}$/,
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          message: "只能包含字母或数字且最大等于8位最小等于6位",
          trigger: ["change", "blur"]
        }],
        // 车辆VIN码
        "extendInfo.carCode": [{
          // required: true,
          pattern: /^[A-Z|\d\w]{17,18}$/,
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          message: "只能包含字母或数字且大于17位小于18位",
          trigger: ["change", "blur"]
        }],
        // 发动机号
        "extendInfo.carEngine": [{
          required: true,
          // pattern: /[A-Z0-9]$/,
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          // message: '只能包含字母或数字且字母不为小写',
          message: "请输入发动机号",
          trigger: ["change", "blur"]
        }],
        // 购车时间
        "extendInfo.carBuyTime": [{
          required: true,
          transform: function transform(value) {
            return String(value);
          },
          message: "请选择购车时间",
          trigger: ["change", "blur"]
        }],
        // 新车购置价
        "extendInfo.carPurchase": [{
          required: true,
          pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
          message: "请输入正确新车购置价(整数部分最多九位小数部分最多两位)",
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          trigger: ["change", "blur"]
        }],
        // 行驶里程
        "extendInfo.carMileage": [{
          required: true,
          pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
          message: "请输入正确行驶里程(小数部分最多两位)",
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            if (value && value == 0) {
              return false;
            } else {
              return value;
            }
            return String(value);
          },
          trigger: ["change", "blur"]
        }],
        // 延保项目
        "extendInfo.projectName": [{
          required: true,
          message: "请选择服务项目",
          trigger: ["change", "blur"]
        }],
        // 原厂质保时间
        "extendInfo.warrantyTime": [{
          required: true,
          transform: function transform(value) {
            return String(value);
          },
          message: "请输入原厂质保时间",
          trigger: ["change", "blur"]
        }],
        // 延长保修期
        "extendInfo.extendTime": [{
          required: true,
          transform: function transform(value) {
            return String(value);
          },
          message: "请选择服务时间",
          trigger: ["change", "blur"]
        }],
        // 保额
        // 'extendInfo.extendQuota': [
        // 	{
        // 		required: true,
        // 		pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
        // 		message: '请输入正确保额(整数部分最多九位小数部分最多两位)',
        // 		// 正则检验前先将值转为字符串
        // 		transform(value) {
        // 			return String(value);
        // 		},
        // 		trigger: ['change', 'blur'] ,
        // 	} ,
        // ],
        // 服务有效时间
        "extendInfo.extendEndTime": [{
          required: true,
          message: "请选择服务有效时间",
          trigger: ["change", "blur"]
        }],
        // 服务有效公里数
        "extendInfo.extendSpace": [{
          required: true,
          // pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
          // 正则检验前先将值转为字符串
          // transform(value) {
          // 	return String(value);
          // },
          validator: function validator(rule, value, callback) {
            if (value != "" && value != undefined && Number(value) >= 0) {
              callback();
            } else {
              callback(new Error("请输入正确服务有效公里数"));
            }
          },
          message: "请输入正确服务有效公里数",
          trigger: ["change", "blur"]
        }],
        // 支付方式
        "payInfo.payType": [{
          required: true,
          message: "请选择支付方式",
          trigger: ["change", "blur"]
        }],
        // 实收金额
        "payInfo.payAmount": [{
          required: true,
          pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
          message: "请输入正确实收金额(整数部分最多九位小数部分最多两位)",
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          trigger: ["change", "blur"]
        }],
        // 代收金额
        // 'payInfo.entrustAmount': [
        // 	{
        // 		required: true,
        // 		pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
        // 		message: '请输入正确代收金额(整数部分最多九位小数部分最多两位)',
        // 		// 正则检验前先将值转为字符串
        // 		transform(value) {
        // 			return String(value);
        // 		},
        // 		trigger: ['change', 'blur'] ,
        // 	} ,
        // ],
        // 加价金额
        // 'payInfo.addAmount': [
        // 	{
        // 		required: true,
        // 		pattern: /^(([0-9]\d{1,9})|\d)(\.\d{1,2}){0,1}$/,
        // 		message: '请输入正确加价金额(整数部分最多九位小数部分最多两位)',
        // 		// 正则检验前先将值转为字符串
        // 		transform(value) {
        // 			return String(value);
        // 		},
        // 		trigger: ['change', 'blur'] ,
        // 	} ,
        // ],
        // 备注
        "payInfo.remark": [{
          required: false,
          message: "请输入备注",
          trigger: ["change", "blur"]
        }],
        // 客户姓名
        "customerInfo.customerName": [{
          required: true,
          message: "请输入客户姓名",
          trigger: ["change", "blur"]
        }],
        // 证件号码
        "customerInfo.cardId": [{
          required: true,
          validator: function validator(rule, value, callback) {
            if (_this.ajaxData.customerInfo.cardType == "1") {
              var reg = /^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
              if (_this.ajaxData.customerInfo.cardId != "") {
                if (reg.test(value)) {
                  callback();
                } else {
                  callback(new Error("身份证格式错误"));
                }
              } else {
                callback(new Error("请输入身份证号"));
              }
            } else if (_this.ajaxData.customerInfo.cardId != "") {
              callback();
            } else {
              callback(new Error("请输入证件号码"));
            }
          },
          // message: '请输入证件号码',
          trigger: ["change", "blur"]
        }],
        // 证件类型
        "customerInfo.cardType": [{
          required: true,
          message: "请选择证件类型",
          trigger: ["change", "blur"]
        }],
        // 户籍省
        "customerInfo.province": [{
          required: true,
          message: "请选择省",
          trigger: ["change", "blur"]
        }],
        // 户籍市
        "customerInfo.city": [{
          required: true,
          message: "请选择市",
          trigger: ["change", "blur"]
        }],
        // 户籍区
        // area: [
        //   { required: true, message: "请选择区", trigger: ["change", "blur"] },
        // ],
        // 详细地址
        "customerInfo.address": [{
          required: true,
          message: "请输入详细地址",
          trigger: ["change", "blur"]
        }],
        // 联系电话
        "customerInfo.tel": [{
          required: true,
          pattern: /^1[0-9]{10}$/,
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          message: "请输入正确的手机号码",
          trigger: ["change", "blur"]
        }],
        "customerInfo.email": [{
          required: true,
          pattern: /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/,
          // 正则检验前先将值转为字符串
          transform: function transform(value) {
            return String(value);
          },
          message: "请输入正确的邮箱",
          trigger: ["change", "blur"]
        }],
        // 经办人
        createUserName: [{
          required: true,
          message: "请输入经办人",
          trigger: ["change", "blur"]
        }],
        // 店方信息（职位）
        saleStoreType: [{
          required: true,
          message: "请选择店方信息（职位）",
          trigger: ["change", "blur"]
        }],
        // 店方信息（人员）
        saleStoreName: [{
          required: true,
          message: "请输入店方信息（人员）",
          trigger: ["change", "blur"]
        }],
        // 手写签名
        userSignUrl: [{
          required: true,
          message: "请手写签名",
          trigger: ["change", "blur"]
        }]
      },
      // 支付弹框数据
      payColumns: [[{
        id: "1",
        name: "微信"
      }, {
        id: "2",
        name: "支付宝"
      }, {
        id: "3",
        name: "现金"
      }, {
        id: "4",
        name: "刷卡"
      }]],
      // 延长保修期数据
      extendTimedata: [],
      // 省弹框数据
      provinceColumns: [_city.default],
      // 市弹框数据
      cityColumns: [],
      // 区弹框数据
      areaColumns: [],
      // 所属门店数据
      storeColumns: [],
      // 车牌号码前面的省简称数据
      provinceCarBrand: [[{
        id: 999,
        name: "新"
      }, {
        id: 1,
        name: "京"
      }, {
        id: 2,
        name: "津"
      }, {
        id: 3,
        name: "沪"
      }, {
        id: 4,
        name: "渝"
      }, {
        id: 5,
        name: "吉"
      }, {
        id: 6,
        name: "辽"
      }, {
        id: 7,
        name: "晋"
      }, {
        id: 8,
        name: "冀"
      }, {
        id: 9,
        name: "青"
      }, {
        id: 10,
        name: "鲁"
      }, {
        id: 11,
        name: "豫"
      }, {
        id: 12,
        name: "苏"
      }, {
        id: 13,
        name: "皖"
      }, {
        id: 14,
        name: "浙"
      }, {
        id: 15,
        name: "闽"
      }, {
        id: 16,
        name: "赣"
      }, {
        id: 17,
        name: "湘"
      }, {
        id: 18,
        name: "鄂"
      }, {
        id: 19,
        name: "粤"
      }, {
        id: 20,
        name: "琼"
      }, {
        id: 21,
        name: "甘"
      }, {
        id: 22,
        name: "陕"
      }, {
        id: 23,
        name: "黔"
      }, {
        id: 24,
        name: "滇"
      }, {
        id: 25,
        name: "川"
      }, {
        id: 26,
        name: "黑"
      }, {
        id: 27,
        name: "蒙"
      }, {
        id: 28,
        name: "新"
      }, {
        id: 29,
        name: "藏"
      }, {
        id: 30,
        name: "宁"
      }, {
        id: 31,
        name: "桂"
      }, {
        id: 32,
        name: "港"
      }, {
        id: 33,
        name: "澳"
      }]],
      // 延保项目数据
      Extended: [],
      // 店方信息弹框数据
      saleStoreTypeColumns: [[{
        id: "1",
        name: "售前"
      }, {
        id: "2",
        name: "售后"
      }]],
      // 证件类型数据
      cardTypeColumns: [[{
        id: "1",
        cardType: "身份证"
      }, {
        id: "2",
        cardType: "驾驶证"
      }, {
        id: "3",
        cardType: "护照"
      }, {
        id: "4",
        cardType: "港澳台证件"
      }]],
      // 汽车品牌弹框数据
      carBrandColumns: [],
      // 车系弹框数据
      carSeriesColumns: [],
      // 车型弹框数据
      carModelColumns: [],
      // 用户电子签名图片地址
      userHeadsName: app.globalData.userHeadsName
    };
  },
  updated: function updated() {},
  watch: {
    // 监听门店id变化
    "ajaxData.extendInfo.storeId": function ajaxDataExtendInfoStoreId() {
      // 获取延保项目数据
      this.getInsuranceItems();
      // 获取品牌车系车型
      this.getCar();
    },
    // 监听汽车品牌变化
    "ajaxData.extendInfo.carBrand": function ajaxDataExtendInfoCarBrand() {
      // 获取车系
      this.getCarType();
    },
    // 监听车系变化
    "ajaxData.extendInfo.carSeries": function ajaxDataExtendInfoCarSeries() {
      // 获取车型
      this.getCarmodel();
    },
    // 监听汽车品牌id变化
    "ajaxData.extendInfo.carId": function ajaxDataExtendInfoCarId() {
      // 获取延保项目数据
      this.getInsuranceItems();
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听购车时间变化
    "ajaxData.extendInfo.carBuyTime": function ajaxDataExtendInfoCarBuyTime() {
      // 计算延保价格
      this.CalculatePrice();
      this.nowtime(this.ajaxData.extendInfo.carBuyTime);
    },
    // 监听行驶里程变化
    "ajaxData.extendInfo.carMileage": function ajaxDataExtendInfoCarMileage() {
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听延保项目变化
    "ajaxData.extendInfo.projectId": function ajaxDataExtendInfoProjectId() {
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听延长保修期变化
    "ajaxData.extendInfo.extendTime": function ajaxDataExtendInfoExtendTime() {
      // 计算延保价格
      this.CalculatePrice();
    },
    // 监听省的变化
    "ajaxData.customerInfo.province": function ajaxDataCustomerInfoProvince() {
      var _this2 = this;
      _city.default.forEach(function (item) {
        if (item.label == _this2.ajaxData.customerInfo.province) {
          _this2.cityColumns = [];
          _this2.cityColumns.push(item.children); // 添加市的数据
        }
      });
    },
    // 监听市的变化
    "ajaxData.customerInfo.city": function ajaxDataCustomerInfoCity() {
      var _this3 = this;
      _city.default.forEach(function (item) {
        if (item.label == _this3.ajaxData.customerInfo.province) {
          item.children.forEach(function (itc) {
            if (itc.label == _this3.ajaxData.customerInfo.city) {
              _this3.areaColumns = [];
              _this3.areaColumns.push(itc.children);
            }
          });
        }
      });
    }
  },
  onShow: function onShow() {
    // this.btn1 = true // 提交审核
    // this.btn2 = true // 保存草稿
    // this.btn3 = true // 通过审核
    // this.btn4 = true // 驳回申请
    // this.btn5 = true // 发送邮件

    // 查看是否还存在token
    this.$API.goLogin();
    // 获取所属门店数据
    this.getStore();
    // 手写签名更新
    this.userHeadsName = app.globalData.userHeadsName;
    // 添加手写签名在表单的数据
    this.ajaxData.userSignUrl = app.globalData.userHeadsName;
    // 添加经办人
    this.ajaxData.createUserName = this.$API.getStorage("JBname");
  },
  onLoad: function onLoad(option) {
    if (option && option.option) {
      this.optionData = JSON.parse(decodeURIComponent(option.option));
      this.setFrom();
    }
  },
  onReady: function onReady() {
    this.videoContext = uni.createVideoContext("myVideo");

    // 开启表单正则
    this.$refs.createfrom.setRules(this.rules);
    // 限制服务截止时间
    this.nowtime();
    // 管理员 :
    // 	如果进入创建页面 或者 点击草稿列表进入创建页面 可以提交审核保存草稿
    // 	如果点击审核中列表进入创建页面  如果没有审核权限 则无法操作任何东西
    // 	如果点击审核通过列表进入创建页面 可以发送邮件 可以修改重新提审
    // 	如果点击驳回列表进入创建页面 可以重新提交审核

    // 业务员:
    // 	如果进入创建页面 或者 点击草稿列表进入创建页面 可以提交审核保存草稿
    // 	如果点击审核中列表进入创建页面  如果没有审核权限 则无法操作任何东西
    // 	如果点击审核通过列表进入创建页面  只能发送邮件
    // 	如果点击驳回列表进入创建页面 业务员修改后重新提审
    // 审核权限控制
    var SHrelos = this.$API.getStorage("SHrelos"); // 1为有权限
    if (SHrelos == 1 && this.ajaxData.operStatus == 2) {
      // operStatus 为 订单状态为提审状态
      this.btn3 = true; // 通过审核
      this.btn4 = true; // 驳回申请
    } else {
      this.btn3 = false; // 通过审核
      this.btn4 = false; // 驳回申请
    }
    // 订单状态(1草稿 2审核中 3审核通过 4拨回)
    var relosuser = this.$API.getStorage("relosuser"); // 用户权限 10为管理员 否则为业务员

    if (relosuser == "10" || SHrelos == 1) {
      if (this.ajaxData.operStatus == "" || this.ajaxData.operStatus == "1") {
        this.btn1 = true; // 提交审核
        this.btn2 = true; // 保存草稿
      } else if (this.ajaxData.operStatus == "2") {
        // 审核中无法修改
      } else if (this.ajaxData.operStatus == "3") {
        this.btn5 = true; // 发送邮件
        this.btn1 = true; // 提交审核
      } else {
        this.btn1 = true; // 提交审核
      }
    } else {
      if (this.ajaxData.operStatus == "" || this.ajaxData.operStatus == "1") {
        this.btn1 = true; // 提交审核
        this.btn2 = true; // 保存草稿
      } else if (this.ajaxData.operStatus == "2") {
        // 审核中无法修改
      } else if (this.ajaxData.operStatus == "3") {
        this.btn5 = true; // 发送邮件
      } else {
        this.btn1 = true; // 提交审核
      }
    }
  },

  methods: {
    videoPreview: function videoPreview() {
      var _this4 = this;
      // console.log(this.fileList9[0].url);
      setTimeout(function () {
        _this4.videoContext.requestFullScreen({
          direction: 0
        });
        _this4.videoContext.play();
      }, 10);
      this.videoPlay = true;
    },
    // 根据全屏切换事件，控制视频的显示隐藏
    screenChange: function screenChange(e) {
      if (!e.detail.fullScreen) {
        this.videoPlay = false;
      }
    },
    // 服务截止时间获取当前时间加八年
    nowtime: function nowtime(item) {
      var datetime;
      if (item) {
        datetime = new Date(item);
      } else {
        datetime = new Date();
      }
      var year = datetime.getFullYear();
      var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      datetime = new Date(year + 8 + "-" + month + "-" + date);
      this.extendEndMaxData = datetime.getTime();
    },
    // 空白函数防止误触
    test: function test() {},
    // 时间格式化
    timeString: function timeString(time) {
      var datetime = new Date(time);
      var year = datetime.getFullYear();
      var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
      var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
      // let hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
      // let minute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
      // let second = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
      return year + "年" + month + "月" + date + "日";
    },
    // 提交审核函数
    SubmitReview: function SubmitReview() {
      var _this5 = this;
      try {
        if (this.loading == false) {
          // 校验表单
          this.$refs.createfrom.validate().then( /*#__PURE__*/function () {
            var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
              var filetype, goData, rec, option, time;
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      filetype = [];
                      _this5.ajaxData.fileInfos.forEach(function (item) {
                        var numType = String(item.fileType);
                        filetype.push(numType);
                      });
                      if (filetype.includes("1")) {
                        _context.next = 5;
                        break;
                      }
                      uni.$u.toast("请上传身份证正面照");
                      return _context.abrupt("return");
                    case 5:
                      if (filetype.includes("2")) {
                        _context.next = 8;
                        break;
                      }
                      uni.$u.toast("请上传身份证反面照");
                      return _context.abrupt("return");
                    case 8:
                      if (filetype.includes("3")) {
                        _context.next = 11;
                        break;
                      }
                      uni.$u.toast("请上传行驶证证件照");
                      return _context.abrupt("return");
                    case 11:
                      if (filetype.includes("8")) {
                        _context.next = 14;
                        break;
                      }
                      uni.$u.toast("请上传刷卡小票照片");
                      return _context.abrupt("return");
                    case 14:
                      // 存储为审核中状态
                      _this5.ajaxData.operStatus = "2";
                      goData = JSON.parse(JSON.stringify(_objectSpread({}, _this5.ajaxData))); // 拼接市和区
                      goData.customerInfo.city = goData.customerInfo.city + "/" + goData.area;
                      // 删除区字段
                      delete goData.area;
                      // 开启整屏加载
                      _this5.loading = true;
                      _context.next = 21;
                      return _this5.$API.post("/extend/saveExtend", goData, app.globalData.json);
                    case 21:
                      rec = _context.sent;
                      if (rec.data.code == 200) {
                        app.globalData.userHeadsName = "";
                        // 打开/关闭 处理的盒子
                        _this5.operationTrans = !_this5.operationTrans;
                        // 关闭整平加载
                        _this5.loading = false;
                        uni.$u.toast("提审成功");
                        option = {
                          contractNo: rec.data.data.contractNo,
                          // 订单编号
                          updateTime: rec.data.data.updateTime // 创建时间
                        };
                        time = setTimeout(function () {
                          clearTimeout(time);
                          // 清空表单
                          _this5.resetFrom();
                          uni.redirectTo({
                            url: "/pages/submitpage/submitpage?option=".concat(encodeURIComponent(JSON.stringify(option)))
                          });
                          app.globalData.userHeadsName = "";
                        }, 500);
                      } else {
                        // 关闭整平加载
                        _this5.loading = false;
                        // uni.$u.toast('提审失败请重新提审')
                      }
                    case 23:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }()).catch(function (errors) {
            uni.$u.toast("校验失败");
          });
        } else {}
      } catch (err) {
        // 关闭整屏加载
        this.loading = false;
        // uni.$u.toast('提审失败请重新提审')
        console.log("提交审核函数报错", err);
      }
    },
    // 驳回申请模态框取消函数
    cancelreject: function cancelreject() {
      this.rejectShow = false;
    },
    // 驳回申请函数 模态框确定函数
    RejectReview: function RejectReview() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var resData, res, time;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                if (!(_this6.loading == false)) {
                  _context2.next = 11;
                  break;
                }
                resData = {
                  orderNo: _this6.optionData.orderNo,
                  // 订单编号
                  body: _this6.rejectText // 驳回原因
                }; // 开启整屏加载

                _this6.loading = true;
                // 关闭驳回申请弹框
                _this6.cancelreject();
                _context2.next = 7;
                return _this6.$API.post("/extend/cancel", resData, app.globalData.formdata);
              case 7:
                res = _context2.sent;
                if (res.data.code == 200) {
                  // 关闭整屏加载
                  _this6.loading = false;
                  uni.$u.toast("已驳回申请");
                  time = setTimeout(function () {
                    clearTimeout(time);
                    // 清空表单
                    _this6.resetFrom();
                    uni.redirectTo({
                      url: "/pages/listpage/listpage"
                    });
                  }, 500);
                } else {
                  uni.$u.toast(res.data.message);
                  // 关闭整屏加载
                  _this6.loading = false;
                }
                _context2.next = 11;
                break;
              case 11:
                _context2.next = 18;
                break;
              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                // 关闭整屏加载
                _this6.loading = false;
                uni.$u.toast("驳回失败");
                console.log("驳回申请函数报错", _context2.t0);
              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }))();
    },
    // 通过审核函数
    PassAudit: function PassAudit() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var resData, res, time;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                if (!(_this7.loading == false)) {
                  _context3.next = 10;
                  break;
                }
                resData = {
                  orderNo: _this7.optionData.orderNo // 订单编号
                }; // 开启整屏加载

                _this7.loading = true;
                _context3.next = 6;
                return _this7.$API.post("/extend/approved", resData, app.globalData.json);
              case 6:
                res = _context3.sent;
                if (res.data.code == 200) {
                  // 关闭整屏加载
                  _this7.loading = false;
                  uni.$u.toast("审核通过即将跳转至业务列表页");
                  time = setTimeout(function () {
                    clearTimeout(time);
                    // 清空表单
                    _this7.resetFrom();
                    uni.redirectTo({
                      url: "/pages/listpage/listpage"
                    });
                  }, 2000);
                } else {
                  uni.$u.toast(res.data.message);
                  // 关闭整屏加载
                  _this7.loading = false;
                }
                _context3.next = 10;
                break;
              case 10:
                _context3.next = 17;
                break;
              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                // 关闭整屏加载
                _this7.loading = false;
                uni.$u.toast("审核失败");
                console.log("通过审核函数报错", _context3.t0);
              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }))();
    },
    // 发送邮件 模态框取消按钮函数
    cancelbox: function cancelbox() {
      this.emilShow = false;
    },
    // 发送邮件(模态框确定函数)
    toEmil: function toEmil() {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var resData, res, time;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                if (!(_this8.loading == false)) {
                  _context4.next = 11;
                  break;
                }
                // 开启整屏加载
                _this8.loading = true;
                resData = {
                  orderNo: _this8.ajaxData.orderNo,
                  // 订单编号
                  email: _this8.ajaxData.customerInfo.email // 邮箱
                }; // 关闭发送邮件弹框

                _this8.cancelbox();
                _context4.next = 7;
                return _this8.$API.post("/message/sendEmail", resData, app.globalData.formdata);
              case 7:
                res = _context4.sent;
                if (res.data.code == 200) {
                  // 关闭整屏加载
                  _this8.loading = false;
                  uni.$u.toast("邮件已发送即将跳转至业务列表页");
                  time = setTimeout(function () {
                    clearTimeout(time);
                    // 清空表单
                    _this8.resetFrom();
                    uni.redirectTo({
                      url: "/pages/listpage/listpage"
                    });
                  }, 2000);
                } else {
                  uni.$u.toast(res.data.message);
                  // 关闭整屏加载
                  _this8.loading = false;
                }
                _context4.next = 11;
                break;
              case 11:
                _context4.next = 18;
                break;
              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](0);
                // 关闭整屏加载
                _this8.loading = false;
                uni.$u.toast("邮件发送失败");
                console.log("发送邮件函数报错", _context4.t0);
              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 13]]);
      }))();
    },
    // 表单回填
    setFrom: function setFrom() {
      var _this9 = this,
        _this$optionData$exte,
        _this$optionData$exte2,
        _this$optionData$exte3,
        _this$optionData$exte4,
        _this$optionData$exte5,
        _this$optionData$exte6,
        _this$optionData$exte7;
      // 城市格式化
      var cityformat = function cityformat() {
        if (_this9.optionData.customerInfo.city) {
          var cityarr = _this9.optionData.customerInfo.city.split("/");
          return cityarr;
        } else {
          return ["", ""];
        }
      };
      // 证件类型格式化
      var cardType_chineseformat = function cardType_chineseformat() {
        if (_this9.optionData.customerInfo.cardType) {
          var cardType = "";
          _this9.cardTypeColumns[0].forEach(function (item) {
            if (item.id == _this9.optionData.customerInfo.cardType) {
              cardType = item.cardType;
            }
          });
          return cardType;
        } else {
          return "";
        }
      };
      // 图片信息格式化
      (function () {
        _this9.optionData.fileInfos.forEach(function (item) {
          _this9["fileList".concat(item.fileType)].push({
            url: item.fileUrl
          });
        });
      })();
      this.ajaxData = {
        // 车辆信息
        extendInfo: {
          id: this.optionData.extendInfo.id,
          orderNo: this.optionData.extendInfo.orderNo,
          storeId: this.optionData.extendInfo.storeId || "",
          // 所属门店id @
          storeName: this.optionData.extendInfo.storeName,
          // 所属门店名称 @ ! 1
          carBrand: this.optionData.extendInfo.carBrand,
          // 汽车品牌名称 @ ! 1
          carSeries: this.optionData.extendInfo.carSeries,
          // 车系 @ ! 1
          carModel: this.optionData.extendInfo.carModel,
          // 车型 @ ! 1
          carId: this.optionData.extendInfo.carId || "",
          // 汽车品牌的id @
          carLicenseNum: this.optionData.extendInfo.carLicenseNum,
          // 车牌号各省代称 @ ! 1
          carLicense: this.optionData.extendInfo.carLicense,
          // 首字母加车牌号 @ ! 1
          carCode: this.optionData.extendInfo.carCode,
          // 车架VIN码 @ ! 1
          carEngine: this.optionData.extendInfo.carEngine,
          // 发动机号 @ ! 1
          carBuyTime: this.optionData.extendInfo.carBuyTime || "",
          // 购车时间 @ ! 1
          carPurchase: this.optionData.extendInfo.carPurchase || "",
          // 新车购置价 @ ! 1
          carMileage: this.optionData.extendInfo.carMileage || "",
          // 行驶里程 @ ! 1
          projectId: this.optionData.extendInfo.projectId || "",
          // 延保项目的id @
          projectName: this.optionData.extendInfo.projectName,
          // 延保项目的名称 @ !
          warrantyTime: this.optionData.extendInfo.warrantyTime,
          // 原厂质保时间 @ 1
          extendTime: this.optionData.extendInfo.extendTime || "",
          // 延长保修期 @ ! 1
          extendQuota: this.optionData.extendInfo.extendQuota || "",
          // 延保金额  @ ! 1
          extendEndTime: this.optionData.extendInfo.extendEndTime,
          // 服务截止时间(日期) @ ! 1
          extendSpace: Number(this.optionData.extendInfo.extendSpace),
          // 服务截止时间(公里数) @ ! 1
          extendPrice: this.optionData.extendInfo.extendPrice || 0,
          // 延保价格 @
          originCarMileage: this.optionData.originCarMileage // 原厂质保里程
        },

        // 支付信息
        payInfo: {
          id: this.optionData.payInfo.id,
          orderNo: this.optionData.payInfo.orderNo,
          payType: this.optionData.payInfo.payType,
          // 支付类型 (1微信 2支付宝 3现金 4刷卡) @ ! 1
          payAmount: this.optionData.payInfo.payAmount || "",
          // 实收金额 @ ! 1
          entrustAmount: this.optionData.payInfo.entrustAmount || "",
          // 代收金额 @ ! 1
          addAmount: this.optionData.payInfo.addAmount || "",
          // 加价金额 @ ! 1
          remark: this.optionData.payInfo.remark,
          // 备注 @ ! 1
          createTime: this.optionData.payInfo.createTime // 当前时间时间戳
        },

        // 影像文件
        fileInfos: (0, _toConsumableArray2.default)(this.optionData.fileInfos),
        // 用户信息
        customerInfo: {
          id: this.optionData.customerInfo.id,
          orderNo: this.optionData.customerInfo.orderNo,
          customerName: this.optionData.customerInfo.customerName,
          // 客户姓名 @ ! 1
          useName: this.optionData.customerInfo.useName,
          // 使用人姓名 @
          cardId: this.optionData.customerInfo.cardId,
          // 证件号码 @ ! 1
          cardType: this.optionData.customerInfo.cardType,
          // 证件类型 @ ! 1
          province: this.optionData.customerInfo.province,
          // 户籍省 @ ! 1
          city: cityformat()[0],
          // 户籍市 @ ! 1
          address: this.optionData.customerInfo.address,
          // 详细地址 @ ! 1
          tel: this.optionData.customerInfo.tel,
          // 联系电话 @ ! 1
          email: this.optionData.customerInfo.email // 电子邮箱 @ !
          // createTime: this.optionData.customerInfo.createTime, // 时间戳
        },

        sourceType: this.optionData.sourceType,
        // 录单来源 1为移动端
        operStatus: this.optionData.operStatus,
        // 订单状态(1草稿 2审核中 3审核通过 4拨回)
        saleStoreName: this.optionData.saleStoreName,
        // 店方信息(人员) @ ! 1
        saleStoreType: this.optionData.saleStoreType,
        // 店方信息(售前售后) @ ! 1
        saleStoreId: this.optionData.extendInfo.storeId || "",
        // 所属门店id @
        userSignUrl: this.optionData.userSignUrl,
        // 用户手写签名图片地址 @ ! 1
        createUserName: this.optionData.createUserName,
        // 经办人 @ ! 1
        area: cityformat()[1],
        // 区
        id: this.optionData.id,
        // 回显比必加
        orderNo: this.optionData.orderNo // 订单编号 回显必加
      }, this.optionData.extendInfo.warrantyTime = (_this$optionData$exte = this.optionData.extendInfo) !== null && _this$optionData$exte !== void 0 && _this$optionData$exte.warrantyTime.includes("年") ? (_this$optionData$exte2 = this.optionData.extendInfo) === null || _this$optionData$exte2 === void 0 ? void 0 : _this$optionData$exte2.warrantyTime : ((_this$optionData$exte3 = this.optionData.extendInfo) === null || _this$optionData$exte3 === void 0 ? void 0 : _this$optionData$exte3.warrantyTime) + "年";
      this.optionData.extendInfo.originCarMileage = (_this$optionData$exte4 = this.optionData.extendInfo) !== null && _this$optionData$exte4 !== void 0 && _this$optionData$exte4.originCarMileage.includes("公里") ? (_this$optionData$exte5 = this.optionData.extendInfo) === null || _this$optionData$exte5 === void 0 ? void 0 : _this$optionData$exte5.originCarMileage : ((_this$optionData$exte6 = this.optionData.extendInfo) === null || _this$optionData$exte6 === void 0 ? void 0 : _this$optionData$exte6.originCarMileage) + "公里";
      this.timeYCarRun = ((_this$optionData$exte7 = this.optionData.extendInfo) === null || _this$optionData$exte7 === void 0 ? void 0 : _this$optionData$exte7.warrantyTime) + this.optionData.extendInfo.originCarMileage; //原厂质保时间及公里数
      this.oldsix = this.optionData.extendInfo.carBuyTime || ""; // 购车时间弹框隐藏参数 (为了不展示时间戳且插件不报错)
      this.oldsix_chinese = this.optionData.extendInfo.carBuyTime && this.timeString(this.optionData.extendInfo.carBuyTime); // 格式化的购车时间参数(为了展示xxxx-xx-xx)
      this.oldfive = this.optionData.extendInfo.extendEndTime && this.timeString(this.optionData.extendInfo.extendEndTime); // 服务有效截止时间弹框隐藏参数(为了不展示时间戳且插件不报错)
      this.oldfive_chinese = this.optionData.extendInfo.extendEndTime && this.timeString(this.optionData.extendInfo.extendEndTime); // 格式化的服务截止时间参数(为了展示xxxx-xx-xx)
      this.cardType_chinese = cardType_chineseformat(); // 证件类型(为了不展示id)
      this.showstoretype = this.optionData.saleStoreType == 1 ? "售前" : this.optionData.saleStoreType == 2 ? "售后" : ""; // 店方信息(展示用 售前售后)
      this.paytypetext = this.optionData.payInfo.payType == 1 ? "微信" : this.optionData.payInfo.payType == 2 ? "支付宝" : this.optionData.payInfo.payType == 3 ? "现金" : this.optionData.payInfo.payType == 4 ? "刷卡" : ""; // 支付方式(展示用)
      this.userHeadsName = this.optionData.userSignUrl; // 手写签名判断条件
      app.globalData.userHeadsName = this.optionData.userSignUrl; // 存储的手写签名判断条件
    },
    // 表单重置
    resetFrom: function resetFrom() {
      this.ajaxData = {
        // 车辆信息
        extendInfo: {
          id: "",
          orderNo: "",
          storeId: "",
          // 所属门店id @
          storeName: "",
          // 所属门店名称 @ ! 1
          carBrand: "",
          // 汽车品牌名称 @ ! 1
          carSeries: "",
          // 车系 @ ! 1
          carModel: "",
          // 车型 @ ! 1
          carId: "",
          // 汽车品牌的id @
          carLicenseNum: "",
          // 车牌号各省代称 @ ! 1
          carLicense: "",
          // 首字母加车牌号 @ ! 1
          carCode: "",
          // 车架VIN码 @ ! 1
          carEngine: "",
          // 发动机号 @ ! 1
          carBuyTime: "",
          // 购车时间 @ ! 1
          carPurchase: "",
          // 新车购置价 @ ! 1
          carMileage: "",
          // 行驶里程 @ ! 1
          projectId: "",
          // 延保项目的id @
          projectName: "",
          // 延保项目的名称 @ !
          warrantyTime: "",
          // 原厂质保时间 @ 1
          extendTime: "",
          // 延长保修期 @ ! 1
          extendQuota: "",
          // 延保金额  @ ! 1
          extendEndTime: "",
          // 服务截止时间(日期) @ ! 1
          extendSpace: "",
          // 服务截止时间(公里数) @ ! 1
          extendPrice: "",
          // 延保价格 @
          originCarMileage: "" // 原厂质保公里数
        },

        // 支付信息
        payInfo: {
          id: "",
          orderNo: "",
          payType: "",
          // 支付类型 (1微信 2支付宝 3现金 4刷卡) @ ! 1
          payAmount: "",
          // 实收金额 @ ! 1
          entrustAmount: "",
          // 代收金额 @ ! 1
          addAmount: "",
          // 加价金额 @ ! 1
          remark: "",
          // 备注 @ ! 1
          createTime: new Date() // 当前时间时间戳
        },

        // 影像文件
        fileInfos: [],
        // 用户信息
        customerInfo: {
          id: "",
          orderNo: "",
          customerName: "",
          // 客户姓名 @ ! 1
          useName: "",
          // 使用人姓名 @
          cardId: "",
          // 证件号码 @ ! 1
          cardType: "",
          // 证件类型 @ ! 1
          province: "",
          // 户籍省 @ ! 1
          city: "",
          // 户籍市 @ ! 1
          address: "",
          // 详细地址 @ ! 1
          tel: "",
          // 联系电话 @ ! 1
          email: "1337836843@qq.com",
          // 电子邮箱 @ !
          createTime: new Date() // 时间戳
        },

        sourceType: "1",
        // 录单来源 1为移动端
        operStatus: "",
        // 订单状态(1草稿 2审核中 3审核通过 4拨回)
        saleStoreName: "",
        // 店方信息(人员) @ ! 1
        saleStoreType: "",
        // 店方信息(售前售后) @ ! 1
        saleStoreId: "",
        // 所属门店id @
        userSignUrl: "",
        // 用户手写签名图片地址 @ ! 1
        createUserName: "",
        // 经办人 @ ! 1
        area: "" // 区
      }, this.oldsix = ""; // 购车时间弹框隐藏参数 (为了不展示时间戳且插件不报错)
      this.oldsix_chinese = ""; // 格式化的购车时间参数(为了展示xxxx-xx-xx)
      this.oldfive = ""; // 服务有效截止时间弹框隐藏参数(为了不展示时间戳且插件不报错)
      this.oldfive_chinese = ""; // 格式化的服务截止时间参数(为了展示xxxx-xx-xx)
      this.cardType_chinese = ""; // 证件类型(为了不展示id)
      this.showstoretype = ""; // 店方信息(展示用 售前售后)
      this.paytypetext = ""; // 支付方式(展示用)
      this.userHeadsName = ""; // 手写签名判断条件
      app.globalData.userHeadsName = ""; // 存储的手写签名判断条件
      this.timeYCarRun = ""; //原厂质保时间及公里数
      // 身份证正面
      this.fileList1 = [];
      // 身份证反面
      this.fileList2 = [];
      // 行驶证件照
      this.fileList3 = [];
      // 行驶里程
      this.fileList4 = [];
      // 车辆前照
      this.fileList5 = [];
      // 车身后照
      this.fileList6 = [];
      // 线上支付照
      this.fileList7 = [];
      // 刷卡小票
      this.fileList8 = [];
      // 车辆视频
      this.fileList9 = [];
    },
    // 保存草稿
    SaveDraft: function SaveDraft() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var goData, rec, time, _rec$data;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                if (!(_this10.loading == false)) {
                  _context5.next = 13;
                  break;
                }
                // 存储为草稿状态
                _this10.ajaxData.operStatus = "1";
                goData = JSON.parse(JSON.stringify(_objectSpread({}, _this10.ajaxData))); // 拼接市和区
                goData.customerInfo.city = goData.customerInfo.city + "/" + goData.area;
                // 删除区字段
                delete goData.area;
                // 开启整屏加载
                _this10.loading = true;
                _context5.next = 9;
                return _this10.$API.post("/extend/saveExtend", goData, app.globalData.json);
              case 9:
                rec = _context5.sent;
                if (rec.data.code == 200) {
                  // 打开/关闭 处理的盒子
                  _this10.operationTrans = !_this10.operationTrans;
                  // 关闭整屏加载
                  _this10.loading = false;
                  uni.$u.toast("操作成功");
                  time = setTimeout(function () {
                    clearTimeout(time);
                    // 清空表单
                    _this10.resetFrom();
                    uni.redirectTo({
                      url: "/pages/listpage/listpage"
                    });
                  }, 500);
                } else {
                  uni.$u.toast((rec === null || rec === void 0 ? void 0 : (_rec$data = rec.data) === null || _rec$data === void 0 ? void 0 : _rec$data.message) || (rec === null || rec === void 0 ? void 0 : rec.message) || "网络错误");
                  // 关闭整屏加载
                  _this10.loading = false;
                }
                _context5.next = 13;
                break;
              case 13:
                _context5.next = 20;
                break;
              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                // 关闭整屏加载
                _this10.loading = false;
                uni.$u.toast("保存失败, 请重新保存");
                console.log("保存草稿函数出错", _context5.t0);
              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 15]]);
      }))();
    },
    // 处理按钮的函数
    handle: function handle() {
      if (this.btn1 == false && this.btn2 == false && this.btn3 == false && this.btn4 == false && this.btn5 == false) {
        uni.$u.toast("暂无处理权限");
      } else {
        // 打开/关闭 处理的盒子
        this.operationTrans = !this.operationTrans;
      }
    },
    // 身份证正面读取后处理函数
    afterRead1: function afterRead1(event) {
      var _this11 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this11["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop = function _loop(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this11.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "1",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this11["fileList".concat(event.name)][fileListLen];
            _this11["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop(i);
      }
    },
    // 身份证正面删除处理函数
    deletePic1: function deletePic1(event) {
      var _this12 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); // 删除身份证正面
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this12.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 身份证反面读取后处理函数
    afterRead2: function afterRead2(event) {
      var _this13 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this13["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop2 = function _loop2(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this13.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "2",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this13["fileList".concat(event.name)][fileListLen];
            _this13["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop2(i);
      }
    },
    // 身份证反面删除处理函数
    deletePic2: function deletePic2(event) {
      var _this14 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); // 删除身份证反面
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this14.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 行驶证证件读取后处理函数
    afterRead3: function afterRead3(event) {
      var _this15 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this15["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop3 = function _loop3(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this15.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "3",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this15["fileList".concat(event.name)][fileListLen];
            _this15["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop3(i);
      }
    },
    // 行驶证证件删除处理函数
    deletePic3: function deletePic3(event) {
      var _this16 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); //删除行驶证证件
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this16.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 行驶里程读取后处理函数
    afterRead4: function afterRead4(event) {
      var _this17 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this17["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop4 = function _loop4(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this17.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "4",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this17["fileList".concat(event.name)][fileListLen];
            _this17["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop4(i);
      }
    },
    // 行驶里程删除处理函数
    deletePic4: function deletePic4(event) {
      var _this18 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); //删除行驶里程
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this18.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 车辆前照读取后处理函数
    afterRead5: function afterRead5(event) {
      var _this19 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this19["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop5 = function _loop5(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this19.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "5",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this19["fileList".concat(event.name)][fileListLen];
            _this19["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop5(i);
      }
    },
    // 车辆前照删除处理函数
    deletePic5: function deletePic5(event) {
      var _this20 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); //删除车辆前照
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this20.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 车身后照读取后处理函数
    afterRead6: function afterRead6(event) {
      var _this21 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this21["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop6 = function _loop6(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this21.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "6",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this21["fileList".concat(event.name)][fileListLen];
            _this21["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop6(i);
      }
    },
    // 车身后照删除处理函数
    deletePic6: function deletePic6(event) {
      var _this22 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); //删除车身后照
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this22.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 线上支付读取后处理函数
    afterRead7: function afterRead7(event) {
      var _this23 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this23["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop7 = function _loop7(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this23.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "7",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this23["fileList".concat(event.name)][fileListLen];
            _this23["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop7(i);
      }
    },
    // 线上支付删除处理函数
    deletePic7: function deletePic7(event) {
      var _this24 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); // 删除线上支付
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this24.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 刷卡小票读取后处理函数
    afterRead8: function afterRead8(event) {
      var _this25 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this25["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop8 = function _loop8(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this25.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "8",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this25["fileList".concat(event.name)][fileListLen];
            _this25["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop8(i);
      }
    },
    // 刷卡小票删除处理函数
    deletePic8: function deletePic8(event) {
      var _this26 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); // 删除刷卡小票
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this26.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 车辆视频读取后处理函数
    afterRead9: function afterRead9(event) {
      var _this27 = this;
      var lists = [].concat([event.file]);
      if (lists.length > 1) {
        lists = [lists.pop()];
      }
      var fileListLen = this["fileList".concat(event.name)].length;
      lists.map(function (item) {
        _this27["fileList".concat(event.name)].push(_objectSpread(_objectSpread({}, item), {}, {
          status: "uploading",
          message: "上传中"
        }));
      });
      var _loop9 = function _loop9(i) {
        new Promise(function (resolve, reject) {
          uni.uploadFile({
            url: uni.getStorageSync("SYSTEMURL") + "/oss/uploadFile",
            filePath: lists[i].url,
            name: "file",
            header: {
              token: uni.getStorageSync("token")
            },
            success: function success(res) {
              resolve(JSON.parse(res.data));
            }
          });
        }).then(function (rec) {
          if (rec.code == 200) {
            _this27.ajaxData.fileInfos.push({
              id: "",
              orderNo: "",
              fileName: rec.data.fileName,
              // 文件名称
              fileId: rec.data.fileId,
              // 文件的key
              fileUrl: rec.data.fileUrl,
              // 文件地址
              fileType: "9",
              // 文件类型(1身份证正面2身份证反面3行驶证证件4行驶里程5车辆前照6车身前后7线上支付8刷卡小票9车辆视频)
              createTime: new Date() // 时间戳
            });

            var item = _this27["fileList".concat(event.name)][fileListLen];
            _this27["fileList".concat(event.name)].splice(fileListLen, 1, Object.assign(item, {
              status: "success",
              message: ""
            }));
            fileListLen++;
          }
        });
      };
      for (var i = 0; i < lists.length; i++) {
        _loop9(i);
      }
    },
    // 车辆视频删除处理函数
    deletePic9: function deletePic9(event) {
      var _this28 = this;
      this["fileList".concat(event.name)].splice(event.index, 1); //删除视频
      this.ajaxData.fileInfos.forEach(function (item, index) {
        if (item.fileType == event.name) {
          _this28.ajaxData.fileInfos.splice(index, 1);
        }
      });
    },
    // 延长保修期弹框关闭
    extendTimeCancel: function extendTimeCancel() {
      this.extendTimeOpen = false;
    },
    // 延长保修期弹框确定
    extendTimeConfirm: function extendTimeConfirm(data) {
      this.ajaxData.extendInfo.extendTime = data.value[0].prodYear; // 选择的延长保修期
      this.extendTimeCancel();
    },
    // 支付方式弹框取消函数
    payCancel: function payCancel() {
      this.payOpen = false;
    },
    // 支付方式弹框确定函数
    payConfirm: function payConfirm(data) {
      this.paytypetext = data.value[0].name; // 展示用  选择的支付方式
      this.ajaxData.payInfo.payType = data.value[0].id; // 选择的支付方式的id
      this.payCancel();
    },
    // 区弹框取消的函数
    areaCancel: function areaCancel() {
      this.areaOpen = false;
    },
    // 区弹框确定的函数
    areaConfirm: function areaConfirm(data) {
      this.ajaxData.area = data.value[0].label;
      this.areaCancel();
    },
    // 市弹框取消的函数
    cityCancel: function cityCancel() {
      this.cityOpen = false;
    },
    // 市弹框确定的函数
    cityConfirm: function cityConfirm(data) {
      this.areaColumns = []; // 清空区的数据
      this.ajaxData.area = ""; //清空选中的区
      this.areaColumns.push(data.value[0].children); // 添加区的数据
      this.ajaxData.customerInfo.city = data.value[0].label; // 选择市的数据
      this.cityCancel();
    },
    // 省弹框取消的函数
    provinceCancel: function provinceCancel() {
      this.provinceOpen = false;
    },
    // 省弹框确定的函数
    provinceConfirm: function provinceConfirm(data) {
      this.cityColumns = []; // 清空市的数据
      this.areaColumns = []; // 清空区的数据
      this.ajaxData.area = ""; //清空选中的区
      this.ajaxData.customerInfo.city = ""; // 清空选中的市
      this.cityColumns.push(data.value[0].children); // 添加市的数据
      this.ajaxData.customerInfo.province = data.value[0].label; // 选中的省
      this.provinceCancel();
    },
    // 证件类型弹框确定函数
    cardTypeConfirm: function cardTypeConfirm(data) {
      this.cardType_chinese = data.value[0].cardType; // 展示用 证件类型
      this.ajaxData.customerInfo.cardType = data.value[0].id; // 选中的证件类型
      this.cardTypeCancel();
    },
    // 证件类型弹框取消函数
    cardTypeCancel: function cardTypeCancel() {
      this.cardTypeOpen = false;
    },
    // 服务有效截止时间弹框取消函数
    extendEndCancel: function extendEndCancel() {
      this.extendEndOpen = false;
    },
    // 服务有效截止时间弹框确定函数
    extendEndConfirm: function extendEndConfirm(data) {
      this.ajaxData.extendInfo.extendEndTime = data.value; // 选择的服务有效截止时间(请求用)
      this.oldfive_chinese = uni.$u.timeFormat(data.value, "yyyy年mm月dd日"); // 选择的服务有效截止时间(展示用)
      this.extendEndCancel();
    },
    // 车型弹框取消函数
    carModelCancel: function carModelCancel() {
      this.carModelOpen = false;
    },
    // 车型弹框确定函数
    carModelConfirm: function carModelConfirm(data) {
      this.ajaxData.extendInfo.carModel = data.value[0].carModel; // 选择的车型
      this.ajaxData.extendInfo.carId = data.value[0].id; // 选择的汽车品牌ID
      this.ajaxData.extendInfo.warrantyTime = data.value[0].carPeriod; // 原厂质保时间
      this.ajaxData.extendInfo.originCarMileage = data.value[0].carMileage; // 原厂质保里程
      this.timeYCarRun = data.value[0].carPeriod + "年" + data.value[0].carMileage + "公里"; // 原厂质保时间及其公里数 展示用
      this.carModelCancel();
    },
    // 车系弹框取消函数
    carSeriesCancel: function carSeriesCancel() {
      this.carSeriesOpen = false;
    },
    // 车系弹框确定函数
    carSeriesConfirm: function carSeriesConfirm(data) {
      if (this.ajaxData.extendInfo.carSeries === data.value[0].carSeries) {
        this.carSeriesCancel();
      } else {
        this.ajaxData.extendInfo.carModel = ""; // 清空选择的车型
        this.ajaxData.extendInfo.carId = ""; // 选择的汽车品牌ID
        this.ajaxData.extendInfo.warrantyTime = ""; // 原厂质保时间
        this.timeYCarRun = "",
        // 清空原厂质保时间及公里数 展示用
        this.ajaxData.extendInfo.originCarMileage = ""; // 清空原厂质保公里数
        this.carModelColumns = []; // 车型数据清空
        this.ajaxData.extendInfo.carSeries = data.value[0].carSeries; // 选择的车系
        this.carSeriesCancel();
      }
    },
    // 汽车品牌弹框取消按钮函数
    carBrandCancel: function carBrandCancel() {
      this.carBrandOpen = false;
    },
    // 汽车品牌弹框取确定钮函数
    carBrandConfirm: function carBrandConfirm(data) {
      if (this.ajaxData.extendInfo.carBrand === data.value[0].carBrand) {
        this.carBrandCancel();
      } else {
        this.ajaxData.extendInfo.carModel = ""; // 清空选择的车型
        this.ajaxData.extendInfo.carId = ""; // 选择的汽车品牌ID
        this.ajaxData.extendInfo.warrantyTime = ""; // 原厂质保时间
        this.timeYCarRun = "",
        // 清空原厂质保时间及公里数 展示用
        this.ajaxData.extendInfo.originCarMileage = ""; // 清空原厂质保公里数
        this.carModelColumns = []; // 车型数据清空
        this.ajaxData.extendInfo.carSeries = []; // 清空选择的车系
        this.carSeriesColumns = []; // 清空车需弹框数据
        this.ajaxData.extendInfo.carBrand = data.value[0].carBrand; // 选择的汽车品牌名称
        this.carBrandCancel();
      }
    },
    // 店方信息(职位)弹框取消按钮函数
    saleStoreTypeCancel: function saleStoreTypeCancel() {
      this.saleStoreTypeOpen = false;
    },
    // 店方信息(职位)弹框取确定钮函数
    saleStoreTypeConfirm: function saleStoreTypeConfirm(data) {
      this.ajaxData.saleStoreType = data.value[0].id; // 选择的店方信息(职位)id
      this.showstoretype = data.value[0].name; // 选择的店方信息(职位)名称
      this.saleStoreTypeCancel();
    },
    // 延保项目弹框取消按钮函数
    ExtendedItemCancel: function ExtendedItemCancel() {
      this.ExtendedItemOpen = false; // 关闭延保项目弹框
    },
    // 延保项目弹框确定按钮函数
    ExtendedItemConfirm: function ExtendedItemConfirm(data) {
      this.ajaxData.extendInfo.projectId = data.value[0].id; // 选择的延保项目id
      this.ajaxData.extendInfo.projectName = data.value[0].prodName; // 选择的延保项目名称
      this.extendTimedata = []; // 清空延长保修期数据
      this.ajaxData.extendInfo.extendTime = ""; // 清空选择的延长保修期
      this.extendTimedata.push(data.value[0].projectYears); // 添加延长保修期数据
      this.ExtendedItemCancel();
    },
    // 购车时间弹框取消按钮函数
    PurchaseTimeCancel: function PurchaseTimeCancel() {
      this.PurchaseTimeOpen = false; // 关闭购车时间弹框
    },
    // 购车时间弹框确定按钮函数
    PurchaseTimeConfirm: function PurchaseTimeConfirm(data) {
      this.ajaxData.extendInfo.carBuyTime = data.value || ""; // 选择的购车时间(请求用)
      this.oldsix_chinese = uni.$u.timeFormat(data.value, "yyyy年mm月dd日"); // 选择的购车时间(展示用)
      this.PurchaseTimeCancel();
    },
    // 车牌省份弹框取消按钮函数
    provinceCarBrandCancel: function provinceCarBrandCancel() {
      this.provinceCarBrandOpen = false; // 关闭车牌省份弹框
    },
    // 车牌省份弹框确定按钮函数
    provinceCarBrandConfirm: function provinceCarBrandConfirm(data) {
      this.ajaxData.extendInfo.carLicenseNum = data.value[0].name; // 选择的车牌省份名称
      this.provinceCarBrandCancel();
    },
    // 所属门店弹框取消按钮函数
    storeCancel: function storeCancel() {
      this.storeOpen = false; // 关闭所属门店弹框
    },
    // 所属门店弹框确定按钮函数
    storeConfirm: function storeConfirm(data) {
      this.ajaxData.saleStoreId = data.value[0].id; // 选择的门店id(ajaxData下的直属字段)
      this.ajaxData.extendInfo.storeId = data.value[0].id; // 选择的门店id
      this.ajaxData.extendInfo.storeName = data.value[0].name; // 选择的门店名称
      this.ajaxData.extendInfo.carBrand = ""; // 清空选择的汽车品牌名称
      this.ajaxData.extendInfo.carSeries = ""; // 清空选择的车系
      this.ajaxData.extendInfo.carModel = ""; // 清空选择的车型
      this.ajaxData.extendInfo.carId = ""; // 清空选择的汽车品牌ID
      this.ajaxData.extendInfo.warrantyTime = ""; // 清空原厂质保时间
      this.ajaxData.extendInfo.originCarMileage = ""; // 清空原厂质保公里数
      this.timeYCarRun = "",
      // 清空原厂质保时间及公里数  展示用
      this.storeCancel(); // 关闭所属门店弹框
    },
    // 计算延保价格
    CalculatePrice: function CalculatePrice() {
      var _this29 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var carId, carBuyTime, carMileage, projectId, extendTime, res;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                carId = _this29.ajaxData.extendInfo.carId;
                carBuyTime = _this29.ajaxData.extendInfo.carBuyTime;
                carMileage = _this29.ajaxData.extendInfo.carMileage;
                projectId = _this29.ajaxData.extendInfo.projectId;
                extendTime = _this29.ajaxData.extendInfo.extendTime;
                if (!(carId && carBuyTime && carMileage && projectId && extendTime)) {
                  _context6.next = 13;
                  break;
                }
                _context6.next = 9;
                return _this29.$API.post("/extend/calPrice", {
                  carId: carId,
                  carBuyTime: carBuyTime,
                  carMileage: carMileage,
                  projectId: projectId,
                  extendTime: extendTime
                }, app.globalData.json);
              case 9:
                res = _context6.sent;
                if (res.data.code == 200) {
                  _this29.ajaxData.extendInfo.extendPrice = res.data.data.extendPrice || 0; // 延保价格
                  _this29.ajaxData.extendInfo.extendEndTime = res.data.data.extendEndTime; // 服务截止时间
                  _this29.oldfive_chinese = res.data.data.extendEndTime; // 服务截止时间
                  _this29.ajaxData.extendInfo.extendSpace = Number(res.data.data.extendSpace); // 服务截止公里数
                }
                _context6.next = 17;
                break;
              case 13:
                carId = "";
                carBuyTime = "";
                carMileage = "";
                projectId = "";
              case 17:
                _context6.next = 22;
                break;
              case 19:
                _context6.prev = 19;
                _context6.t0 = _context6["catch"](0);
                console.log("计算延保价格函数出错", _context6.t0);
              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 19]]);
      }))();
    },
    // 获取延保项目数据
    getInsuranceItems: function getInsuranceItems() {
      var _this30 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var ajaxData, res;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                if (!(_this30.ajaxData.extendInfo.storeId && _this30.ajaxData.extendInfo.carId)) {
                  _context7.next = 9;
                  break;
                }
                ajaxData = {
                  storeId: _this30.ajaxData.extendInfo.storeId,
                  // 门店id
                  carId: _this30.ajaxData.extendInfo.carId || "" // 选择的品牌iD
                };
                _context7.next = 5;
                return _this30.$API.post("/project/getByStoreIdAndCarId", ajaxData, app.globalData.json);
              case 5:
                res = _context7.sent;
                if (res.data.code == 200) {
                  _this30.Extended = []; // 清空延保项目
                  _this30.Extended.push(res.data.data);
                } else {
                  _this30.Extended = [];
                }
                _context7.next = 9;
                break;
              case 9:
                _context7.next = 14;
                break;
              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);
                console.log("获取延保项目数据的函数报错", _context7.t0);
              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 11]]);
      }))();
    },
    // 跳转至手写签名页面
    goHeadsblock: function goHeadsblock() {
      uni.navigateTo({
        url: "/pages/createInsurance/headsblock"
      });
    },
    // 获取车型
    getCarmodel: function getCarmodel() {
      var _this31 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var ajaxData, res;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                ajaxData = {
                  storeId: _this31.ajaxData.extendInfo.storeId,
                  // 门店id
                  carBrand: _this31.ajaxData.extendInfo.carBrand,
                  // 汽车品牌
                  carSeries: _this31.ajaxData.extendInfo.carSeries // 汽车 车系
                };
                _context8.next = 4;
                return _this31.$API.post("/car/listCarModelByCarSeries", ajaxData, app.globalData.json);
              case 4:
                res = _context8.sent;
                if (res.data.code == 200) {
                  _this31.carModelColumns = []; // 清空车形数据
                  _this31.carModelColumns.push(res.data.data); // 添加车型数据
                }
                _context8.next = 11;
                break;
              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);
                console.log("获取车型的接口报错", _context8.t0);
              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 8]]);
      }))();
    },
    // 获取车系
    getCarType: function getCarType() {
      var _this32 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var ajaxData, res, pushData;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                ajaxData = {
                  storeId: _this32.ajaxData.extendInfo.storeId,
                  // 门店id
                  carBrand: _this32.ajaxData.extendInfo.carBrand // 汽车品牌
                };
                _context9.next = 4;
                return _this32.$API.post("/car/listCarSeriesByCarBrand", ajaxData, app.globalData.json);
              case 4:
                res = _context9.sent;
                if (res.data.code == 200) {
                  _this32.carSeriesColumns = []; // 清空车系数据
                  pushData = [];
                  res.data.data.forEach(function (item) {
                    pushData.push({
                      carSeries: item
                    });
                  });
                  _this32.carSeriesColumns.push(pushData); // 添加车系数据
                }
                _context9.next = 11;
                break;
              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9["catch"](0);
                console.log("获取车系的接口报错", _context9.t0);
              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[0, 8]]);
      }))();
    },
    // 获取汽车品牌
    getCar: function getCar() {
      var _this33 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var ajaxData, res, pushData;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                ajaxData = {
                  storeId: _this33.ajaxData.extendInfo.storeId
                }; // const res = await this.$API.post('/car/listByStoreId', ajaxData, app.globalData.formdata) 弃用
                _context10.next = 4;
                return _this33.$API.post("/car/listCarBrandByStoreId", ajaxData, app.globalData.json);
              case 4:
                res = _context10.sent;
                if (res.data.code == 200) {
                  _this33.carBrandColumns = []; // 清空汽车品牌
                  pushData = [];
                  res.data.data.forEach(function (item) {
                    pushData.push({
                      carBrand: item
                    });
                  });
                  _this33.carBrandColumns.push(pushData); // 添加汽车品牌数据
                } else {
                  _this33.carBrandColumns = [];
                }
                _context10.next = 11;
                break;
              case 8:
                _context10.prev = 8;
                _context10.t0 = _context10["catch"](0);
                console.log("获取汽车品牌、车系、车型函数报错", _context10.t0);
              case 11:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[0, 8]]);
      }))();
    },
    // 获取所属门店
    getStore: function getStore() {
      var _this34 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var res;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return _this34.$API.post("/store/userStore", {}, app.globalData.json);
              case 3:
                res = _context11.sent;
                if (res.data.code == 200) {
                  _this34.storeColumns = [];
                  _this34.storeColumns.push(res.data.data.filter(function (item) {
                    return item === null || item === void 0 ? void 0 : item.id;
                  }));
                } else {
                  _this34.storeColumns = [];
                }
                _context11.next = 10;
                break;
              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                console.log("获取所属门店函数报错", _context11.t0);
              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[0, 7]]);
      }))();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 182:
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue?vue&type=style&index=0&id=e71662f8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./createInsurance.vue?vue&type=style&index=0&id=e71662f8&scoped=true&lang=css& */ 183);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_createInsurance_vue_vue_type_style_index_0_id_e71662f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/soindy/Documents/ShengHe/code/shenghe_car_mini/pages/createInsurance/createInsurance.vue?vue&type=style&index=0&id=e71662f8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[175,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/createInsurance/createInsurance.js.map
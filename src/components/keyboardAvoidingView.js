// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactNative = require("react-native");
var Props$BsReactNativeWeb = require("../private/props.js");
var UtilsRN$BsReactNativeWeb = require("../private/utilsRN.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -889544535,
    "position"
  ],
  /* tuple */[
    -797091375,
    "padding"
  ],
  /* tuple */[
    38537191,
    "height"
  ]
];

function behaviorToJs(param) {
  return Js_mapperRt.binarySearch(3, param, jsMapperConstantArray);
}

function make(accessibilityLabel, accessible, hitSlop, onAccessibilityTap, onLayout, onMagicTap, responderHandlers, pointerEvents, removeClippedSubviews, style, testID, accessibilityComponentType, accessibilityLiveRegion, collapsable, importantForAccessibility, needsOffscreenAlphaCompositing, renderToHardwareTextureAndroid, accessibilityTraits, accessibilityViewIsModal, shouldRasterizeIOS, keyboardVerticalOffset, behavior, contentContainerStyle) {
  var partial_arg = Props$BsReactNativeWeb.extendView(accessibilityLabel, accessible, hitSlop, onAccessibilityTap, onLayout, onMagicTap, responderHandlers, pointerEvents, removeClippedSubviews, style, testID, accessibilityComponentType, accessibilityLiveRegion, collapsable, importantForAccessibility, needsOffscreenAlphaCompositing, renderToHardwareTextureAndroid, accessibilityTraits, accessibilityViewIsModal, shouldRasterizeIOS, {
        keyboardVerticalOffset: keyboardVerticalOffset,
        behavior: UtilsRN$BsReactNativeWeb.option_map(behaviorToJs, behavior),
        contentContainerStyle: contentContainerStyle
      });
  var partial_arg$1 = ReactNative.KeyboardAvoidingView;
  return (function (param) {
      return ReasonReact.wrapJsForReason(partial_arg$1, partial_arg, param);
    });
}

exports.make = make;
/* ReasonReact Not a pure module */

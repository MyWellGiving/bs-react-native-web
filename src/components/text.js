// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReactNative = require("react-native");
var UtilsRN$BsReactNativeWeb = require("../private/utilsRN.js");

function CreateComponent(Impl) {
  var make = function (accessible, allowFontScaling, ellipsizeMode, numberOfLines, onLayout, onLongPress, onPress, pressRetentionOffset, selectable, style, testID, selectionColor, textBreakStrategy, adjustsFontSizeToFit, minimumFontScale, suppressHighlighting, value, children) {
    return ReasonReact.wrapJsForReason(Impl[/* view */0], {
                accessible: accessible,
                allowFontScaling: allowFontScaling,
                ellipsizeMode: UtilsRN$BsReactNativeWeb.option_map((function (param) {
                        if (param >= -866200747) {
                          if (param >= -856246640) {
                            return "tail";
                          } else {
                            return "middle";
                          }
                        } else if (param >= -989124320) {
                          return "head";
                        } else {
                          return "clip";
                        }
                      }), ellipsizeMode),
                numberOfLines: numberOfLines,
                onLayout: onLayout,
                onLongPress: onLongPress,
                onPress: onPress,
                pressRetentionOffset: pressRetentionOffset,
                selectable: selectable,
                style: style,
                testID: testID,
                selectionColor: selectionColor,
                textBreakStrategy: UtilsRN$BsReactNativeWeb.option_map((function (param) {
                        if (param !== -128197688) {
                          if (param >= 947848242) {
                            return "simple";
                          } else {
                            return "highQuality";
                          }
                        } else {
                          return "balanced";
                        }
                      }), textBreakStrategy),
                adjustsFontSizeToFit: adjustsFontSizeToFit,
                minimumFontScale: minimumFontScale,
                suppressHighlighting: suppressHighlighting
              }, value !== undefined ? $$Array.append(/* array */[value], children) : children);
  };
  return /* module */[/* make */make];
}

var Impl = /* module */[/* Text */ReactNative.Text];

function make(accessible, allowFontScaling, ellipsizeMode, numberOfLines, onLayout, onLongPress, onPress, pressRetentionOffset, selectable, style, testID, selectionColor, textBreakStrategy, adjustsFontSizeToFit, minimumFontScale, suppressHighlighting, value, children) {
  return ReasonReact.wrapJsForReason(Impl[/* view */0], {
              accessible: accessible,
              allowFontScaling: allowFontScaling,
              ellipsizeMode: UtilsRN$BsReactNativeWeb.option_map((function (param) {
                      if (param >= -866200747) {
                        if (param >= -856246640) {
                          return "tail";
                        } else {
                          return "middle";
                        }
                      } else if (param >= -989124320) {
                        return "head";
                      } else {
                        return "clip";
                      }
                    }), ellipsizeMode),
              numberOfLines: numberOfLines,
              onLayout: onLayout,
              onLongPress: onLongPress,
              onPress: onPress,
              pressRetentionOffset: pressRetentionOffset,
              selectable: selectable,
              style: style,
              testID: testID,
              selectionColor: selectionColor,
              textBreakStrategy: UtilsRN$BsReactNativeWeb.option_map((function (param) {
                      if (param !== -128197688) {
                        if (param >= 947848242) {
                          return "simple";
                        } else {
                          return "highQuality";
                        }
                      } else {
                        return "balanced";
                      }
                    }), textBreakStrategy),
              adjustsFontSizeToFit: adjustsFontSizeToFit,
              minimumFontScale: minimumFontScale,
              suppressHighlighting: suppressHighlighting
            }, value !== undefined ? $$Array.append(/* array */[value], children) : children);
}

exports.CreateComponent = CreateComponent;
exports.make = make;
/* Impl Not a pure module */

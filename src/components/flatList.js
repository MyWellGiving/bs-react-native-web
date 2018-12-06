// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");
var ReactNative = require("react-native");
var UtilsRN$BsReactNativeWeb = require("../private/utilsRN.js");

function CreateComponent(Impl) {
  var scrollToEnd = function (ref, animated) {
    ref.scrollToEnd({
          animated: animated
        });
    return /* () */0;
  };
  var scrollToIndex = function (ref, index, animated, viewOffset, viewPosition, _) {
    ref._scrollToIndex({
          index: index,
          viewOffset: Js_undefined.fromOption(viewOffset),
          viewPosition: Js_undefined.fromOption(viewPosition),
          animated: Js_undefined.fromOption(animated)
        });
    return /* () */0;
  };
  var scrollToItem = function (ref, item, animated, viewPosition, _) {
    ref._scrollToIndex({
          item: item,
          viewPosition: Js_undefined.fromOption(viewPosition),
          animated: Js_undefined.fromOption(animated)
        });
    return /* () */0;
  };
  var scrollToOffset = function (ref, offset, animated, _) {
    ref.scrollToOffset({
          offset: Js_undefined.fromOption(offset),
          animated: Js_undefined.fromOption(animated)
        });
    return /* () */0;
  };
  var renderItem = function (reRenderItem, jsRenderBag) {
    return Curry._1(reRenderItem, /* record */[
                /* item */jsRenderBag.item,
                /* index */jsRenderBag.index
              ]);
  };
  var separatorComponent = function (reSeparatorComponent, jsSeparatorProps) {
    return Curry._1(reSeparatorComponent, /* record */[
                /* highlighted */jsSeparatorProps.highlighted,
                /* leadingItem */Js_primitive.undefined_to_opt(jsSeparatorProps.leadingItem)
              ]);
  };
  var make = function (data, renderItem, keyExtractor, itemSeparatorComponent, bounces, listFooterComponent, listHeaderComponent, columnWrapperStyle, extraData, getItemLayout, horizontal, initialNumToRender, initialScrollIndex, inverted, numColumns, onEndReached, onEndReachedThreshold, onRefresh, onViewableItemsChanged, overScrollMode, pagingEnabled, refreshing, removeClippedSubviews, scrollEnabled, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, windowSize, maxToRenderPerBatch, viewabilityConfig, onScroll, style) {
    var partial_arg = {
      bounces: bounces,
      ItemSeparatorComponent: itemSeparatorComponent,
      ListFooterComponent: listFooterComponent,
      ListHeaderComponent: listHeaderComponent,
      columnWrapperStyle: columnWrapperStyle,
      data: data,
      extraData: extraData,
      getItemLayout: UtilsRN$BsReactNativeWeb.option_map((function (f, data, index) {
              return Curry._2(f, data === undefined ? undefined : Js_primitive.some(data), index);
            }), getItemLayout),
      horizontal: horizontal,
      initialNumToRender: initialNumToRender,
      initialScrollIndex: initialScrollIndex,
      inverted: inverted,
      keyExtractor: keyExtractor,
      numColumns: numColumns,
      onEndReached: onEndReached,
      onEndReachedThreshold: onEndReachedThreshold,
      onRefresh: onRefresh,
      onViewableItemsChanged: onViewableItemsChanged,
      overScrollMode: UtilsRN$BsReactNativeWeb.option_map((function (x) {
              if (x !== -958984497) {
                if (x >= 422592140) {
                  return "never";
                } else {
                  return "auto";
                }
              } else {
                return "always";
              }
            }), overScrollMode),
      pagingEnabled: pagingEnabled,
      refreshing: refreshing,
      renderItem: renderItem,
      removeClippedSubviews: removeClippedSubviews,
      scrollEnabled: scrollEnabled,
      showsHorizontalScrollIndicator: showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator: showsVerticalScrollIndicator,
      windowSize: windowSize,
      maxToRenderPerBatch: maxToRenderPerBatch,
      viewabilityConfig: viewabilityConfig,
      onScroll: onScroll,
      style: style
    };
    var partial_arg$1 = Impl[/* view */0];
    return (function (param) {
        return ReasonReact.wrapJsForReason(partial_arg$1, partial_arg, param);
      });
  };
  return /* module */[
          /* scrollToEnd */scrollToEnd,
          /* scrollToIndex */scrollToIndex,
          /* scrollToItem */scrollToItem,
          /* scrollToOffset */scrollToOffset,
          /* renderItem */renderItem,
          /* separatorComponent */separatorComponent,
          /* make */make
        ];
}

var Impl = /* module */[/* FlatList */ReactNative.FlatList];

function scrollToEnd(ref, animated) {
  ref.scrollToEnd({
        animated: animated
      });
  return /* () */0;
}

function scrollToIndex(ref, index, animated, viewOffset, viewPosition, _) {
  ref._scrollToIndex({
        index: index,
        viewOffset: Js_undefined.fromOption(viewOffset),
        viewPosition: Js_undefined.fromOption(viewPosition),
        animated: Js_undefined.fromOption(animated)
      });
  return /* () */0;
}

function scrollToItem(ref, item, animated, viewPosition, _) {
  ref._scrollToIndex({
        item: item,
        viewPosition: Js_undefined.fromOption(viewPosition),
        animated: Js_undefined.fromOption(animated)
      });
  return /* () */0;
}

function scrollToOffset(ref, offset, animated, _) {
  ref.scrollToOffset({
        offset: Js_undefined.fromOption(offset),
        animated: Js_undefined.fromOption(animated)
      });
  return /* () */0;
}

function renderItem(reRenderItem, jsRenderBag) {
  return Curry._1(reRenderItem, /* record */[
              /* item */jsRenderBag.item,
              /* index */jsRenderBag.index
            ]);
}

function separatorComponent(reSeparatorComponent, jsSeparatorProps) {
  return Curry._1(reSeparatorComponent, /* record */[
              /* highlighted */jsSeparatorProps.highlighted,
              /* leadingItem */Js_primitive.undefined_to_opt(jsSeparatorProps.leadingItem)
            ]);
}

function make(data, renderItem, keyExtractor, itemSeparatorComponent, bounces, listFooterComponent, listHeaderComponent, columnWrapperStyle, extraData, getItemLayout, horizontal, initialNumToRender, initialScrollIndex, inverted, numColumns, onEndReached, onEndReachedThreshold, onRefresh, onViewableItemsChanged, overScrollMode, pagingEnabled, refreshing, removeClippedSubviews, scrollEnabled, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, windowSize, maxToRenderPerBatch, viewabilityConfig, onScroll, style) {
  var partial_arg = {
    bounces: bounces,
    ItemSeparatorComponent: itemSeparatorComponent,
    ListFooterComponent: listFooterComponent,
    ListHeaderComponent: listHeaderComponent,
    columnWrapperStyle: columnWrapperStyle,
    data: data,
    extraData: extraData,
    getItemLayout: UtilsRN$BsReactNativeWeb.option_map((function (f, data, index) {
            return Curry._2(f, data === undefined ? undefined : Js_primitive.some(data), index);
          }), getItemLayout),
    horizontal: horizontal,
    initialNumToRender: initialNumToRender,
    initialScrollIndex: initialScrollIndex,
    inverted: inverted,
    keyExtractor: keyExtractor,
    numColumns: numColumns,
    onEndReached: onEndReached,
    onEndReachedThreshold: onEndReachedThreshold,
    onRefresh: onRefresh,
    onViewableItemsChanged: onViewableItemsChanged,
    overScrollMode: UtilsRN$BsReactNativeWeb.option_map((function (x) {
            if (x !== -958984497) {
              if (x >= 422592140) {
                return "never";
              } else {
                return "auto";
              }
            } else {
              return "always";
            }
          }), overScrollMode),
    pagingEnabled: pagingEnabled,
    refreshing: refreshing,
    renderItem: renderItem,
    removeClippedSubviews: removeClippedSubviews,
    scrollEnabled: scrollEnabled,
    showsHorizontalScrollIndicator: showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator: showsVerticalScrollIndicator,
    windowSize: windowSize,
    maxToRenderPerBatch: maxToRenderPerBatch,
    viewabilityConfig: viewabilityConfig,
    onScroll: onScroll,
    style: style
  };
  var partial_arg$1 = Impl[/* view */0];
  return (function (param) {
      return ReasonReact.wrapJsForReason(partial_arg$1, partial_arg, param);
    });
}

exports.CreateComponent = CreateComponent;
exports.scrollToEnd = scrollToEnd;
exports.scrollToIndex = scrollToIndex;
exports.scrollToItem = scrollToItem;
exports.scrollToOffset = scrollToOffset;
exports.renderItem = renderItem;
exports.separatorComponent = separatorComponent;
exports.make = make;
/* Impl Not a pure module */

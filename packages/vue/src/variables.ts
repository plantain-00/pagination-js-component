// @ts-nocheck
/**
 * This file is generated by 'file2variable-cli'
 * It is not mean to be edited by hand
 */
import { createCommentVNode as _createCommentVNode, createElementBlock as _createElementBlock, Fragment as _Fragment, normalizeClass as _normalizeClass, openBlock as _openBlock, renderList as _renderList, toDisplayString as _toDisplayString } from 'vue'
// tslint:disable
/* eslint-disable */

export function indexTemplateHtml(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("ul", { class: "pagination" }, [
    (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.pages, (page) => {
      return (_openBlock(), _createElementBlock("li", {
        key: page.text
      }, [
        (page.disabled)
          ? (_openBlock(), _createElementBlock("span", { key: 0 }, _toDisplayString(page.text), 1 /* TEXT */))
          : (_openBlock(), _createElementBlock("a", {
              key: 1,
              href: "javascript:void(0)",
              class: _normalizeClass(page.className),
              onClick: $event => (_ctx.jumpTo(page.value))
            }, _toDisplayString(page.text), 11 /* TEXT, CLASS, PROPS */, ["onClick"]))
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
/* eslint-enable */
// tslint:enable

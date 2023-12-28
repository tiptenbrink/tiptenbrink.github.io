// This plugin is an example to let users write HTML with directives.
// It’s informative but rather useless.
// See below for others examples.

import {visit} from 'unist-util-visit'

export function myRemarkPlugin() {
    return function (tree) {
      visit(tree, function (node) {
        console.log(node)
      })
    }
  }
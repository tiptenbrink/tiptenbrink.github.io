// This plugin is an example to let users write HTML with directives.
// It’s informative but rather useless.
// See below for others examples.
/// <reference types="mdast-util-math" />

import {visit, SKIP} from 'unist-util-visit'
import { $typst } from '@myriaddreamin/typst.ts/dist/esm/contrib/snippet.mjs'
import fs from 'fs'

const ass = async (value) => {
  console.log(`node value is ${JSON.stringify(value, null, 2)}`)
  
}

export function myRemarkPlugin() {
  console.log("plugin")
  return function (tree) {
    new Promise(async (resolve, reject) => {
      const nodesToChange = [];
      visit(tree, "math", (node) => {
        nodesToChange.push({
          node,
        });
      });
      for (const { node } of nodesToChange) {
        console.log(`node is ${JSON.stringify(node.meta, null, 2)}`)
        try {
          node.type = 'html';
          node.value = '<strong>new</strong>'
          await ass("X=3")
          await $typst.svg({mainContent: "hello world!"})
          node.children = undefined
          node.data = undefined
        } catch (e) {
          console.log("ERROR", e);
          return reject(e);
        }
      }

      resolve();
    });
    // /**
    //  * @param {import('mdast').Root} tree
    //  *   Tree.
    //  * @returns {undefined}
    //  *   Nothing.
    //  */
    // return function (tree) {
    //   // console.log(`tree is ${JSON`)
    //   visit(tree, function (node) {
        
    //     if (node.type === 'math') {
    //       console.log(node)
    //       node.type = 'html'
    //       //let svg = 
    //       //await ass("X=3")
    //       node.value = '<strong>new</strong>'
    //       node.children = undefined
    //       node.data = undefined

    //       //return SKIP
    //     }


    //     // console.log()
    //     // if (node.type !== 'math') {
    //     //   //console.log(`type is ${node.type}`)
    //     //   return
    //     // }

    //     // console.log(`node is ${JSON.stringify(node.meta, null, 2)}`)

    //     // console.log(`type is ${node.type}`)
    //     // console.log(`node meta is ${JSON.stringify(node.meta, null, 2)}`)
    //     // console.log(`node value is ${JSON.stringify(node.value, null, 2)}`)
    //     // //let svg = await $typst.svg({mainContent: `$ ${node.value} $`})
    //     // node.type = 'html'
    //     // //node.value = svg
    //     // //console.log(svg)

    //     // console.log(`type is ${node.type}`)


    //     // node.type = 'html'
    //     // node.value = '<strong>new</strong>'
    //     // node.children = undefined
    //     // node.data = undefined

    //     // return SKIP
    //   })
      
    }
  }
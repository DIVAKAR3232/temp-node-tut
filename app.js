const a =require('lodash')
const items=[2,[3,[4,[7]]]]
const newItems =a.flattenDeep(items)
console.log(newItems)
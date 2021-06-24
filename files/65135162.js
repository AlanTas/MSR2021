const hasMatch = (pred) => ({children = [], ...rest}) =>
  pred (rest) || children .some (hasMatch (pred))

const collectFamily = (pred) => (xs) => 
  xs .flatMap (
    x => pred(x) 
      ? [x, ...(x.children || [])] 
    : hasMatch (pred) (x) 
      ? [x, ...collectFamily (pred) (x.children || [])]
    : []
  )

const collectFamilyByName = (target) => 
  collectFamily((({name}) => name == target))

const log = (fn) => (inputs) => // JSON.stringify avoids StackOverflow console artifacts
  inputs .forEach (o => console .log (JSON .stringify (fn (o), null, 2)))

const inputs = [
  [{name: "Group 1", children: [{name: "Group 2", children: [{name: "Group 3", children: []}]}]}, {name: "Group 5", children: []}],
  [{name: "Group 1", children: [{name: "Group 2", children: [{name: "Group 3", children: []}]}]}, {name: "Group 5", children: [{name: 'Group 2', children: []}]}],
]

log (collectFamilyByName ('Group 2')) (inputs)
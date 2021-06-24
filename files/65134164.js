let deap;

if ('notify' == "Initial") {
  deap = "Activation ";
} else if ('notify' == "Update") {
  deap = "Update ";
} else {
  deap = "De-Activation ";
}

console.log(deap)
const froyoOrder = prompt(
  "enter a list of comma-separated froyo flavors"
).split(",");

function calculateOrder(froyoArray) {
  const order = {};

  for (const flavors of froyoArray) {
    if (flavors in order) {
      order[flavors] += 1;
    } else {
      order[flavors] = 1;
    }
  }

  return order;
}

finalOrder = calculateOrder(froyoOrder);

console.log("Here is your order: ");

for (const key in finalOrder) {
  console.log(`${key}: ${finalOrder[key]}`);
}

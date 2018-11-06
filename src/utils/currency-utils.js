export function getCreditsAsCopper(player) {

  console.log("getCreditsAsCopper ", player);

  const goldAsCopper = player.currency.gold * 100;
  const silverAsCopper = player.currency.silver * 10;

  return goldAsCopper + silverAsCopper + player.currency.copper;
}

export function displayCost(item) {

  if (item.cost.gold === 0) {

    if (item.cost.copper === 0)  {
      return "$" + item.cost.silver + " silver";
    } else {
      return "$" + item.cost.silver + " silver " + item.cost.copper + " copper";
    }

  } else if (item.cost.silver === 0) {
     return "$" + item.cost.copper + " copper";
  } else {

    if (item.cost.silver === 0 && item.cost.copper === 0) {
      return "$" + item.cost.gold + " gold";
    } else if (item.cost.silver === 0) {
      return "$" + item.cost.gold + " gold " + item.cost.copper + " copper";
    } else {
      return "$" + item.cost.gold + " gold " +
                item.cost.silver + " silver " +
                item.cost.copper + " copper";
    }
  }

}

export function getPlayerCurrencyAfterBuy(newTotalCopper) {
  // will it be weird to get back a different distribution of gold, silver, copper?!
  const gold = Math.floor( newTotalCopper / 100);
  const goldRemainder = newTotalCopper % 100;
  const silver = Math.floor( goldRemainder / 10);
  const copper = silver % 10;

  return {gold, silver, copper};

}

(() => {
  const removedRecipesIds = [
    "supplementaries:cannon_boat_bamboo",
    "minecraft:cake",
    "hearthandharvest:cake_from_batter",
    "hearthandharvest:carrot_cake_from_batter",
  ];

  ServerEvents.recipes((event) => {
    for (const recipeId of removedRecipesIds) {
      event.remove({ id: recipeId });
    }
  });
})();

(() => {
  const worldInteractions = [
    {
      left: "item:chimes:bamboo_chimes",
      right: "#item:minecraft:axes",
      output: "item:chimes:carved_bamboo_chimes",
    },
    {
      left: "item:farmersdelight:roast_chicken_block",
      right: "item:minecraft:bowl",
      output: "item:farmersdelight:roast_chicken",
    },
    {
      left: "item:farmersdelight:stuffed_pumpkin_block",
      right: "item:minecraft:bowl",
      output: "item:farmersdelight:stuffed_pumpkin",
    },
    {
      left: "item:farmersdelight:honey_glazed_ham_block",
      right: "item:minecraft:bowl",
      output: "item:farmersdelight:honey_glazed_ham",
    },
    {
      left: "item:farmersdelight:shepherds_pie_block",
      right: "item:minecraft:bowl",
      output: "item:farmersdelight:shepherds_pie",
    },
    {
      left: "item:brewinandchewin:fiery_fondue_pot",
      right: "item:minecraft:bowl",
      output: "item:brewinandchewin:fiery_fondue",
    },
    {
      left: "item:minecraft:cow_spawn_egg",
      right: "item:minecraft:bucket",
      output: "item:minecraft:milk_bucket",
    },
    {
      left: "item:minecraft:goat_spawn_egg",
      right: "item:minecraft:bucket",
      output: "item:minecraft:milk_bucket",
    },
    {
      left: "#block:hearthandharvest:tappable",
      right: "item:hearthandharvest:tree_tapper",
      output: "item:hearthandharvest:sap_bucket",
    },
    {
      left: "#block:minecraft:logs_that_burn",
      right: "item:minecraft:flint_and_steel",
      output: "item:supplementaries:ash",
    },
  ];

  function buildWorldInteraction(recipeAddition) {
    return {
      type: "emi:world_interaction",
      left: recipeAddition.left,
      right: recipeAddition.right,
      output: recipeAddition.output,
    };
  }

  function shortenIngredient(ingredient) {
    const [fullId] = ingredient.split("{");
    const [, namespace, itemName] = fullId.split(":");
    return `${namespace}_${itemName}`;
  }

  ClientEvents.generateAssets("after_mods", (event) => {
    for (const worldInteraction of worldInteractions) {
      let left = shortenIngredient(worldInteraction.left);
      let right = shortenIngredient(worldInteraction.right);
      let output = shortenIngredient(worldInteraction.output);

      event.json(
        `emi:recipe/additions/emi_world_interaction_${output}_from_${left}_and_${right}`,
        buildWorldInteraction(worldInteraction)
      );
    }
  });
})();

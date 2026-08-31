(() => {
  const informations = [
    {
      stacks: [
        "item:farmersdelight:red_mushroom_colony",
        "item:farmersdelight:brown_mushroom_colony",
      ],
      translationKey: "emi.info.mushroom_colony",
    },
    {
      stacks: ["item:farmersdelight:tomato"],
      translationKey: "emi.info.tomatoes",
    },
    {
      stacks: ["item:measurements:tape_measure"],
      translationKey: "emi.info.abacus",
    },
    {
      stacks: ["item:hearthandharvest:corn"],
      translationKey: "emi.info.corn",
    },
    {
      stacks: [
        "item:hearthandharvest:syrup_bottle",
        // "item:hearthandharvest:sap_bucket", // TODO Remove when base tooltips will have been removed
      ],
      translationKey: "hearthandharvest.jei.info.sap_bucket",
    },
  ];

  ClientEvents.generateAssets("after_mods", (event) => {
    for (const information of informations) {
      let informationRecipe = {
        type: "emi:info",
        stacks: information.stacks,
        text: information.translationKey,
      };
      let recipeId = information.translationKey.replace(/\./g, "_");
      event.json(`emi:recipe/additions/${recipeId}`, informationRecipe);
    }
  });
})();

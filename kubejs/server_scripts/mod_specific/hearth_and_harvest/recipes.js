(() => {
  const REMOVED_FERMENTING_RECIPE_IDS = [
    "moonshine",
    "sweet_berry_wine",
    "mead",
    "hard_cider",
    "root_beer",
  ];

  function removeBnCFermentingRecipeIntegration(event, recipeId) {
    event.remove(
      `hearthandharvest:integration/brewinandchewin/fermenting/${recipeId}`
    );
  }

  ServerEvents.recipes((event) => {
    for (const recipeId of REMOVED_FERMENTING_RECIPE_IDS) {
      removeBnCFermentingRecipeIntegration(event, recipeId);
    }
  });
})();

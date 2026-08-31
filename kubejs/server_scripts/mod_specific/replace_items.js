// priority: 1
// Takes place before the replaced the item is completely removed and other scripts that may affect recipes

(() => {
  const replacedItems = [
    {
      old_item: "farmersdelight:rope",
      new_item: "supplementaries:rope",
    },
  ];

  ServerEvents.recipes((event) => {
    for (const item of replacedItems) {
      event.replaceInput(
        { input: item.old_item },
        item.old_item,
        item.new_item
      );
      event.replaceOutput(
        { output: item.old_item },
        item.old_item,
        item.new_item
      );
    }
  });
  LootJS.lootTables((event) => {
    for (const item of replacedItems) {
      event.modifyLootTables(/.*/).replaceItem(item.old_item, item.new_item);
    }
  });
})();

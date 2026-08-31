/** @typedef {import("com.almostreliable.lootjs.loot.LootTableEvent").$LootTableEvent$$Type} LootTableEvent */

(() => {
  const blocksToSelfDrop = [
    "minecraft:glass",
    "minecraft:glass_pane",
    "quark:dirty_glass",
    "quark:dirty_glass_pane",
    "minecraft:chiseled_bookshelf",
  ];

  // Adding colored blocs to avoid repetition
  for (const color of Color.DYE.values()) {
    blocksToSelfDrop.push(`minecraft:${color}_stained_glass`);
    blocksToSelfDrop.push(`minecraft:${color}_stained_glass_pane`);
  }

  /**
   * @param {LootTableEvent} event
   * @param {string} blockId
   */
  function selfDrop(event, blockId) {
    const [namespace, path] = blockId.split(":");
    event
      .getLootTable(`${namespace}:blocks/${path}`)
      .clear()
      .createPool((pool) => {
        pool.addEntry(LootEntry.of(blockId).survivesExplosion());
      });
  }

  /**
   * @param {LootTableEvent} event
   * @param {string} blockId
   * @param {string} defaultDropId
   */
  function silkTouchDrop(event, blockId, defaultDropId) {
    const [namespace, path] = blockId.split(":");
    event
      .getLootTable(`${namespace}:blocks/${path}`)
      .clear()
      .createPool((pool) => {
        pool.addEntry(
          LootEntry.alternative(
            LootEntry.of(blockId).matchTool({
              predicates: {
                "minecraft:enchantments": [
                  {
                    enchantments: "minecraft:silk_touch",
                    levels: {
                      min: 1,
                    },
                  },
                ],
              },
            }),
            LootEntry.of(defaultDropId)
          )
        );
      });
  }

  LootJS.lootTables((event) => {
    for (const blockId of blocksToSelfDrop) {
      selfDrop(event, blockId);
    }

    for (const { id, defaultDropId } of silkTouchBlocks) {
      silkTouchDrop(event, id, defaultDropId);
    }
  });
})();

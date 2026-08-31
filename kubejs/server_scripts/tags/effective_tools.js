(() => {
  const effectiveToolsBlocks = {
    block: {
      "mineable/pickaxe": [
        "chimes:glass_bells",
        "minecraft:beacon",
        "minecraft:glowstone",
        "minecraft:lever",
        "minecraft:redstone_lamp",
        "minecraft:sea_lantern",
        "#c:glass_blocks",
        "#c:glass_panes",
      ],
      "mineable/axe": [
        "#c:skulls",
        "#minecraft:beds",
        "#supplementaries:flags",
        // TODO: Glass ?
      ],
      "mineable/hoe": [
        "minecraft:cactus",
        "minecraft:ochre_froglight",
        "minecraft:pearlescent_froglight",
        "minecraft:verdant_froglight",
      ],
    },
  };

  const removedEffectiveToolsBlocks = {
    block: {
      "farmersdelight:mineable/knife": ["#supplementaries:flags"],
    },
  };

  global.Tags.registerAddedTagsToEntries(effectiveToolsBlocks);
  global.Tags.registerRemovedTagsFromEntries(removedEffectiveToolsBlocks);
})();

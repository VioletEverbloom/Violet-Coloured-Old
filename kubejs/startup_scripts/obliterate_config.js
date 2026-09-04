// priority: 1

(() => {
  /** @typedef {Object.<string, Array<string|RegExp>>} ObliteratedPatterns */
  const obliteratedPatterns = {
    horseman: ["copper_horn"],
    quark: [
      // Automation
      "chute",
      "ender_watcher",
      // Building
      "stone_lamp",
      "stone_brick_lamp",
      "bonded_leather",
      "bonded_rabbit_hide",
      "gold_bars",
      "bamboo_mat",
      "bamboo_mat_carpet",
      "rope",
      "sturdy_stone",
      /blackstone_bricks.*/,
      // Building - Storage Blocks
      // Replaced by Crate Delight
      "apple_crate",
      "golden_apple_crate",
      "potato_crate",
      "carrot_crate",
      "golden_carrot_crate",
      "beetroot_crate",
      "cocoa_beans_sack",
      // Tools
      "abacus",
      // Tweaks
      /.*shard/, // Glass shards
      // Mobs
      "crab_spawn_egg",
      "crab_bucket",
      "crab_leg",
      "cooked_crab_leg",
      "crab_shell",
      "foxhound_spawn_egg",
      "stoneling_spawn_egg",
      "diamond_heart",
      // Oddities
      "backpack",
      "ravager_hide",
      "bonded_ravager_hide",
      "crate",
      "pipe",
      "encased_pipe",
    ],
    supplementaries: [
      "bamboo_spikes_tipped",
      "barnacles",
      "cage",
      "faucet",
      "sugar_cube",
      /.*gravel_bricks/,
      /lapis_bricks.*/,
      /timber_.*/,
      "wild_flax",
      "flax_seeds",
      "flax",
      "flax_block",
      "planter",
    ],
    suppsquared: ["heavy_key", /metal_.*/],
    village_taverns: ["barrel"]
  };

  /** @type {Array<string>} */
  global.creativeTabs = [
    "minecraft:building_blocks",
    "minecraft:colored_blocks",
    "minecraft:natural_blocks",
    "minecraft:functional_blocks",
    "minecraft:redstone_blocks",
    "minecraft:tools_and_utilities",
    "minecraft:combat",
    "minecraft:food_and_drinks",
    "minecraft:ingredients",
    "minecraft:spawn_eggs",
    "farmersdelight:farmersdelight",
    "cratedelight:cratedelight_tab",
    "brewinandchewin:brewinandchewin",
  ];

  /** @type {Array<string|RegExp>} */
  let obliteratedItems = [];

  for (const [prefix, items] of Object.entries(obliteratedPatterns)) {
    if (!Platform.isLoaded(prefix)) {
      console.log(`[Obliterate Items] Skipping for ${prefix} (mod not loaded)`);
      continue;
    }
    for (const item of items) {
      if (typeof item === "string") {
        obliteratedItems.push(`${prefix}:${item}`);
      } else if (item instanceof RegExp) {
        obliteratedItems.push(new RegExp(`^${prefix}:${item.source}$`));
      }
    }
  }

  global.obliteratedItems = obliteratedItems;

  /**
   * Checks if an itemId is obliterated
   * @param {string} itemId
   * @returns {boolean} True if itemId is obliterated, false otherwise
   */
  global.isObliterated = (itemId) => {
    for (let i = 0; i < obliteratedItems.length; i++) {
      let id = obliteratedItems[i];
      if (typeof id === "string") {
        if (itemId === id) {
          return true;
        }
      } else if (id instanceof RegExp && id.test(itemId)) {
        return true;
      }
    }
    return false;
  };
})();

(() => {
  /**
   * @typedef {Object} RecipeHidingConfig
   * @property {string[]} categories
   * @property {string[]} recipeIds
   * @property {Record<string, string[]>} categorizedIds
   */

  /**
   * @typedef {Object} RecipeFilter
   * @property {string} [id]
   * @property {string} [category]
   */

  const recipeHidingConfig = {
    categories: [
      // "ali:block_loot", // TODO: uncomment when modpack will be made public
      "ali:hero_loot",
      "emixx:villager_trades",
    ],
    recipeIds: [
      "minecraft:/chests/spawn_bonus_chest",
      "minecraft:/chests/village/*",
      "minecraft:/chests/jungle_temple_dispenser",
      // "emi:/anvil/enchanting/.*", // TODO: uncomment when modpack will be made public
      "emi:/crafting/repairing/.*",
      "emi:/anvil/repairing/tool/.*",
      "emi:/grindstone/repairing/.*",
      "emi:/grindstone/disenchanting/.*",
      "supplementaries:ash_burn",
      "supplementaries:/tipped_spikes.*",
      "supplementaries:/inject/test",
      "minecraft:/shearing/bogged",
      "minecraft:/gameplay/cat_morning_gift",
      "minecraft:/gameplay/panda_sneeze",
      "quark:/inject/gameplay/sniffer_digging",
      "quark:/misc/monster_box_spawns",
    ],
    categorizedIds: {
      "emi:grinding": ["supplementaries:unenchanted_golden_apple"],
      "minecraft:brewing": [".*/hearthandharvest/.*"],
      "ali:entity_loot": [
        "quark:/entities/crab",
        "quark:/entities/foxhound",
        "quark:/entities/stoneling",
      ],
      "ali:trial_chambers": [
        "minecraft:/dispensers/.*",
        "minecraft:/chests/trial_chambers/reward(?:_ominous)?_(?:common|rare|unique)",
        "minecraft:/equipment/.*",
      ],
      "supplementaries:galleons": [
        "supplementaries:/loot/galleon/cannon",
        "supplementaries:/loot/galleon/key",
      ],
      "supplementaries:urn_loot": [
        "supplementaries:/loot/urn_loot/(?!urn_loot$).*",
      ],
      "ali:fishing_loot": ["minecraft:/gameplay/fishing/(junk|treasure|fish)"],
      "minecraft:smithing": [".*armor_trim.*"],
      "emi:world_interaction": [".*flower_duping.*"],
      // "emi:info": ["null"], // Uncomment to remove all info except for the ones added by the modpack
    },
  };

  const hiddenPlantLoot = [
    ".*:.*sapling",
    "minecraft:mangrove_propagule",
    "minecraft:.*grass",
    "minecraft:dead_bush",
    "minecraft:fern",
    "minecraft:dandelion",
    "minecraft:torchflower",
    "minecraft:poppy",
    "minecraft:blue_orchid",
    "minecraft:allium",
    "minecraft:azure_bluet",
    "minecraft:red_tulip",
    "minecraft:orange_tulip",
    "minecraft:white_tulip",
    "minecraft:pink_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:cornflower",
    "minecraft:wither_rose",
    "minecraft:lily_of_the_valley",
    "minecraft:brown_mushroom",
    "minecraft:red_mushroom",
    "minecraft:attached_pumpkin_stem",
    "minecraft:attached_melon_stem",
    "minecraft:pumpkin_stem",
    "minecraft:melon_stem",
    "minecraft:lily_pad",
    "minecraft:sunflower",
    "minecraft:lilac",
    "minecraft:rose_bush",
    "minecraft:peony",
    "minecraft:large_fern",
    "minecraft:torchflower_seeds",
    "minecraft:pitcher_plant",
    "minecraft:sea_pickle",
    "minecraft:warped_fungus",
    "minecraft:warped_roots",
    "minecraft:nether_sprouts",
    "minecraft:crimson_fungus",
    "minecraft:crimson_roots",
    "minecraft:azalea",
    "minecraft:flowering_azalea",
    "minecraft:small_dripleaf",
    "minecraft:pink_petals",
    "hearthandharvest:wild_red_grapes",
    "hearthandharvest:wild_green_grapes",
    "hearthandharvest:red_grapes",
    "hearthandharvest:green_grapes",
    "quark:glow_shroom",
    "quark:glow_lichen_growth",
    "quark:water_pink_petals",
    "farmersdelight:budding_tomatoes",
    "farmersdelight:rice",
  ];

  const parsedPlantLoot = [];
  for (const plantLoot of hiddenPlantLoot) {
    let [namespace, id] = plantLoot.split(":");
    parsedPlantLoot.push(`${namespace}:/blocks/${id}`);
  }
  recipeHidingConfig.categorizedIds["ali:plant_loot"] = parsedPlantLoot;

  /**
   * Turns a configuration into the format expected by EMI
   *
   * @param {RecipeHidingConfig} config
   * @returns {RecipeFilter[]}
   */
  function buildRecipeFilters(config) {
    const filters = [];

    for (const category of config.categories) {
      filters.push({
        category: category,
      });
    }

    for (const id of config.recipeIds) {
      filters.push({
        id: `/${id}/`,
      });
    }

    for (const [category, ids] of Object.entries(config.categorizedIds)) {
      for (const id of ids) {
        filters.push({
          category: category,
          id: `/${id}/`,
        });
      }
    }
    return filters;
  }

  const recipeFilters = buildRecipeFilters(recipeHidingConfig);

  ClientEvents.generateAssets("after_mods", (event) => {
    event.json("emi:recipe/filters/filters", {
      filters: recipeFilters,
    });
  });
})();

(() => {
  const { removeAdvancements } = _Advancements;

  const mappedRemovedAdvancements = {
    "brewinandchewin:main": [
      "brew_drink",
      "chef_of_the_ages",
      "cook_fiery_fondue",
      "crafting_problem",
      "ferment_cheese",
      "place_keg",
      "place_temperature_block_near_keg",
      "root",
    ],
    "chalk:adventure": [
      "alone_in_the_darkness",
      "bound_by_bone",
      "home_is_where_the_bed_is",
      "this_way",
      "vandalism",
    ],
    "minecraft:nether": [
      "all_effects",
      "all_potions",
      "brew_potion",
      "create_beacon",
      "charge_respawn_anchor",
      "create_full_beacon",
      "find_bastion",
      "find_fortress",
      "get_wither_skull",
      "loot_bastion",
      "netherite_armor",
      "obtain_ancient_debris",
      "obtain_blaze_rod",
      "obtain_crying_obsidian",
      "summon_wither",
      "use_lodestone",
    ],
    "minecraft:story": [
      "cure_zombie_villager",
      "deflect_arrow",
      "enchant_item",
      "enter_the_end",
      "enter_the_nether",
      "follow_ender_eye",
      "form_obsidian",
      "iron_tools",
      "lava_bucket",
      "mine_diamond",
      "mine_stone",
      "obtain_armor",
      "root",
      "shiny_gear",
      "smelt_iron",
      "upgrade_tools",
    ],
    "quark:content": [
      "apply_color_rune",
      "get_all_corundum",
      "influence",
      "instamine_deepslate",
      "overlevel_enchant",
      "redirect_beacon",
      "retreive_flamerang",
      "throw_pickarang",
      "wear_full_rainbow",
    ],
    "supplementaries:nether": ["goblet"],
    "supplementaries:story": ["unenchanter"],
  };
  const removedAdvancements = [];

  for (const [path, ids] of Object.entries(mappedRemovedAdvancements)) {
    for (const id of ids) {
      removedAdvancements.push(`${path}/${id}`);
    }
  }

  removeAdvancements(removedAdvancements);
})();

(() => {
  const removedTags = {
    item: [
      "brewinandchewin:foods/horror_meat",
      "createaddition:plants",
      "createaddition:plant_foods",
      "quark:stone_tool_materials",
      "quark:crab_tempt_items",
      "quark:glow_shroom_feedables", // Stoneling tempt items
      "origins:meat",
      "origins:ignore_diet",
      "sereneseasons:winter_crops",
      "sereneseasons:spring_crops",
      "sereneseasons:summer_crops",
      "sereneseasons:autumn_crops",
      "supplementaries:flower_box_plantable",
      "tconstruct:seeds",
    ],
    block: [
      "quark:crab_spawnable",
      "quark:foxhound_spawnable",
      "minecraft:enderman_holdable", // Remove enderman griefing
      "sereneseasons:winter_crops",
      "sereneseasons:spring_crops",
      "sereneseasons:summer_crops",
      "sereneseasons:autumn_crops",
      "sereneseasons:unbreakable_infertile_crops",
      "supplementaries:barnacles_blacklist",
      "supplementaries:faucet_connection_blacklist",
      "supplementaries:frame_block_blacklist",
      "supplementaries:ignores_planter_offset",
      "supplementaries:prevents_offset_above",
      "supplementaries:water_holder",
    ],
    entity_type: [
      "horseman:cannot_swim",
      "supplementaries:cage_catchable",
      "supplementaries:cage_baby_catchable",
      "supplementaries:jar_catchable",
      "supplementaries:jar_baby_catchable",
      "supplementaries:tickable_when_captured",
    ],
    "worldgen/structure": ["amendments:add_potion_cauldron"],
  };

  global.Tags.registerRemovedTags(removedTags);
})();

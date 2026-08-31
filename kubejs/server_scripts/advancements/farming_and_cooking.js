// @ts-check

(() => {
  const { registerRoot, registerAdvancements } = _Advancements;
  const Criteria = _AdvancementsCriteria;
  const Conditions = _AdvancementsConditions;
  const { Registry } = global;

  /** @type {Category} */
  const category = {
    namespace: "violetcoloured",
    name: "farming_and_cooking",
  };

  /** @type {Root} */
  const categoryRoot = {
    background: "minecraft:block/bricks",
    icon: "minecraft:hay_block",
    criteria: {
      consumed_item: {
        trigger: "minecraft:consume_item",
      },
    },
  };

  /** @type {Advancement[]} */
  const advancements = [
    {
      id: "place_keg",
      parent: "root",
      icon: "brewinandchewin:keg",
      title: "brewinandchewin.advancement.place_keg",
      description: "brewinandchewin.advancement.place_keg.desc",
      criteria: Criteria.placeBlock("brewinandchewin:keg"),
    },
    {
      id: "brew_drink",
      parent: "place_keg",
      icon: "brewinandchewin:beer",
      title: "brewinandchewin.advancement.brew_drink",
      description: "brewinandchewin.advancement.brew_drink.desc",
      criteria: Criteria.hasItem("#brewinandchewin:fermented_drinks"),
    },
    {
      id: "drink_all_fermented_drinks",
      parent: "brew_drink",
      icon: "brewinandchewin:steel_toe_stout",
      type: "challenge",
      title: "brewinandchewin.advancement.crafting_problem",
      criteria: Criteria.consumeAll(Registry.fermentedDrinks),
    },
    {
      id: "ferment_cheese",
      parent: "place_keg",
      icon: "brewinandchewin:unripe_flaxen_cheese_wheel",
      title: "brewinandchewin.advancement.ferment_cheese",
      description: "brewinandchewin.advancement.ferment_cheese.desc",
      criteria: Criteria.hasItem("#brewinandchewin:cheese_wheels/unripe"),
    },
    {
      id: "place_temperature_source_near_keg",
      parent: "place_keg",
      icon: "brewinandchewin:ice_crate",
      criteria: {
        placed_temperature_source_near_keg: Criteria.blockInRadius({
          baseBlocks: "#brewinandchewin:temperature_sources",
          blocksToCheckFor: "brewinandchewin:keg",
          range: 2,
          trigger: "minecraft:placed_block",
          additionalBaseBlocksConditions: Conditions.optionalBlockState({
            key: "lit",
            value: "true",
          }),
        }),

        placed_keg_near_temperature_source: Criteria.blockInRadius({
          baseBlocks: "brewinandchewin:keg",
          blocksToCheckFor: "#brewinandchewin:temperature_sources",
          range: 2,
          trigger: "minecraft:placed_block",
          additionalBlocksToCheckForConditions: Conditions.optionalBlockState({
            key: "lit",
            value: "true",
          }),
        }),

        updated_temperature_source_near_keg: Criteria.blockInRadius({
          baseBlocks: "#brewinandchewin:temperature_sources",
          blocksToCheckFor: "brewinandchewin:keg",
          range: 2,
          trigger: "minecraft:item_used_on_block",
          additionalBaseBlocksConditions: Conditions.optionalBlockState({
            key: "lit",
            value: "true",
          }),
        }),
      },
      requirements: [
        [
          "placed_temperature_source_near_keg",
          "placed_keg_near_temperature_source",
          "updated_temperature_source_near_keg",
        ],
      ],
    },
  ];

  registerRoot(category, categoryRoot);
  registerAdvancements(category, advancements);
})();

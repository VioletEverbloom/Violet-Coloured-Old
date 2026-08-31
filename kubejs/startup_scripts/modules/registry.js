global.Registry = (function Registry() {
  const fermentedDrinks = [
    "brewinandchewin:beer",
    "brewinandchewin:vodka",
    "brewinandchewin:mead",
    "brewinandchewin:rice_wine",
    "brewinandchewin:egg_grog",
    "brewinandchewin:strongroot_ale",
    "brewinandchewin:saccharine_rum",
    "brewinandchewin:pale_jane",
    "brewinandchewin:salty_folly",
    "brewinandchewin:steel_toe_stout",
    "brewinandchewin:glittering_grenadine",
    "brewinandchewin:bloody_mary",
    "brewinandchewin:red_rum",
    "brewinandchewin:withering_dross",
    "brewinandchewin:dread_nog",
  ];

  const potionEffects = [
    "minecraft:fire_resistance",
    "minecraft:infested",
    "minecraft:invisibility",
    "minecraft:jump_boost",
    "minecraft:night_vision",
    "minecraft:oozing",
    "minecraft:poison",
    "minecraft:regeneration",
    "minecraft:resistance",
    "minecraft:slow_falling",
    "minecraft:slowness",
    "minecraft:speed",
    "minecraft:strength",
    "minecraft:water_breathing",
    "minecraft:weakness",
    "minecraft:weaving",
    "minecraft:wind_charged",
  ];

  const otherEffects = [
    "minecraft:absorption",
    "minecraft:bad_omen",
    "minecraft:blindness",
    "minecraft:conduit_power",
    "minecraft:darkness",
    "minecraft:dolphins_grace",
    "minecraft:glowing",
    "minecraft:haste",
    "minecraft:hero_of_the_village",
    "minecraft:hunger",
    "minecraft:levitation",
    "minecraft:mining_fatigue",
    "minecraft:nausea",
    "minecraft:raid_omen",
    "minecraft:trial_omen",
    "minecraft:wither",
  ];

  return {
    wines: wines,
    fermentedDrinks: fermentedDrinks,
    potionEffects: potionEffects,
    otherEffects: otherEffects,
  };
})();

(() => {
  const addedTagsToEntries = {
    block: {
      "brewinandchewin:temperature_sources": [
        "#brewinandchewin:freeze_sources",
        "#farmersdelight:heat_sources",
      ],
    },
  };
  global.Tags.registerAddedTagsToEntries(addedTagsToEntries);
})();

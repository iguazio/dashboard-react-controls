"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateChipsList = void 0;

var generateChipsList = function generateChipsList(chips, maxLength) {
  if (chips.length > maxLength) {
    var hiddenChipsNumber = "+ ".concat(chips.length - maxLength);
    var hiddenChips = chips.slice(maxLength);
    var visibleChips = chips.slice(0, maxLength);
    return {
      visibleChips: visibleChips,
      hiddenChips: hiddenChips,
      hiddenChipsNumber: hiddenChipsNumber
    };
  }

  return {
    visibleChips: chips
  };
};

exports.generateChipsList = generateChipsList;
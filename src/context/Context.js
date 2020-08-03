import React from 'react';

const Context = React.createContext({
  items: null,
  toggleItems: () => {},
  item: null,
  masterwork: null,
  armortype: null,
  setItem: () => {},
  deactivateItem: () => {},
  dictionary: {},
  setTempItem: () => {},
  setMasterwork: () => {},

  activeClass: 0,
  setActiveClass: () => {},
  activeItem: null,
  activeItemLeft: 0,
  activeItemTop: 0,
  setActiveItem: () => {},

  setTempRune: () => {},
  setActiveRune: () => {},
  deactivateRune: () => {},
  rune0: null,
  rune1: null,
  rune1Ids: null,
  rune2: null,
});

export default Context;
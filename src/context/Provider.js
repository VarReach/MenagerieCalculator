import React, { Component } from 'react';
import Context from './Context';

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: {
        0: 'item',
        1: 'armortype',
        2: 'masterwork'
      },
      items: false,
      item: null,
      masterwork: null,
      armortype: null,

      activeClass: 0,
      activeItem: null,
      activeItemLeft: 0,
      activeItemTop: 0,
      activeItemBottom: 0,

      rune0: null,
      rune1: null,
      rune1Ids: null, 
      rune2: null,
    };
  }

  componentWillMount() {
    const activeClass = window.localStorage.getItem('menagerie-calc-activeclass');
    const items = window.localStorage.getItem('menagerie-calc-items');

    const newState = {};
    (activeClass) && (newState.activeClass = activeClass);
    (items) && (newState.items = items);
    if (activeClass || items) {
      this.setState(newState);
    }
  }

  setActiveClass = (classIndex) => {
    this.setState({ activeClass: classIndex });
    window.localStorage.setItem('menagerie-calc-activeclass', classIndex);
  }

  //sets or resets the details.
  //also calculates the correct position based on boundingRect so that the tooltip is never off the page. See Tooltip.js for more details.
  getTooltipPosition = (rect) => {
    const tooltipPosition = {};
    let left, top;
    const { x, y, width } = rect
    const { innerWidth } = window;
    left = x - 143 + width/2;
    top = y;

    (left < 10) && (left = 20);
    (left > innerWidth - 306) && (left = innerWidth - 306);
    top = top + rect.height + 5;
    
    tooltipPosition.activeItemLeft = left || 0;
    if (top > window.innerHeight/2) {
      tooltipPosition.activeItemBottom = window.innerHeight - top + rect.height + 10;
      tooltipPosition.activeItemTop = 0;
    } else {
      tooltipPosition.activeItemTop = top;
      tooltipPosition.activeItemBottom = 0;
    }

    return tooltipPosition;
  }

  setActiveItem = (e, item) => {
    let newState = { activeItem: item };
    if (e) {
      const tooltipPosition = this.getTooltipPosition(e.target.getBoundingClientRect());
      newState = {...newState, ...tooltipPosition};
    }
    this.setState(newState);
  }

  setTempRune = (e, item) => {
    let newState = { activeItem: item };
    for (let i = 0; i < 3; i++) {
      let current = this.state[`${'rune'+i}`];
      if (!current || !current.active) {
        newState[`${'rune'+i}`] = item;
        break;
      }
    }
    if (e) {
      const tooltipPosition = this.getTooltipPosition(e.target.getBoundingClientRect());
      newState = {...newState, ...tooltipPosition};
    }
    this.setState(newState);
  }
  setActiveRune = (item) => {
    let newState = {};
    for (let i = 0; i < 3; i++) {
      let current = this.state[`${'rune'+i}`];
      if (!current || !current.active) {
        newState[`${'rune'+i}`] = {...item, active: true};
        break;
      }
    }
    this.setState(newState);
  }
  deactivateRune = (i) => {
    let newState = { activeItem: null };
    for (i; i < 3; i++) {
      newState[`${'rune'+i}`] = null;
    }
    this.setState(newState);
  }

  toggleItems = () => {
    const newItems = !this.state.items;
    this.setState({ items: newItems, rune0: null, rune1: null, rune2: null });
    window.localStorage.setItem('menagerie-calc-items', newItems);
  }

  setTempItem = (e, item, slot) => {
    let newState = { activeItem: item };
    let id = this.state.dictionary[slot];

    newState[id] = item;
    if (item) {
      if (slot === 0) {
        newState.rune0 = { id: item.rune0 };
        newState.rune1 = { color: item.rune1 };
      } else if (slot === 1) {
        newState.rune1Ids = { ids: item.rune1Ids };
      } else if (slot === 2) {
        newState.rune2 = { colors: item.rune2 };
      }
    } else {
      if (slot === 0) {
        newState.rune0 = null;
        newState.rune1 = null;
      } else if (slot === 1) {
        newState.rune1Ids = null;
      } else if (slot === 2) {
        newState.rune2 = null;
      }
    }

    if (e) {
      const tooltipPosition = this.getTooltipPosition(e.target.getBoundingClientRect());
      newState = {...newState, ...tooltipPosition};
    }
    this.setState(newState);
  }

  setItem = (item) => {
    this.setState({ 
      rune0: { id: item.rune0, active: true },
      rune1: { color: item.rune1, active: true },
      item: {...item, active: true}, 
      activeItem: null
    });
  }

  deactivateItem = (i) => {
    let newState = { activeItem: null };

    if (i === 0) {
      newState.rune0 = null;
      newState.rune1 = null;
      newState.rune1Ids = null;
      newState.rune2 = null;
    } else if (i === 1) {
      newState.rune1Ids = null;
      newState.rune2 = null;
    } else {
      newState.rune2 = null;
    }

    for (i; i < 3; i++) {
      newState[this.state.dictionary[i]] = null;
    }

    this.setState(newState);
  }

  setMasterwork = (item) => {
    if (item.type === 5) {
      this.setState({ 
        armortype: {...item, active: true}, 
        activeItem: null,
        rune1Ids: { ids: item.rune1Ids, active: true }
      });
    } else {
      this.setState({
        masterwork:  {...item, active: true}, 
        activeItem: null,
        rune2: { colors: item.rune2, active: true}
      });
    }
  }

  render() {
    const value = {
      ...this.state,
      setActiveClass: this.setActiveClass,
      setActiveItem: this.setActiveItem,
      setTempRune: this.setTempRune,
      setActiveRune: this.setActiveRune,
      deactivateRune: this.deactivateRune,
      toggleItems: this.toggleItems,
      setItem: this.setItem,
      deactivateItem: this.deactivateItem,
      setTempItem: this.setTempItem,
      setMasterwork: this.setMasterwork
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
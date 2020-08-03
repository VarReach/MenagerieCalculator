import React, { useContext } from 'react';
import './Item.css';
import Context from '../../context/Context';

export default function Item(props) {
  const { setActiveItem, rune0, rune1, rune2 } = useContext(Context);

  //faded-item, empty-item
  let status = 0; //0 = enabled, 1 = faded, 2 = disabled
  if (rune0) {
    if (rune0.id !== props.item.rune0) {
      rune0.active
        ? status = 2
        : status = 1;
    } else {

      if (rune1) {
        if (rune1.color !== props.item.rune1) {
          rune1.active
            ? status = 2
            : status = 1;
        }
      }

    }
  }

  function renderMasterworks() {
    if (rune2) {
      let url;
      if (props.item.type === 1) {
        if (rune2.color === "purple") {
          url = 'handling.jpg';
        } else if (rune2.color === "red") {
          url = 'reload.jpg';
        } else if (rune2.color === "green") {
          url = 'range.jpg';
        } else if (rune2.color === "blue") {
          url = 'stability.jpg';
        }
      } else if (props.item.type === 2 || props.item.type === 3) { //armor
        if (rune2.color === "purple") {
          url = 'arc.jpg';
        } else if (rune2.color === "red" || rune2.color === "blue") {
          url = 'solar.jpg';
        } else if (rune2.color === "green") {
          url = 'void.jpg';
        }
      }
      return <img className={rune2.active ? "item-masterwork" : "item-masterwork faded-masterwork"} src={require(`../../resources/images/${url}`)} alt={`${url} masterwork`}/>
    }
  }

  function renderArmorType() {
    //mobility == joy, cunning, war, pleasure
    //recovery == beast, gluttony, desire, excess
    //resilience == jubliation, ambition, pride, wealth 
    if (rune1 && props.item.type === 2) {
      let url;
      if ([1,4,8,10].includes(rune1.id)) {
        url = 'mobility.png';
      } else if ([0,5,6,9].includes(rune1.id)) {
        url ='recovery.png';
      } else if ([2,3,7,11].includes(rune1.id)) {
        url = 'resilience.png';
      }
      return <img className={rune1.active ? "item-armor-type" : "item-armor-type faded-armor-type"} src={require(`../../resources/images/${url}`)} alt={`${url}`}/>
    }
  }

  return (
    <li 
      className={status === 1 ? 'item faded-item' : status === 2 ? 'item empty-item' : 'item'}
      onMouseEnter={(e) => {
        if ((!rune0 || rune0.id === props.item.rune0) && (!rune1 || rune1.color === props.item.rune1 )) {
          setActiveItem(e, {...props.item }) 
        }
      }}
      onMouseLeave={(e) => setActiveItem(e, null)}
    >
      {status === 0 
        ? (<a 
            href={props.item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="item-link"
          >
            <img className="item-image" src={require(`../../resources/images/${props.item.image}`)} alt={props.item.name}/>
          </a>)
        : <img className="item-image" src={require(`../../resources/images/${props.item.image}`)} alt={props.item.name}/>
      }
      {renderArmorType()}
      {renderMasterworks()}
    </li>
  )
}
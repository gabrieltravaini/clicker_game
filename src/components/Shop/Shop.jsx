import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Shop.css'
import ShopCard from '../Mechanics/ShopCard';

function Shop({ onButtonClick, upCost1, upCost2 }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shopCards = [
    { name: 'Click++', id: '1', cost: upCost1 },
    { name: 'Click X2', id: '2', cost: upCost2 },
  ];

  return (
    <>
      <div className="bot-size rounded-lg font-Terminal bg-blue-400 flex items-center justify-center text-3xl text-white hover:bg-blue-500 min-w-fit" onClick={handleShow}>
        UPGRADES
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="bg-blue-400 r-borda">
          <Offcanvas.Title className="font-Terminal text-white">Upgrade Shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-black r-borda">
          {shopCards.map(card => (
            <ShopCard
              key={card.id}
              name={card.name}
              id={card.id}
              cost={card.cost}
              onButtonClick={onButtonClick}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Shop;

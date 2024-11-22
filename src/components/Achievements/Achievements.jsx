import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import'./Achievements.css'

function Achievements({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bot-size rounded-lg font-Terminal  bg-blue-400 flex items-center justify-center text-3xl text-white hover:bg-blue-500 min-w-fit" onClick={handleShow}>
        ACHIEVEMENTS
      </div>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton className='bg-blue-400 l-borda'>
          <Offcanvas.Title className='font-Terminal text-white' >Achievements</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-black l-borda'>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Achievements;


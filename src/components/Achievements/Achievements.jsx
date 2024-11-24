import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import'./Achievements.css'
import AchievementCard from '../Mechanics/AchievementCard';
import achieveaImg from '../../assets/achievea.png';
import achievebImg from '../../assets/achieveb.png';
import achievecImg from '../../assets/achievec.png';
function Achievements({achievea,achieveb,achievec, ...props }) {
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
          <AchievementCard name={'Upgrade Master'} desc={'You bought 10 upgrades!'} icon={achieveaImg}status={achievea}/>
          <AchievementCard name={'Top Scorer'} desc={'You scored over 1.000.000!'} icon={achievebImg}status={achieveb}/>
          <AchievementCard name={'Mouse Breaker'} desc={'You clicked over 300 times!'} icon={achievecImg}status={achievec}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Achievements;


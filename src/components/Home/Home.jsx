import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTable } from '../../store/store';

const tabsIndex = [
  { id: 1, text: 'First floor' },
  { id: 2, text: 'Second floor' },
];

export default function Home() {
  const {homeTables, TableCount, isMenuTrue} = useSelector((state) => state.cards);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(tabsIndex[0].id);
  const [tableCount, setTableCount] = useState(0);

  
  useEffect(() => {
    if(TableCount >=12){
      alert("All tables are booked, Please Order the Recipes")
    }
  }, [homeTables, TableCount])
  
  const TablesHandler = (id) => {
    const isTrue = activeTab === 1;
    dispatch(selectTable({ id, isTrue ,tableCount}));
  };


  const getCurrentFloorTables = () => {
    return activeTab === 1 ? homeTables.firstFloor : homeTables.secondFloor;
  };

  const commonMenuStyle = {
    marginLeft: isMenuTrue ? "82px" : "0px"
  }

  return (
    <Container fluid style={commonMenuStyle}>
      <section>
        <div className='border_bottom_solid d-flex justify-content-between align-items-center my-3'>
          <h1 className='select_table_name'>Select Table</h1>
          <div className='d-flex justify-content-center align-items-center'>
            <span className='table_count'>Tables: {TableCount}</span>
            <ul className='d-flex'>
              {tabsIndex.map((tab) => (
                <li key={tab.id}>
                  <button
                    type='button'
                    onClick={() => setActiveTab(tab.id)}
                    className={`mx-2 floors_btns ${
                      tab.id === activeTab ? 'floorActive' : ''
                    }`}
                  >
                    {tab.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Row className='g-5 table_section_bg justify-content-between m-2'>
          {getCurrentFloorTables().map((items) => (
            <Col key={items.id} md={4} sm={6} xs={12}>
              <button
                type='button'
                className={`home_section_table_btn border-0 w-100 ${
                  items.isBooked ? 'booked' : ''
                }`}
                onClick={() => TablesHandler(items.id)}
              >
                <img src={items.src} alt={`table-${items.id}`} />
                <span className='table_name_span'>{items.name}</span>
              </button>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

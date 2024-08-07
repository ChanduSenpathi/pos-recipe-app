import React from 'react'
import './Cards.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/store';


export default function Cards() {
    const allCards = useSelector(state=>state.cards.searchItem);
    const dispatch = useDispatch();

    const getLoppedItems = (items) =>{
        const images = []
        for(let i=1; i<=items.nos ; i++){
            images.push(<img key={i} src={items.chilliSrc} alt={`${items.id}`} className='chilli_image'/>)
        }
        return images;
    }

  return (
    <Container className='border_secondary cards_container p-0 m-0'>
        <Row className='cards_section additional_cards_sec p-3 g-1 justify-content-start align-items-start'>
            {allCards.length > 0 && (allCards.map((items, index) => {
                return (
                    <Col key={index} md={6} sm={12} lg={3} className='cards p-0 overflow-hidden'>
                    <div className='position-relative overflow-hidden'>
                        <img src={items.src} alt={items.title} className='' />
                        <div className='card_wrapper position-absolute top-0 left-0 h-100 w-100'>
                            <div className='card_sub_wrapper position-relative top-0 left-0 h-100'>
                                <Button type='button' onClick={()=> dispatch(addItem(items.id))}>ADD</Button>
                            </div>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h3 className='text-center'>{items.title}</h3>
                        <div className='d-flex justify-content-between align-items-center p-2'>
                            <span className='category_text'>CATEGORY</span>
                            <div className='d-flex align-items-center gap-2'>
                                <span className='cards_footer_sub d-inline-block text-center'>{items.sub}</span>
                                {items.nos >0 && getLoppedItems(items)}
                            </div>
                        </div>
                    </div>
                    </Col>
                )
            }))}
            {allCards.length <= 0 && (
                <div className='d-flex justify-content-center align-items-center items_not_found'>
                    <h1>No Items Found</h1>
                </div>
            )}
        </Row>
        <section className='cards_section footer_buttons d-flex flex-wrap gap_77 justify-content-start align-items-center p-3 position-sticky bottom-0'>
            <Button type='button' className='starter_btn'>STARTER</Button>
            <Button type='button' className='starter_btn btn_disabled'>MAIN COURSE</Button>
            <Button type='button' className='starter_btn btn_disabled'>DRINKS</Button>
            <Button type='button' className='starter_btn btn_disabled'>DESERTS</Button>
        </section>
    </Container>
  )
}

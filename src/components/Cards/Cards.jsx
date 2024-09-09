import React, { useEffect, useState } from 'react'
import './Cards.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, searchItems, setRecipeType } from '../../store/store';
import Loader from '../Loader/Loader';


const userChoiceTab =[
    {
        id: 1,
        title: 'STARTER',
        name: 'starter'
    },
    {
        id: 2,
        title: 'MAIN COURSE',
        name: 'course'
    },
    {
        id: 3,
        title: 'DRINK',
        name: 'drinks'
    },
    {
        id: 4,
        title: 'DESERTS',
        name: 'deserts'
    }
]

export default function Cards() {
    const {cardItems, TableCount, searchItem } = useSelector(state => state.cards)
    const [isTabsActive, setTabActive] = useState({tabId: userChoiceTab[0].id, cardsContent: searchItem, isLoading: true})
    const dispatch = useDispatch();

    useEffect(() => {
        setCardsHandler( isTabsActive.tabId, "starter");
    }, [])
    
    const getLoppedItems = (items) =>{
        const images = []
        for(let i=1; i<=items.nos ; i++){
            images.push(<img key={i} src={items.chilliSrc} alt={`${items.id}`} className='chilli_image'/>)
        }
        return images;
    }
    
    const addItemsHandler = (id) => {
        if(TableCount !== 0){
            dispatch(addItem(id))
        }else {
            alert("Please Select the Tables");
        }
    }
    
    const setCardsHandler = (id, type) => {
        setTabActive({...isTabsActive,tabId: id, isLoading: true});
        setTimeout(() => {
            const filteredData = cardItems.filter(item => item.type === type);
            setTabActive({...isTabsActive, tabId: id,  cardsContent: filteredData, isLoading: false});
            dispatch(setRecipeType({type, item: filteredData}))
        },1000)
    }

  return (
    <Container className='border_secondary cards_container p-0 m-0'>
        {isTabsActive.isLoading ? (
            <Loader />
        ) : (
            <Row className='cards_section additional_cards_sec p-3 g-1 justify-content-start align-items-start'>
            {searchItem.length > 0 && (searchItem.map((items, index) => {
                return (
                    <Col key={index} md={6} sm={12} lg={3} className='cards p-0 overflow-hidden'>
                    <div className='position-relative overflow-hidden'>
                        <img src={items.src} alt={items.title} style={{width: "205px", height: "145px"}} />
                        <div className='card_wrapper position-absolute top-0 left-0 h-100 w-100'>
                            <div className='card_sub_wrapper position-relative top-0 left-0 h-100'>
                                <Button type='button' onClick={()=> addItemsHandler(items.id)}>ADD</Button>
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
            {searchItem.length <= 0 && (
                <div className='d-flex justify-content-center align-items-center items_not_found'>
                    <h1>No Items Found</h1>
                </div>
            )}
        </Row>
        )}
        <ul className='cards_section footer_buttons d-flex flex-wrap gap_77 justify-content-start align-items-center p-3 position-sticky bottom-0'>
            {userChoiceTab.map(item => 
                <li key={item.id}>
                    <Button type='button' onClick={() => setCardsHandler(item.id, item.name)} className={`${isTabsActive.tabId === item.id ? "" : "btn_disabled"} starter_btn`}>{item.title}</Button>
                </li>
            )}
        </ul>
    </Container>
  )
}

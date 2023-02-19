import React, { useState } from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Date from './date';

function PreviousOrdersCard(props: any) {
  const { order } = props;
  let date = Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(order.timestamp);

  return (
    <div>
    <Row>
        <p>{date}</p>
        <Col md={6}>
            <img src={`http://localhost:8080/products/image/${order.products.key.item.imageUrl}`} alt={order.products.key.item.name} style={{maxWidth:'100%'}}/>
        </Col>
        <Col md={4} className='mb-5'>
            <ListGroup>
                <ListGroup.Item><h1>{order.products.key.item.name}</h1></ListGroup.Item>
                <ListGroup.Item><h2>${order.products.key.item.price}</h2></ListGroup.Item>
            </ListGroup>
        </Col>                   
    </Row>
</div>
  )
}

export default PreviousOrdersCard;
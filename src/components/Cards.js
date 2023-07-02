import React from 'react'
import Desc from './Desc'
import Name from './Name'
import Price from './Price'
import product from '../product.js'
import Card from 'react-bootstrap/Card';

const Cards = () => {
    const p_img = product.image
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p_img} />
      <Card.Body>
        <Card.Title>{<Name/>}</Card.Title>
        <h6>Price: {<Price/>}</h6>
        <Card.Text>
          {<Desc/>}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cards
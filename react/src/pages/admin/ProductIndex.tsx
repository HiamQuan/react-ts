import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import ProductType from '../../type/product'

type Props = {
    products: ProductType[];
    onRemove: (id: number) => void
}
const ProductIndex = (props: Props) => {
  return (
    <div>
      <div className='mx-auto my-6'>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Describe</th>
                <th>Price</th>
                <th className='col-3'>Image</th>
                <th className=""></th>
                </tr>
            </thead>
            <tbody>
              {props.products?.map((item,index)=> {
                  return(
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td>{item.price}</td>
                    <td><img src={item.img} className="img-fluid"/></td>
                    <td className='row'>
                        <Link className="col-12 bg-info text-light text-center py-2" to = {`${item._id}/edit`}>Edit</Link>
                        <Button variant='danger' className="bg-danger mt-2" onClick={() => props.onRemove(item.id)}>Remove</Button>
                    </td>                
                  </tr>
              )})}
            </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ProductIndex


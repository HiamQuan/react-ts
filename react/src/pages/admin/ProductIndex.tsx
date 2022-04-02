import React from 'react'
import { Button, PlaceholderButton, SplitButton, Table } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import ProductType from '../../type/product'
import { ToastContainer, toast } from 'react-toastify';

type Props = {
    products: ProductType[];
    onRemove: (id: string) => void
}
const ProductIndex = (props: Props) => {
  return (
    <div>
      <div className='mx-auto my-6'>
        <ToastContainer/>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Describe</th>
                <th>Price</th>
                <th className='col-3'>Image</th>
                <th className=""><Link to="/admin/products/add"><Button variant='dark' className='tw-bg-indigo-600'>Thêm</Button></Link></th>
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
                        <Button variant='danger' className="bg-danger mt-2" onClick={() => props.onRemove(item._id)}>Remove</Button>
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


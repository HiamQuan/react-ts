import React from 'react'
import { Button, PlaceholderButton, SplitButton, Table } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import UserType from '../../type/user';

type Props = {
    products: UserType[];
    onRemove: (id: string) => void
}
const UserIndex = (props: Props) => {
  return (
    <div>
      <div className='mx-auto my-6'>
        <ToastContainer/>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Name</th>
                <th className='col-3'>Image</th>
                <th className=""><Link to="/admin/users/add"><Button variant='dark' className='tw-bg-indigo-600'>Thêm</Button></Link></th>
                </tr>
            </thead>
            <tbody>
              {props.products?.map((item,index)=> {
                  return(
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.role}</td>
                    <td>{item.name}</td>
                    <td><img src={item.img} className="img-fluid"/></td>
                    <td className='row'>
                        <Link className="col-12 bg-info text-light text-center py-2" to = {`/admin/users/${item._id}/edit`}>Edit</Link>
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

export default UserIndex


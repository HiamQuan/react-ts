import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStorage';

type Props = {
    onSignOut: () => JSX.Element;
}

const Header = ({onSignOut}:Props) => {
    const user = isAuthenticate();
    console.log(user);
  return (
    <div>
        <Navbar className='tw-bg-blue-800' variant="dark">
            <Container fluid className="my-1">
                    <Navbar.Brand href='/' >HiamCoder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="tw-flex">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/"><h3 className='tw-text-gray-200 tw-text-lg px-2'>Trang chủ</h3></Nav.Link>
                                <Nav.Link href="/products"><h3 className='tw-text-gray-200 tw-text-lg px-2'>Khóa học</h3></Nav.Link>
                                <Nav.Link href="/blogs"><h3 className='tw-text-gray-200 tw-text-lg px-2'>Bài viết</h3></Nav.Link>
                                <Nav.Link href="/admin"><h3 className='tw-text-gray-200 tw-text-lg px-2'>Admin</h3></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    {user ? 
                    <div className='tw-grid tw-grid-cols-2 tw-gap-8'>
                        <p className="text-white tw-flex tw-items-center">{user.user.email}</p>
                        <button onClick={onSignOut} className='tw-bg-indigo-600 tw-text-white tw-rounded-full py-2 px-2'><i className="fa-solid fa-right-from-bracket"></i> ĐĂNG XUẤT</button>
                    </div>
                    :
                    <div className='tw-grid tw-grid-cols-2 tw-gap-3'>
                        <Link to="signin"><button className='tw-bg-indigo-600 tw-text-white tw-rounded-full px-4 py-2'>SIGN IN</button></Link>
                        <Link to="signup"><button className='tw-bg-gray-600 tw-text-white tw-rounded-full px-4 py-2'>SIGN UP</button></Link>
                    </div>}
            </Container>
        </Navbar>
    </div>
  )
}

export default Header

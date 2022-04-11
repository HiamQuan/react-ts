import React from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import ProductType from '../../type/product'


type Props = {
    products: ProductType[];
}

const Sidebar = (props:Props) => { 
    const navigate = useNavigate();
    const onSignOut = () =>{
        localStorage.removeItem("user");     
         navigate("/");
      }
  return (
        <aside className="tw-w-full tw-h-screen" aria-label="Sidebar">
            <div className="tw-overflow-y-auto tw-pt-11 tw-px-3 tw-bg-gray-50 tw-min-h-full tw-rounded dark:tw-bg-gradient-to-br tw-from-blue-900 tw-to-cyan-600  tw-rounded-br-3xl ">
                <ul className="tw-space-y-2 tw-min-h-full">
                <li>
                    <Link to="/admin" className="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                    <svg className="tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                    <span className="tw-ml-3">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="inbox" className="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                    <svg className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" /><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /></svg>

                    <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">Inbox</span>
                    <span className="tw-inline-flex tw-justify-center tw-items-center tw-px-2 tw-ml-3 tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-gray-200 tw-rounded-full dark:tw-bg-gray-700 dark:tw-text-gray-300">3</span>
                    </Link>
                </li>
                <li>
                    <Link to="products" className="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                    <svg className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" /></svg>
                    <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">Khóa học</span>
                    <span className="tw-inline-flex tw-justify-center tw-items-center tw-p-3 tw-ml-3 tw-w-3 tw-h-3 tw-text-sm tw-font-medium tw-text-blue-600 tw-bg-blue-200 tw-rounded-full dark:tw-bg-blue-900 dark:tw-text-blue-200">{props.products.length}</span>
                    </Link>
                </li>
                <li>
                    <Link to="users" className="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                    <svg className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">Users</span>
                    </Link>
                </li>
                <li>
                    <Link to="posts" className="tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                    <svg className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">Bài viết</span>
                    </Link>
                </li>
                <li>
                    <button onClick={onSignOut} className=" tw-cursor-pointer tw-flex tw-items-center tw-p-2 tw-text-base tw-font-normal tw-text-gray-900 tw-rounded-lg dark:tw-text-white hover:tw-bg-gray-100 dark:hover:tw-bg-gray-700">
                    <svg className="tw-flex-shrink-0 tw-w-6 tw-h-6 tw-text-gray-500 tw-transition tw-duration-75 dark:tw-text-gray-400 group-hover:tw-text-gray-900 dark:group-hover:tw-text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
                    <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">Sign Out</span>
                    </button>
                </li>
                </ul>
            </div>
        </aside>

  )
}


export default Sidebar

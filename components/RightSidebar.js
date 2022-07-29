import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import Contacts from './Contacts'


const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
      <div className='flex items-center text-gray-500'>
        <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <RiVideoAddFill className='text-gray-600' />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <BiSearch className='text-gray-600' />
          </div>
          <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
            <CgMoreAlt className='text-gray-600' />
          </div>
        </div>
      </div>
      <Contacts 
      src="https://images.unsplash.com/photo-1623125654149-062e461e1c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
      name="Virgis Chsanavicius"
      status="online"
      />
      <Contacts 
      src="https://images.unsplash.com/photo-1636320004437-1f34a9babea4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBkb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
      name="Shabbir Dowoodi"
      status="offline"
      />
      <Contacts 
      src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
      name="Nikhil Gupta"
      status="online"
      />
    </div>
  )
}

export default RightSidebar
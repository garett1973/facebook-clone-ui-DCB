import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addPost } from '../public/src/features/postSlice';

const CreatePost = () => {
    const FACEBOOK_CLONE_ENDPOINT = 'http://localhost:8080/api/v1/post';
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                setImageToPost(e.target.result);
            }
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) {
            return;
        }

        const formData = new FormData();

        formData.append('file', imageToPost);
        formData.append('post', inputRef.current.value);
        formData.append('name', session?.user.name);
        formData.append('email', session?.user.email);
        formData.append('profilePic', session?.user.image);

        axios.post(FACEBOOK_CLONE_ENDPOINT, formData, {
            headers: { Accept: 'application/json' },
        
        })
        .then(response => {
            inputRef.current.value = '';
            dispatch(addPost(response.data));
            removeImage();
        })
        .catch(error => {
            console.log(error);
        }
        );
    };

  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
        <div className="flex p-4 space-x-4 items-center">
            <Image
            src={session?.user.image}
            height={40}
            width={40}
            className='rounded-full cursor-pointer'
            alt="User picture"
            />
            <form className='flex flex-1'>
                <input 
                type='text' 
                className='flex-grow p-2 rounded-lg font-medium bg-gray-100 px-4' 
                placeholder={`What's on your mind, ${ session?.user.name}?`}
                ref={inputRef}
                />
                <button hidden onClick={handleSubmit}></button>
            </form>
        </div>
        {imageToPost && (
            <div
            onClick={removeImage} 
            className='flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition-150 cursor-pointer'>
                <img
                src={imageToPost}
                className='h-10 object-contain'
                alt="Image to post"
                />
                <RiDeleteBin6Line className='h-8 hover:text-red-500' />
            </div>
            )}
        <div className="flex justify-evenly py-2">
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                <HiOutlineVideoCamera size={20} className='text-red-500'/>
                <p className='text-sm font-semibold text-gray-600'>Live Video</p>
            </div>
            <div 
            className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'
            onClick={handleClick}
            >
                <IoMdPhotos size={20} className='text-green-500'/>
                <p className='text-sm font-semibold text-gray-600'>Photo/ Video</p>
                <input 
                type='file' 
                ref={hiddenFileInput} 
                hidden 
                accept='image/*'
                onChange={addImageToPost}
                />
            </div>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                <BsEmojiSmile size={20} className='text-yellow-500'/>
                <p className='text-sm font-semibold text-gray-600'>Feeling/ Activity</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
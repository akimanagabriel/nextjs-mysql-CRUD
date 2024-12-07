"use client"

import React, { useState } from 'react';
import { CircleUser, Eye, EyeOff, MoveRight, User, User2, Users } from "lucide-react"
import { insertUsers } from './actions';
import Link from 'next/link';


function page() {

    const [isVisible, setVisible] = useState(false)

    return (
        <div className='grid place-items-center min-h-screen'>
            <div className='max-w-md'>
                <h1 className='text-3xl p-10 flex justify-center text-slate-600'> <CircleUser size={100} /></h1>
                <div className="bg-slate-800 rounded p-10 shadow">
                    <p>Create a new user</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quam.
                    </small>

                    <form action={insertUsers} className='mt-5'>
                        <input name='username' type="email" />
                        <div className='relative'>
                            <input name='password' type={isVisible ? "text" : "password"} className='mt-5 pr-20' />
                            <div className='absolute top-7 right-2 text-slate-400'>
                                {!isVisible && <Eye onClick={() => setVisible(true)} />}
                                {isVisible && <EyeOff onClick={() => setVisible(false)} />}
                            </div>
                        </div>

                        <button type='submit'>
                            Continue
                            <MoveRight size={30} />
                        </button>

                        <div className='mt-5'>
                            <Link className='flex gap-3 justify-end text-gray-300' href="/users/display">
                                <Users /> all users
                            </Link>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default page;

"use client"

import React, { ChangeEvent, useEffect, useState } from 'react';
import { CircleUser, Eye, EyeOff, Save } from "lucide-react"
import { useParams } from 'next/navigation';
import { getUserById, updateUserById, UserType } from '../../actions';


function Page() {
    const [user, setUser] = useState<UserType | null>(null)
    const [isVisible, setVisible] = useState(false)
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        getUser();
    }, [id])

    async function getUser() {
        const userdata: UserType = await getUserById(id)
        setUser(userdata)
    }

    return (
        <div className='grid place-items-center min-h-screen'>
            <div className='max-w-md'>
                <h1 className='text-3xl p-10 flex justify-center text-slate-600'> <CircleUser size={100} /></h1>
                <div className="bg-slate-800 rounded p-10 shadow">
                    <p> Edit user details</p>

                    <form action={updateUserById} className='mt-5'>
                        <input type="hidden" name="id" value={user?.id} />
                        <input
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, username: e.target.value } as UserType)}
                            value={user?.username || ""}
                            name='username'
                            type="email"
                        />
                        <div className='relative'>
                            <input
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setUser({ ...user, password: event.target.value } as UserType)}
                                value={user?.password || ""}
                                name='password'
                                type={isVisible ? "text" : "password"}
                                className='mt-5 pr-20'
                            />
                            <div className='absolute top-7 right-2 text-slate-400'>
                                {!isVisible && <Eye onClick={() => setVisible(true)} />}
                                {isVisible && <EyeOff onClick={() => setVisible(false)} />}
                            </div>
                        </div>

                        <button type='submit' className='flex items-center gap-2'>
                            Save changes
                            <Save />
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Page;

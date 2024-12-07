import { UserPlus } from 'lucide-react';
import { getAllUsers } from '../actions';
import Link from 'next/link';
import DeleteUserComp from './deleteUser';
import UpdateUserComp from './updateUser';

export default async function UserListPage() {
    const users = await getAllUsers();

    return (
        <div className="grid place-content-center min-h-screen">
            <div className='flex justify-between'>
                <h1 className='text-3xl uppercase mb-5'>List of Users</h1>
                <Link href="/users"><UserPlus /></Link>
            </div>
            <table className='border'>
                <thead className='border'>
                    <tr className='border'>
                        <th className='border px-6 py-2 border-slate-700'>ID</th>
                        <th className='border px-6 py-2 border-slate-700'>USERNAME</th>
                        <th className='border px-6 py-2 border-slate-700'>PASSWORD</th>
                        <th className='border px-6 py-2 border-slate-700'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length == 0 && <p>No user found</p>}
                    {users && users.map((user, index) => (
                        <tr key={user.id}>
                            <td className='border px-6 py-2 border-slate-700'>{index + 1}</td>
                            <td className='border px-6 py-2 border-slate-700'>{user.username}</td>
                            <td className='border px-6 py-2 border-slate-700'>{user.password}</td>
                            <td className='border px-6 py-2 border-slate-700'>
                                <div className='flex gap-4'>
                                    <DeleteUserComp id={user.id} />
                                    <UpdateUserComp userId={user.id} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

"use client"

import React from 'react';
import { deleteUserById } from '../actions';
import { Trash2 } from 'lucide-react';

function DeleteUserComp({ id }: { id: string }) {
    const handleDelete = async () => {
        await deleteUserById(id)
    }
    return <Trash2 color='red' cursor={"pointer"} onClick={handleDelete} />;
}

export default DeleteUserComp;

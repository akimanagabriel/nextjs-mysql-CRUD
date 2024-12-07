"use client"

import { Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Propstype {
    userId: string
}
function UpdateUserComp({ userId }: Propstype) {
    const router = useRouter()
    function handleEditing() {
        router.push("/users/editing/" + userId)
    }

    return <Edit onClick={handleEditing} cursor={"pointer"} color='green' />;
}

export default UpdateUserComp;

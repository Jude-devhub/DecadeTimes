import React from 'react'
interface User{
  id: number;
  name: string
}
export default async function UserPage ({params,}:{params:Promise<{userId: string}>;}) {
const {userId} = await params;
    return (
    
    <div>user: {userId}
    </div>
  )
}


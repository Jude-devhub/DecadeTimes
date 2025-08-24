import React from 'react'
interface User{
  id: number;
  name: string
}
export default async function UserPage ({params,}:{params:Promise<{read: string}>;}) {
const {read} = await params;
    return (
    
    <div> detail of news: {read}
    </div>
  )
}


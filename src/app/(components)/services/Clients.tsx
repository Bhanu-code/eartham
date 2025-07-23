import Image from 'next/image'
import React from 'react'

import clients from "../../assets/services/Clients.png"

const Clients = () => {
    return (
        <>
            <div className="w-full">
                <Image src={clients} height={1500} width={1500} alt='clients' />
            </div>
        </>
    )
}

export default Clients
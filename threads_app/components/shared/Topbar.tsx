import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Topbar() {
    return (
        <nav className='topbar'>
            <Link href='/' className='flex items-center gap-4'>
                <Image src="/asset/logo.svg" width={28} height={28} alt="logo" />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
            </Link>
        </nav>
    )
}

export default Topbar
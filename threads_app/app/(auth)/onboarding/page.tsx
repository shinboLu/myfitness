import React from 'react'
import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser } from "@clerk/nextjs";


async function page() {
    const user = await currentUser();
    const userInfo = {};
    const userData = {
        id: user?.id,
        objectID: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo.name || user?.firstName || '',
        bio: userInfo?.image || userInfo.imageURL,
    }
    return (
        <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-20'>
            <h1 className='head-text'>
                Hello Next.js!
            </h1>
            <p className='mt-3 text-base-regular text-light-2'>
                Complete your profile to get started
            </p>

            <section className='mt-9 bg-dark-2 p-10 '>
                <AccountProfile
                    user={userData} btnTitle="Continue"
                />
            </section>
        </main>
    )
}

export default page
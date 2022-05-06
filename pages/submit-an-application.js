import React from 'react'
import Contacts from '@/components/Contacts/Contacts'

const contacts = ({ data }) => {
    return (
        <div>
            <Contacts data={data} />
        </div>
    )
}

export default contacts

export const getServerSideProps = async () => {
    const res = await fetch(`http://site.bronme.uz/dev/v1/contact`)
    const { data } = await res.json()

    return {
        props: {
            data: data ?? null,
        },
    }
}

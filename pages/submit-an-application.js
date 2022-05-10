import React from 'react'
import Contacts from '@/components/Contacts/Contacts'

const contacts = ({ data }) => {
    console.log(data)
    return <div>{<Contacts data={data} />}</div>
}

export default contacts

export const getServerSideProps = async () => {
    const res = await fetch(`https://site.bronme.uz/dev/v1/contact`)
    const { data } = await res.json()

    return {
        props: {
            data: data ?? null,
        },
    }
}

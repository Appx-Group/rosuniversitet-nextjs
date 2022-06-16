import React from 'react'
import Contacts from '@/components/Contacts/Contacts'

const contacts = ({ data, success }) => {
    return <div>{<Contacts data={data} />}</div>
}

export default contacts

export const getServerSideProps = async () => {
    const res = await fetch(`https://api.rosuniversitet.com/dev/v1/contact`)
    const { data, success } = await res.json()

    return {
        props: {
            data: data ?? null,
            success: success,
        },
    }
}

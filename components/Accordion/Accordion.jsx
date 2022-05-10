import React from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({ data }) => {
    return (
        <div className='accordion'>
            <div className='accordion__row'>
                {data?.map((item) => (
                    <AccordionItem
                        key={item?.id}
                        title={item?.title}
                        title_uz={item?.title_uz}
                        title_ru={item?.title_ru}
                        description={item?.description}
                        description_uz={item?.description_uz}
                        description_ru={item?.description_ru}
                    />
                ))}
            </div>
        </div>
    )
}

export default Accordion

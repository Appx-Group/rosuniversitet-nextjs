import React from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({ data }) => {
    return (
        <div className='accordion'>
            <div className='accordion__row'>
                {data.map(
                    ({
                        id,
                        title,
                        title_uz,
                        title_ru,
                        description,
                        description_uz,
                        description_ru,
                    }) => (
                        <AccordionItem
                            key={id}
                            title={title}
                            title_uz={title_uz}
                            title_ru={title_ru}
                            description={description}
                            description_uz={description_uz}
                            description_ru={description_ru}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Accordion

import React from 'react'

export const SectionTitle = ({
    title,
    subTitle,
    titleBlue,
    theme = 'white',
    position = 'center', // center or left
    textPosition = '', // left or center
    sircleColor = 'red', // red or green
}) => {
    return (
        <div className={`section__content ${position}`}>
            <h3 className={`section__sub-title ${theme}`}>
                <span
                    className={`section__sub-title_sircle ${sircleColor}`}
                ></span>{' '}
                <span>{subTitle}</span>
            </h3>
            <h1 className={`section__title ${theme} ${textPosition}`}>
                {title}
                <span className='section__title_blue'> {titleBlue}</span>
            </h1>
        </div>
    )
}

import React from 'react'

export const SectionTitle = ({
    title,
    subTitle,
    titleBlue,
    theme = 'white',
    position = 'center', // center or left
    textPosition = '', // left or center
    sircleColor = 'green', // red or green
}) => {
    return (
        <div className={`section__content ${position}`}>
            <h3 className={`section__sub-title ${theme}`}>
                <span
                    className={`section__sub-title_sircle ${sircleColor}`}
                ></span>{' '}
                <span>{title}</span>
            </h3>
            <h1 className={`section__title ${theme} ${textPosition}`}>
                {subTitle}
                <span className='section__title_blue'> {titleBlue}</span>
            </h1>
        </div>
    )
}

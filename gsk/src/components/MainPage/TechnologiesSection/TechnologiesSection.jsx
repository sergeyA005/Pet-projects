import classes from './TechnologiesSection.module.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import bug3m from '../../../assets/bug_3m.png'
import dominoDm01 from '../../../assets/domino_dm01.png'
import dominoDm03 from '../../../assets/domino_dm03.png'
import scacco from '../../../assets/scacco.png'
import sikz from '../../../assets/sikz.png'
import sakz from '../../../assets/sakz_mk2.png'
import { useState } from 'react'
import classNames from 'classnames'

export default function TechnologiesSection() {

    const slides = [
        {
            name: 'Сигнализатор SCACCO B10-SC 01',
            image: scacco,
            descirption: {
                type: 'На горючие газы',
                properties: [
                    'Звуковая и световая индикация',
                    'Влагозащищенный корпус IP54',
                    'Регулируемая чувствительность',
                ],
                developer: 'BELT DETECTION (Italy)',
            },
        },
        {
            name: 'Сигнализатор SCACCO B10-SC 01',
            image: scacco,
            descirption: {
                type: 'На горючие газы',
                properties: [
                    'Звуковая и световая индикация',
                    'Влагозащищенный корпус IP54',
                    'Регулируемая чувствительность',
                ],
                developer: 'BELT DETECTION (Italy)',
            },
        },
        {
            name: 'Сигнализатор SCACCO B10-SC 01',
            image: scacco,
            descirption: {
                type: 'На горючие газы',
                properties: [
                    'Звуковая и световая индикация',
                    'Влагозащищенный корпус IP54',
                    'Регулируемая чувствительность',
                ],
                developer: 'BELT DETECTION (Italy)',
            },
        },
        {
            name: 'Сигнализатор SCACCO B10-SC 01',
            image: scacco,
            descirption: {
                type: 'На горючие газы',
                properties: [
                    'Звуковая и световая индикация',
                    'Влагозащищенный корпус IP54',
                    'Регулируемая чувствительность',
                ],
                developer: 'BELT DETECTION (Italy)',
            },
        },
        {
            name: 'Сигнализатор SCACCO B10-SC 01',
            image: scacco,
            descirption: {
                type: 'На горючие газы',
                properties: [
                    'Звуковая и световая индикация',
                    'Влагозащищенный корпус IP54',
                    'Регулируемая чувствительность',
                ],
                developer: 'BELT DETECTION (Italy)',
            },
        },
        {
            name: 'Сигнализатор SCACCO B10-SC 01',
            image: scacco,
            descirption: {
                type: 'На горючие газы',
                properties: [
                    'Звуковая и световая индикация',
                    'Влагозащищенный корпус IP54',
                    'Регулируемая чувствительность',
                ],
                developer: 'BELT DETECTION (Italy)',
            },
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)

    const up = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1)
        } else {
            setCurrentSlide(prev => prev - 1)
        }
    }

    const down = () => {
        if (currentSlide === slides.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(prev => prev + 1)
        }
    }

    return (
        <section className={classes.globalContainer}>
            <div className={classes.leftSide}>
                <SectionHeader>КАКОЕ ОБОРУДОВАНИЕ МЫ ИСПОЛЬЗУЕМ</SectionHeader>
                <p className={classes.subText}>
                    Мы используем только сертифицированные сигнализации от итальянских и российских производителей, проверенные в реальных условиях.
                </p>
            </div>
            <span className={classes.decorationText}>
                НАДЕЖНЫЕ ГАЗОВЫЕ РЕШЕНИЯ
            </span>

            <div className={classes.sliderOverlay}>
                <div className={classes.slider} style={{ transform: `translateY(-${currentSlide * 300}px)` }}>
                    {slides.map((slide, index) => <div onClick={() => setCurrentSlide(index)} key={index} className={classNames(classes.slide, { [classes.active]: index === currentSlide })}>
                        <div className={classes.device}>
                            <div className={classes.deviceFace}>
                                <img src={slide.image} alt="device" />
                                <span className={classNames(classes.title, { [classes.active]: index === currentSlide })}>{slide.name}</span>
                            </div>
                            <div className={classNames(classes.description, { [classes.active]: index === currentSlide })}>

                                <div className={classes.deviceContent}>
                                    <div className={classes.point}>
                                        <span className={classes.contentHeader}>Тип:</span>
                                        <span>{slide.descirption.type}</span>
                                    </div>
                                    <div className={classes.point}>
                                        <span className={classes.contentHeader}>Особенности:</span>
                                        <div>{slide.descirption.properties.map(prop =>
                                            <>
                                                <span>{prop}</span> <br />
                                            </>
                                        )}</div>
                                    </div>
                                    <div className={classes.point}>
                                        <span className={classes.contentHeader}>Производитель:</span>
                                        <span>{slide.descirption.developer}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>)}
                </div>
                <div className={classes.arrows}>
                    <svg onClick={up} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes.up} width='30' height='60'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <svg onClick={down} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes.down} width='30' height='60'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </div>

        </section>
    )
}
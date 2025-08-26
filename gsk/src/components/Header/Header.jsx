import classes from './Header.module.scss'
import { useState, useEffect } from 'react'

export default function Header() {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 0)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={classes.header} style={{backgroundColor: isScrolled ? 'black' : null, color: isScrolled ? 'white' : '#0C151C', paddingBottom: isScrolled ? '20px' : '0'}}>
            <div className={classes.content}>
                <div className={classes.leftSide}>
                    <h1>ГСК</h1>
                    <nav className={classes.nav}>
                        <ul>
                            <li>Услуги</li>
                            <li>О компании</li>
                            <li>Контакты</li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.rightSide}>
                    <a href="tel:+77777777777" className={classes.tel} style={{ color: isScrolled ? 'white' : '#0C151C' }}>+7 (777) 777-77-77</a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span>Rus</span>
                        <svg style={{ cursor: 'pointer' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width='20' height='20'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </div>
                </div>
            </div>
        </header>
    )
}
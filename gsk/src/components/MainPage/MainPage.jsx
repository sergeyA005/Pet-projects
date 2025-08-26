import classes from './MainPage.module.scss'
import AboutSection from './AboutSection/AboutSection'
import MainServicesSection from './MainServicesSection/MainServicesSection'
import TechnologiesSection from './TechnologiesSection/TechnologiesSection'
import HowWeWork from './HowWeWork/HowWeWork'

export default function MainPage() {
    return (
        <main className={classes.globalContainer}>
            <AboutSection></AboutSection>
            <MainServicesSection></MainServicesSection>
            <TechnologiesSection></TechnologiesSection>
            <HowWeWork></HowWeWork>
        </main>
    )
}
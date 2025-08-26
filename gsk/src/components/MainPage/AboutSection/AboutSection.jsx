import classes from './AboutSection.module.scss'
import Button from '../../Button/Button'

export default function AboutSection() {
    return (
        <section className={classes.globalContainer}>

            <div className={classes.sectionHeader}>
                <h2>
                    СИСТЕМЫ ГАЗОВОЙ БЕЗОПАСНОСТИ
                </h2>
                <div className={classes.smallCircle}></div>
                <div className={classes.middleCircle}></div>
                <div className={classes.bigCircle}></div>
            </div>

            <div className={classes.sectionContent}>
                <p className={classes.mainContent}>
                    Мы обеспечиваем надежность и безопасность ваших объектов, используя современные технологии и соблюдая все нормативные требования.
                </p>
                <p className={classes.subText}>
                    Профессиональное проектирование, монтаж и обслуживание газового оборудования с 2013 года.
                </p>
                <Button padding={48}>Оставьте заявку</Button>
            </div>

        </section>
    )
}
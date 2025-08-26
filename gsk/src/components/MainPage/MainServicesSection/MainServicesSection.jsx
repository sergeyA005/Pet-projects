import classes from './MainServicesSection.module.scss'
import image from '../../../assets/main_services.png'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function MainServicesSection() {
    return (
        <section className={classes.globalContainer}>

            <div className={classes.leftSide}>
                <SectionHeader>ОСНОВНЫЕ УСЛУГИ</SectionHeader>
                <img src={image} alt="" />
            </div>

            <div className={classes.rightSide}>
                <div className={classes.serviceBlock}>
                    <h2>МОНТАЖ СИГНАЛИЗАТОРОВ</h2>
                    <p>
                        Профессиональная установка газовых сигнализаторов для оперативного обнаружения утечек метана (CH₄) и угарного газа (CO). Работы выполняются сертифицированными специалистами с соблюдением всех норм СНИП и ГОСТ.
                    </p>
                    <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
                <div className={classes.serviceBlock}>
                    <h2>ПУСКОНАЛАДКА</h2>
                    <p>
                        Комплекс работ по вводу системы в эксплуатацию: от тестирования оборудования до обучения вашего персонала. Гарантируем корректную работу всех компонентов.
                    </p>
                    <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
                <div className={classes.serviceBlock}>
                    <h2>ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ</h2>
                    <p>
                        Регулярные проверки и ремонт систем газового контроля для предотвращения аварийных ситуаций. Доступны как плановые визиты, так и экстренные выезды.
                    </p>
                    <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
                <div className={classes.serviceBlock}>
                    <h2>ПОДГОТОВКА К СЕЗОНУ</h2>
                    <p>
                        Специальная программа для предприятий перед отопительным сезоном. Помогаем пройти проверки газовых служб и избежать штрафов.
                    </p>
                    <svg className={classes.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
                <div className={classes.smallSquareTop}></div>
                <div className={classes.smallSquareBottom}></div>
                <div className={classes.smallSquareCenter}></div>
                <div className={classes.smallSquareLeft}></div>
                <div className={classes.smallSquareRight}></div>
            </div>

        </section>
    )
}
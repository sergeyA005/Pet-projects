import classes from './HowWeWork.module.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import Button from '../../Button/Button'
import Steps from './Steps/Steps'
import phone from '../../../assets/phone.png'
import consulting from '../../../assets/consulting.png'
import agreement from '../../../assets/agreement.png'
import proccess from '../../../assets/proccess.png'

export default function HowWeWork() {
    return (
        <section className={classes.globalContainer}>
            <div className={classes.sectionHeader}>
                <SectionHeader>КАК МЫ РАБОТАЕМ</SectionHeader>
                <div className={classes.requestBlock}>
                    <span>Каждый проект реализуется по четкому пошаговому подходу, обеспечивающему надежность и спокойствие клиентов.</span>
                    <Button padding={69}>Оставить заявку</Button>
                </div>
            </div>
            <div className={classes.steps}>
                <Steps header='Заявка' img={phone} number='01'>
                    Оставьте заявку на сайте или по телефону. Наш менеджер свяжется с вами в течение 15 минут.
                </Steps>
                <Steps header='Консультация' img={consulting} number='02'>
                    Обсудим ваши задачи, подберем оборудование и согласуем сроки.
                </Steps>
                <Steps header='Договор' img={agreement} number='03'>
                    Подготовим договор с фиксированной стоимостью и гарантией. Возможен выезд для подписания.
                </Steps>
                <Steps header='Выполнение работ' img={proccess} number='04'>
                    Проведем монтаж, протестируем систему и обучим персонал. Сдаем объект с актом подписания.
                </Steps>
            </div>
        </section>
    )
}
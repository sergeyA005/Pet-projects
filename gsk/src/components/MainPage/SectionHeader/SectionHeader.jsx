import classes from './SectionHeader.module.scss'

export default function SectionHeader({ children }) {
    return (
        <div className={classes.sectionHeader}>
            <div className={classes.square}></div>
            <h3>{children}</h3>
        </div>
    )
}
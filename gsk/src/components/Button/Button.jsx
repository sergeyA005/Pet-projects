import classes from './Button.module.scss'

export default function Button({ children, padding, onClick }) {
    return (
        <button className={classes.button} onClick={onClick} style={{ padding: `20px ${padding}px` }}>
            {children}
        </button>
    )
}
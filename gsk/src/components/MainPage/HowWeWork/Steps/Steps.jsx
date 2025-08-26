import classes from './Steps.module.scss'

export default function Steps({ img, alt, header, children, number }) {
    return (
        <div className={classes.stepContainer}>
            <div className={classes.square}></div>
            <div className={classes.square}></div>
            <div className={classes.square}></div>
            <div className={classes.square}></div>
            <div className={classes.circle}></div>
            <div className={classes.number}>{number}</div>
            <img src={img} alt={alt} />
            <div className={classes.content}>
                <h3>
                    {header}
                </h3>
                <span className={classes.description}>
                    {children}
                </span>
            </div>
        </div>
    )
}
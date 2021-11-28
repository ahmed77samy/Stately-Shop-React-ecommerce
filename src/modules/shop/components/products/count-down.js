function CountDown ({date}) {
    return (
        <div className="wrapper__date">
            <div className="days">
                <span className="timer font--header">{date.days}</span>
                <span className="description text-capitalize font--size--small">d</span>
            </div>
            <div className="hours">
                <span className="timer font--header">{date.hours}</span>
                <span className="description text-capitalize font--size--small">h</span>
            </div>
            <div className="minutes">
                <span className="timer font--header">{date.minutes}</span>
                <span className="description text-capitalize font--size--small">m</span>
            </div>
            <div className="seconds">
                <span className="timer font--header">{date.seconds}</span>
                <span className="description text-capitalize font--size--small">s</span>
            </div>
        </div>
    )
}

export default CountDown
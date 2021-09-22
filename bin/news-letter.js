function NewsLetter () {
    return (
        <section className="news__letter">
            <h6 className="m-0 text-uppercase">subscrib to newsletter</h6>
            <form>
                <input type="text" placeholder="Email address here" className="input__classic" />
                <button className="btn--reset btn__default btn--primary">subscribe</button>
            </form>
            <p className="m-0 font--size--small">
                *Subscribe to our newsletter to receive early discount offers, updates and new products info.
            </p>
        </section>
    )
}

export default NewsLetter
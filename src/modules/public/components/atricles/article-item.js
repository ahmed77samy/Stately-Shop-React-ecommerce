import { Link } from "react-router-dom"
import Card from "shared/components/layout/card"
import Figure from "shared/components/layout/figure"
import ItemContent from "shared/components/layout/item-content"

function ArticleItem (props) {
    let {photo, title, date, author} = props.item
    return (
        <Card>
            <div className="article__item">
                {/*========== figure ==========*/}
                <Figure className="anchors--effect bg--neutral--100">
                    <Link to="/article-single" className="anchors--reset">
                        <img src={photo} alt="article" className="w-100" />
                    </Link>
                </Figure>
                {/*========== figure ==========*/}
                {/*========== item__content ==========*/}
                <ItemContent>
                    <h4 className="text-capitalize h6 m-0">
                        <Link to="/article-single" className="anchors--reset">
                            {title}
                        </Link>
                    </h4>
                    {/*========== author__info ==========*/}
                    <div className="author__info">
                        <figure className="anchors--effect">
                            <Link to="/shop/banner-sidebar" className="anchors--reset">
                                <img src={author.photo} alt="article"/>
                            </Link>
                        </figure>
                        <h6 className="m-0 text-capitalize">
                            <Link to="/shop/banner-sidebar" className="anchors--reset">
                                {author.name}
                            </Link>
                            <br />
                            <span className="font--size--small text-uppercase">{date}</span>
                        </h6>
                    </div>
                    {/*========== author__info ==========*/}
                </ItemContent>
                {/*========== item__content ==========*/}
            </div>
        </Card>
    )
}

export default ArticleItem
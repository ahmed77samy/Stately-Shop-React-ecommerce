import { CartIcon, CommentIcon, HeartIcon, OrdersIcon } from "shared/components/elements/icons";
import Cart from "./cart";
import Favourite from "./favourite";
import Orders from "./orders";
import Reviews from "./reviews";

export const DashBoardItems = [
    {
        content: "orders",
        eventKey: "orders",
        Component: Orders,
        Icon: OrdersIcon,
        data: null
    },
    {
        content: "cart",
        eventKey: "cart",
        Component: Cart,
        Icon: CartIcon,
        data: null
    },
    {
        content: "reviews",
        eventKey: "reviews",
        Component: Reviews,
        Icon: CommentIcon,
        data: null
    },
    {
        content: "favourites",
        eventKey: "favourites",
        Component: Favourite,
        Icon: HeartIcon,
        data: null
    },
]

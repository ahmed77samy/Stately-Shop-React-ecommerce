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
    },
    {
        content: "cart",
        eventKey: "cart",
        Component: Cart,
        Icon: CartIcon,
    },
    {
        content: "reviews",
        eventKey: "reviews",
        Component: Reviews,
        Icon: CommentIcon,
    },
    {
        content: "favourites",
        eventKey: "favourites",
        Component: Favourite,
        Icon: HeartIcon,
    },
]

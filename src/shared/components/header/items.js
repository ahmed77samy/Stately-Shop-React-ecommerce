const HeaderItems = [
    {
        route: "/demo1",
        content: "home",
    },
    {
        route: "/about-us",
        content: "about us"
    },
    {
        route: "/shop",
        content: "shop",
        items: [
            {
                route: "/shop/banner-sidebar",
                content: "products"
            },
            {
                route: "/shop/collections",
                content: "collections"
            },
            {
                route: "/shop/product-single/1",
                content: "product single"
            },
        ]
    },
    {
        route: "/article",
        content: "blog",
        items: [
            {
                route: "/article/grid",
                content: "blog grid"
            },
            {
                route: "/article/list",
                content: "blog list"
            },
            {
                route: "/article/single",
                content: "blog single"
            }
        ]
    },
    {
        route: "/user",
        content: "user",
        items: [
            {
                route: "/user/account",
                content: "login & register"
            },
            {
                route: "/user",
                content: "profile"
            },
            {
                route: "/user/cart",
                content: "cart"
            },
            {
                route: "/user/favourites",
                content: "wishlist"
            },
            {
                route: "/user/setting",
                content: "setting"
            },
            {
                route: "/user/reviews",
                content: "reviews"
            },
            {
                route: "/user/orders",
                content: "orders"
            },
        ]
    },
    {
        route: "/contact-us",
        content: "contact us"
    },
    {
        route: "/pages/404",
        content: "404"
    },
]

export default HeaderItems
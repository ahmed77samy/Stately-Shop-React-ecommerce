import { collection_items } from "items"

const HeaderItems = [
    {
        route: "/demo1",
        content: "home",
        items: [
            {
                route: "/demo1",
                content: "home 01"
            },
            {
                route: "/home-demo-2",
                content: "home 02"
            },
            {
                route: "/home-demo-3",
                content: "home 03"
            },
            {
                route: "/home-demo-4",
                content: "home 04"
            },
        ]
    },
    {
        route: "/home",
        content: "home",
    },
    {
        route: "/collections-grid",
        content: "collections",
        items: [
            {
                route: "/collections-grid",
                content: "grid"
            },
            {
                route: "/",
                content: "left sidebar"
            },
            {
                route: "/",
                content: "right sidebar"
            },
            {
                route: "/",
                content: "no sidebar"
            },
        ]
    },
    {
        route: "/products",
        content: "products",
        classes: "three--col",
        items: [
            
            {
                route: "/products",
                content: "all"
            },
            ...collection_items
        ]
    },
    {
        route: "/user",
        content: "pages",
        items: [
            {
                route: "/user/account",
                content: "my account"
            },
            {
                route: "/404",
                content: "404"
            },
        ]
    },
]
export default HeaderItems
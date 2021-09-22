import collection1 from "assets/images/collection/collection1.jpg";
import collection2 from "assets/images/collection/collection2.jpg";
import collection3 from "assets/images/collection/collection3.jpg";
import collection4 from "assets/images/collection/collection4.jpg";
import clients1 from "assets/images/clients/1.png"
import clients2 from "assets/images/clients/2.png"
import clients3 from "assets/images/clients/3.png"
import clients4 from "assets/images/clients/4.png"
import video1 from "assets/video/video1.mp4"
import video2 from "assets/video/video2.mp4"
import video3 from "assets/video/video3.mp4"
import article1 from "assets/images/article/1.jpg"
import article2 from "assets/images/article/2.jpg"
import article3 from "assets/images/article/3.jpg"
import article4 from "assets/images/article/4.jpg"
import authorphoto1 from "assets/images/article/author_1.png"
import authorphoto2 from "assets/images/article/author_2.png"
import authorphoto3 from "assets/images/article/author_3.png"
import product1 from "assets/images/product/product1.jpg"
import product2 from "assets/images/product/product2.jpg"
import product3 from "assets/images/product/product3.jpg"
import product4 from "assets/images/product/product4.jpg"
import product5 from "assets/images/product/product5.jpg"
import product6 from "assets/images/product/product6.jpg"
import product7 from "assets/images/product/product7.jpg"
import product8 from "assets/images/product/product8.jpg"
import productbanner1 from "assets/images/product/product-banner-1.png"
import productbanner2 from "assets/images/product/product-banner-2.png"
import productbanner3 from "assets/images/product/product-banner-3.png"



export const wishlist_items = [
    {
        photo: product1,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        slideshow: true,
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product2,
        photobanner: productbanner2,
        name: "title product name title product name title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true,
        bestdeal: true
    },
    {
        photo: product3,
        photobanner: productbanner3,
        name: "title product",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product4,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 77,
        slideshow: true,
        category: [{name: "golden" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        slideshow: true,
        category: [{name: "neutral" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product1,
        photobanner: productbanner3,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "fitness" , path: "/"}]
    },
]

export const product_items = [
    {
        photo: product1,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        slideshow: true,
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product2,
        photobanner: productbanner2,
        name: "title product name title product name title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true,
        bestdeal: true
    },
    {
        photo: product3,
        photobanner: productbanner3,
        name: "title product",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product4,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 77,
        slideshow: true,
        category: [{name: "golden" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        slideshow: true,
        category: [{name: "neutral" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product1,
        photobanner: productbanner3,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product2,
        photobanner: productbanner1,
        name: "title product name title product name title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true,
        bestdeal: true
    },
    {
        photo: product3,
        photobanner: productbanner2,
        name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product4,
        photobanner: productbanner3,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 77,
        category: [{name: "golden" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "neutral" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product1,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        slideshow: true,
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product2,
        photobanner: productbanner2,
        name: "title product name title product name title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true,
        bestdeal: true
    },
    {
        photo: product3,
        photobanner: productbanner3,
        name: "title product",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product4,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 77,
        slideshow: true,
        category: [{name: "golden" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        slideshow: true,
        category: [{name: "neutral" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product1,
        photobanner: productbanner3,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product2,
        photobanner: productbanner1,
        name: "title product name title product name title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true,
        bestdeal: true
    },
    {
        photo: product3,
        photobanner: productbanner2,
        name: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 3,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product4,
        photobanner: productbanner3,
        name: "title product name title product name",
        sale: {
            sale: 8,
            date: new Date(2020, 12, 7)
        },
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 77,
        category: [{name: "golden" , path: "/"}, {name: "fitness" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 2,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "neutral" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "fitness" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "fitness" , path: "/"}]
    },
]

export const collection_items = [
    {
        photo: collection1,
        content: "garden",
        products: "217",
        route: "/collections/garden"
    },
    {
        photo: collection2,
        content: "jewelry",
        products: "125",
        route: "/collections/jewelry"
    },
    {
        photo: collection3,
        content: "clothes",
        products: "307",
        route: "/collections/clothes"
    },
    {
        photo: collection4,
        content: "electronic",
        products: "75",
        route: "/collections/electronic"
    },
    {
        photo: collection1,
        content: "garden",
        products: "217",
        route: "/collections/garden"
    },
    {
        photo: collection2,
        content: "jewelry",
        products: "125",
        route: "/collections/jewelry"
    },
    {
        photo: collection3,
        content: "clothes",
        products: "307",
        route: "/collections/clothes"
    },
    {
        photo: collection4,
        content: "electronic",
        products: "75",
        route: "/collections/electronic"
    },
    {
        photo: collection1,
        content: "garden",
        products: "217",
        route: "/collections/garden"
    },
    {
        photo: collection2,
        content: "jewelry",
        products: "125",
        route: "/collections/jewelry"
    },
    {
        photo: collection3,
        content: "clothes",
        products: "307",
        route: "/collections/clothes"
    },
    {
        photo: collection4,
        content: "electronic",
        products: "75",
        route: "/collections/electronic"
    },
    {
        photo: collection1,
        content: "garden",
        products: "217",
        route: "/collections/garden"
    },
    {
        photo: collection2,
        content: "jewelry",
        products: "125",
        route: "/collections/jewelry"
    },
    {
        photo: collection3,
        content: "clothes",
        products: "307",
        route: "/collections/clothes"
    },
    {
        photo: collection4,
        content: "electronic",
        products: "75",
        route: "/collections/electronic"
    },
]

export const review_items = [
    {
        video: video1,
        product: {
            name: "title product name title product name",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            rating: 4
        }
    },
    {
        video: video2,
        product: {
            name: "title product name title product name",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            rating: 5
        }
    },
    {
        video: video3,
        product: {
            name: "title product name title product name",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            rating: 3
        }
    },
]

export const clients_items = [
    {
        photo: clients1
    },
    {
        photo: clients2
    },
    {
        photo: clients3
    },
    {
        photo: clients4
    },
    {
        photo: clients2
    },
    {
        photo: clients3
    },
    {
        photo: clients4
    },
    {
        photo: clients1
    },
]

export const article_items = [
    {
        photo: article1,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto1,
        }
    },
    {
        photo: article2,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto2,
        }
    },
    {
        photo: article3,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto3,
        }
    },
    {
        photo: article4,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto1,
        }
    },
    {
        photo: article3,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto2,
        }
    },
    {
        photo: article2,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto3,
        }
    },
    {
        photo: article1,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto2,
        }
    },
    {
        photo: article4,
        title: "lorem ipsum is simply dummy text of the printing and typesetting industry.",
        date: "08 may",
        author: {
            name: "author name",
            photo: authorphoto3,
        }
    },
]

export const author_items = [
    {
        name: "john albert",
        job: "monister",
        photo: authorphoto1,
    },
    {
        name: "alexandre",
        job: "monitor",
        photo: authorphoto2,
    },
    {
        name: "albertson",
        job: "writer",
        photo: authorphoto3,
    },
    {
        name: "alexandre",
        job: "monitor",
        photo: authorphoto2,
    },
    {
        name: "albertson",
        job: "writer",
        photo: authorphoto3,
    },
    {
        name: "john albert",
        job: "monister",
        photo: authorphoto1,
    },
]

export const tag_items = [
    {
        path: "/",
        tag: "jewelry"
    },
    {
        path: "/",
        tag: "health"
    },
    {
        path: "/",
        tag: "toys"
    },
    {
        path: "/",
        tag: "design"
    },
    {
        path: "/",
        tag: "sports"
    },
    {
        path: "/",
        tag: "life style"
    },
    {
        path: "/",
        tag: "tools"
    },
    {
        path: "/",
        tag: "toys"
    },
    {
        path: "/",
        tag: "design"
    },
    {
        path: "/",
        tag: "jewelry"
    },
    {
        path: "/",
        tag: "health"
    },
    {
        path: "/",
        tag: "sports"
    },
    {
        path: "/",
        tag: "life style"
    },
    {
        path: "/",
        tag: "tools"
    },
]
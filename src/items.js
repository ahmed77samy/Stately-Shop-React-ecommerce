import video1 from "assets/video/video1.mp4"
import postervideo1 from "assets/video/poster-video-1.jpg"
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
import userphoto1 from "assets/images/users/1.png"
import userphoto2 from "assets/images/users/2.png"

export const product_items = [
    {
        photo: product1,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 50,
            date: new Date(2020, 12, 7)
        },
        rating: 4,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        slideshow: true,
        salary: 100,
        category: [{name: "jewelry" , path: "/"}, {name: "children" , path: "/"}]
    },
    {
        photo: product2,
        photobanner: productbanner2,
        name: "title product name title product name title product name title product name",
        sale: {
            sale: 77,
            date: new Date(2020, 12, 7)
        },
        rating: 2,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "children" , path: "/"}],
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "children" , path: "/"}]
    },
    {
        photo: product4,
        photobanner: productbanner1,
        name: "title product name title product name",
        sale: {
            sale: 77,
            date: new Date(2020, 12, 7)
        },
        rating: 1,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 77,
        slideshow: true,
        category: [{name: "golden" , path: "/"}, {name: "children" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 2,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        slideshow: true,
        category: [{name: "neutral" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 1,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "children" , path: "/"}],
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 77,
        category: [{name: "golden" , path: "/"}, {name: "children" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 2,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "neutral" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 1,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        slideshow: true,
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "children" , path: "/"}],
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 77,
        slideshow: true,
        category: [{name: "golden" , path: "/"}, {name: "children" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 2,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        slideshow: true,
        category: [{name: "neutral" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 1,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 50,
        category: [{name: "jewelry" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "garden" , path: "/"}, {name: "children" , path: "/"}],
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 111,
        category: [{name: "toop" , path: "/"}, {name: "children" , path: "/"}]
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
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 40,
        category: [{name: "women" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product5,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 77,
        category: [{name: "golden" , path: "/"}, {name: "children" , path: "/"}]
    },
    {
        photo: product6,
        photobanner: productbanner2,
        name: "title product name title product name",
        rating: 2,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "neutral" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product7,
        photobanner: productbanner3,
        name: "title product name title product name",
        rating: 5,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 100,
        category: [{name: "primay" , path: "/"}, {name: "children" , path: "/"}],
        newest: true
    },
    {
        photo: product8,
        photobanner: productbanner1,
        name: "title product name title product name",
        rating: 1,
        reviews: [
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
            {
                name: "Emma john",
                photo: userphoto1,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "September 22, 2020 at 9:42 pm",
                rating: 4
            },
            {
                name: "John Doe",
                photo: userphoto2,
                comment: "Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.",
                time: "may 17, 2020 at 3:12 pm",
                rating: 3
            },
        ],
        description: {
            short: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            long: {
                description: "Design inspiration lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci.",
                features: {
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsum has been the industry’s standard dummy text ever since. Lorem Ipsum is simply dummy text.",
                    items: [
                        'Praesent id enim sit amet.Tdio vulputate',
                        'Eleifend in in tortor. ellus massa.Dristique sitii',
                        'Massa ristique sit amet condim vel',
                        'Dilisis Facilisis quis sapien. Praesent id enim sit amet'
                    ]
                },
                Specifications: {
                    material: "Praesent id enim sit amet.Tdio",
                    'recommended use': "Praesent id enim sit amet.Tdio vulputate eleifend in in tortor. ellus massa. siti",
                    warranty: "2 year warranty",
                    manufacturer: "Praesent id enim",
                }
            },
            video: {
                video: video1,
                poster: postervideo1
            }
        },
        salary: 20,
        category: [{name: "clothes" , path: "/"}, {name: "children" , path: "/"}]
    },
]

export const user_items = [
    {
        Fname: "Ahmed",
        Lname: "Samy",
        photo: userphoto1,
        email: "ahmed0salma.sa@gmail.com",
        orders: [
            {
                serial: "34VB5540K83",
                date: "Aug 04, 2020",
                pending: "in progress",
                total: 187.65,
                products: [
                    {
                        size: "XL",
                        quantity: 3,
                        color: "grey",
                        product: product_items[0]
                    },
                    {
                        size: "SM",
                        quantity: 3,
                        color: "pink",
                        product: product_items[4]
                    },
                    {
                        size: "M",
                        quantity: 3,
                        color: "blue",
                        product: product_items[2]
                    },
                ]
            },
            {
                serial: "34VB5540K83",
                date: "Aug 04, 2020",
                pending: "delivered",
                total: 187.65,
                products: [
                    {
                        size: "XL",
                        quantity: 3,
                        color: "grey",
                        product: product_items[0]
                    },
                    {
                        size: "SM",
                        quantity: 3,
                        color: "pink",
                        product: product_items[4]
                    },
                    {
                        size: "M",
                        quantity: 3,
                        color: "blue",
                        product: product_items[2]
                    },
                ]
            },
            {
                serial: "34VB5540K83",
                date: "Aug 04, 2020",
                pending: "canceled",
                total: 187.65,
                products: [
                    {
                        size: "XL",
                        quantity: 3,
                        color: "grey",
                        product: product_items[0]
                    },
                    {
                        size: "SM",
                        quantity: 3,
                        color: "pink",
                        product: product_items[4]
                    },
                    {
                        size: "M",
                        quantity: 3,
                        color: "blue",
                        product: product_items[2]
                    },
                ]
            },
            {
                serial: "34VB5540K83",
                date: "Aug 04, 2020",
                pending: "delivered",
                total: 187.65,
                products: [
                    {
                        size: "XL",
                        quantity: 3,
                        color: "grey",
                        product: product_items[0]
                    },
                    {
                        size: "SM",
                        quantity: 3,
                        color: "pink",
                        product: product_items[4]
                    },
                    {
                        size: "M",
                        quantity: 3,
                        color: "blue",
                        product: product_items[2]
                    },
                ]
            },
            {
                serial: "34VB5540K83",
                date: "Aug 04, 2020",
                pending: "canceled",
                total: 187.65,
                products: [
                    {
                        size: "XL",
                        quantity: 3,
                        color: "grey",
                        product: product_items[0]
                    },
                    {
                        size: "SM",
                        quantity: 3,
                        color: "pink",
                        product: product_items[4]
                    },
                    {
                        size: "M",
                        quantity: 3,
                        color: "blue",
                        product: product_items[2]
                    },
                ]
            },
            {
                serial: "34VB5540K83",
                date: "Aug 04, 2020",
                pending: "in progress",
                total: 187.65,
                products: [
                    {
                        size: "XL",
                        quantity: 3,
                        color: "grey",
                        product: product_items[0]
                    },
                    {
                        size: "SM",
                        quantity: 3,
                        color: "pink",
                        product: product_items[4]
                    },
                    {
                        size: "M",
                        quantity: 3,
                        color: "blue",
                        product: product_items[2]
                    },
                ]
            },
        ],
        reviews: [
            {
                rating: 4,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[0]
            },
            {
                rating: 3,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[3]
            },
            {
                rating: 5,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[2]
            },
            {
                rating: 1,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[1]
            },
            {
                rating: 4,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[0]
            },
            {
                rating: 3,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[3]
            },
            {
                rating: 5,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[2]
            },
            {
                rating: 1,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[1]
            },
            {
                rating: 4,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[0]
            },
            {
                rating: 3,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[3]
            },
            {
                rating: 5,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[2]
            },
            {
                rating: 1,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[1]
            },
            {
                rating: 4,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[0]
            },
            {
                rating: 3,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[3]
            },
            {
                rating: 5,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[2]
            },
            {
                rating: 1,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                product: product_items[1]
            },
        ]
    }
]
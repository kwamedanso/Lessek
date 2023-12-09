import { BiCurrentLocation, BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi"
import { BsTelephoneOutbound } from "react-icons/bs"
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai"



const footer = [
    {
        id: 1,
        title: "Lessek Contractors and Suppliers",
        desc: "We supply you with the best goods and services",
        socialIcons: [{ id: 1, icon: <AiOutlineTwitter /> }, { id: 2, icon: <BiLogoFacebook /> }, { id: 3, icon: <BiLogoLinkedin /> }, { id: 4, icon: <BiLogoInstagram /> }]
    },
    {
        id: 2,
        title: "Call Us",
        about: [
            {
                id: 1,
                title: "Tema Community 9",
                path: "https://www.google.com.gh/maps/place/tema/data=!4m7!3m6!1s0xe2b39c938c43345:0xe5322026339cae26!8m2!3d10.8167559!4d-0.8614735!16s%2Fg%2F11b75pp4l3!19sChIJRTPEOMk5Kw4RJq6cMyYgMuU?authuser=0&hl=en&rclk=1",
                icon: <BiCurrentLocation />
            },
            {
                id: 2,
                title: "020 800 1363",
                path: "tel:+233208001363",
                icon: <BsTelephoneOutbound />
            },
            {
                id: 3,
                title: "lessek-suppliers@gmail.com",
                path: "mailto:dansokwame96@gmail.com",
                icon: <AiOutlineMail />
            }
        ],
    },
    {
        id: 3,
        title: "Socials",
        socials: [
            {
                id: 1,
                title: "Facebook",
                path: "https://www.facebook.com"
            },
            {
                id: 2,
                title: "Instagram",
                path: "https://www.instagram.com"
            },
            {
                id: 3,
                title: "Twitter",
                path: "https://www.Twitter.com"
            },
            {
                id: 4,
                title: "Discord",
                path: "https://www.discord.com"
            }

        ]
    },
]

export default footer;
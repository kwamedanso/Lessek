import About from "pages/About"
import Home from "pages/Home"

const publiceRoutes = [
    {
        id: 1,
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        path: "/home",
        element: <Home />
    },
    {
        id: 3,
        path: "/about",
        element: <About />
    }
]

export default publiceRoutes;
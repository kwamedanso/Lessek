import Benefits from 'components/home/Benefits'
import CTA from 'components/home/CTA'
import Events from 'components/home/Events'
import Hero from 'components/home/Hero'
import Multimedia from 'components/home/Multimedia'
import News from 'components/home/News'
import React from 'react'

export default function Home() {
    return (
        <div>
            <Hero />
            <Benefits />
            <News />
            <Events />
            <Multimedia />
            <CTA />
        </div>
    )
}

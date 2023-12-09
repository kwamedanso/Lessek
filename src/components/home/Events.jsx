import React from 'react'
import events from 'consts/events'
import { BsCalendarDate } from "react-icons/bs"
import "components/home/styles/events.css"
import SectionTitle from 'components/shared/SectionTitle'

export default function Events() {
    return (
        <>
            <section id='events'>
                <div className='section-margin padding-block-400' >
                    <SectionTitle title={"Events"} />
                    <div className="events-wrapper margin-block-200">
                        {events.map(item => (
                            <div key={item.id} className='event-card'>
                                <p className='fw-bold padding-block-50'>{item.title}</p>
                                <div className="event-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="event-footer">
                                    <div className='event-footer-item'>
                                        <BsCalendarDate />
                                        <div className='fs-100 fw-semi-bold'>
                                            <p>From</p>
                                            <p>{item.from}</p>
                                        </div>
                                    </div>
                                    <div className='event-footer-item'>
                                        <BsCalendarDate />
                                        <div className='fs-100 fw-semi-bold'>
                                            <p>To</p>
                                            <p>{item.to}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

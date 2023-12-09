import React, { Fragment } from 'react'
import footer from 'consts/footer'
import { Link } from 'react-router-dom'
import "components/shared/styles/footer.css"

export default function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className='footer-section'>
                <div className="footer-wrapper section-margin">
                    {footer.map(item => (
                        <div key={item.id}>
                            <h3 className='fs-400'>{item.title}</h3>
                            {item.desc && <p className='fs-200 padding-block-100'>{item.desc}</p>}
                            {item.socialIcons && <div>
                                {item.socialIcons.map(socialIcon => <Fragment key={socialIcon.id}>{socialIcon.icon}</Fragment>)}
                            </div>}
                            {item.about?.map(aboutItem => (
                                <p key={aboutItem.id} className='padding-block-100'>
                                    <Link to={aboutItem.path}>
                                        {aboutItem.icon}
                                        <span>{aboutItem.title}</span>
                                        <br />
                                    </Link>
                                </p>
                            ))
                            }
                            {item.socials?.map(social => (
                                <p key={social.id} className='padding-block-100'> <Link to={social.path} target='_blank'>{social.title}</Link></p>
                            ))}
                        </div>))}
                </div>
                <hr />
                <div className="copyrights">
                    <p className='fs-200'>&copy; {currentYear} - Lessek Contractors & Suppliers</p>
                </div>
            </section>
        </>
    )
}

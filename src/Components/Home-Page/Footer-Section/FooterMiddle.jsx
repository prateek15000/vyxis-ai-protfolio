import React from 'react'

const FooterMiddle = ({ styles }) => {

    const footerMiddleLinks = [
        {
            name: "vyxis.ai@gmail.com",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=vyxis.ai@gmail.com",
        },
        {
            name: "vyxis.ai",
            url: "https://vyxis-ai.vercel.app/",
        }
    ];

    return (
        <div className={`${styles.footMiddle} ${styles.flex} ${styles.ac}`}>
            {footerMiddleLinks.map((link, index) => (
                <a
                    className={`${styles.fancyBtn} ${styles.flex} ${styles.ac} ${styles.jc}`}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.url}
                >
                    {link.name}
                </a>
            ))}
        </div>
    )
}

export default FooterMiddle

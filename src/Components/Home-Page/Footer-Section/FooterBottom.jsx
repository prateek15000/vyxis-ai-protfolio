import React from 'react'

const FooterBottom = ({ styles }) => {

    const footerBottomLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/prateek-mittal-07b94a31b/",
        },
        {
            name: "Twitter/X",
            url: "https://x.com/vyxis_ai",
        },
        {
            name: "GitHub",
            url: "https://github.com/prateek15000",
        }
    ];

    return (
        <div className={`${styles.footBottom} ${styles.flex} ${styles.ac} ${styles.sb}`}>
            <div className={`${styles.reserve} ${styles.flex} ${styles.fClmn}`}>
                <small> Version</small>
                <p>(©) 2026 Prateek Mittal. All rights reserved.</p>
            </div>

            <div className={`${styles.footLinks} ${styles.flex} ${styles.fClmn} ${styles.ac} ${styles.sb}`}>
                <small> Socials</small>
                <div className={`${styles.socialLinks} ${styles.flex} ${styles.ac}`}>
                    {footerBottomLinks.map((link, index) => (
                        <a key={index} target="_blank" rel="noopener noreferrer" href={link.url}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterBottom

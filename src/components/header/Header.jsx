"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
    const ref = useRef(null);
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            if (window.scrollY > 250) ref.current.classList.add("sticky");
            else ref.current.classList.remove("sticky");
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Close menu on route change
    //   useEffect(() => {
    //     if (!isOpen) return;
    //     setIsOpen(false);
    //     document.documentElement.classList.remove("overflow-hidden");
    //   }, [pathname]);

    const closeMenu = () => {
        setIsOpen(false);
        document.documentElement.classList.remove("overflow-hidden");
    };

    const navLink = (href, label) => (
        <li className="nav-item">
            <Link
                className={pathname === href ? "nav-link active" : "nav-link"}
                href={href}
                onClick={closeMenu}   // 👈 close on click
            >
                {label}
            </Link>
        </li>
    );


    return (
        <div className={isOpen ? "header-area header-area-mobile" : "header-area"}>
            <header className="header-sticky" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div className={isOpen ? "header-wrapper row align-items-center header-wrapper-mobile" : "header-wrapper row align-items-center"}>
                            <div className={isOpen ? "d-none" : "col-lg-2 col-6"}>
                                <div className="header-left">
                                    <div className="logo">
                                        <Link href="/" aria-label="Go to homepage">
                                            <Image
                                                src="/images/logo_transparent.png"
                                                alt="Zaid Ahmad logo"
                                                width={180}
                                                height={48}
                                                priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className={isOpen ? "col-12 px-0 pr-0 mobile-header-wrapper" : "col-lg-10 col-6 pr-0"}>
                                <div className={isOpen ? "header-center header-center-mobile justify-content-between align-items-baseline" : "header-center justify-content-end"}>
                                    <nav id="sideNav" className={isOpen ? "d-flex flex-column" : "mainmenu-nav navbar-example2 d-none d-md-block"}>
                                        <ul className={isOpen ? "primary-menu primary-menu-mobile nav nav-pills flex-column" : "primary-menu nav nav-pills"}>
                                            {navLink("/", "Home")}
                                            {navLink("/courses", "Courses")}
                                            {navLink("/clients", "Clients")}
                                            {navLink("/projects", "Projects")}
                                        </ul>

                                        {/* <div className="col-12 px-0">{isOpen ? <Findme /> : null}</div> */}
                                    </nav>

                                    <div className="header-right">
                                        <div
                                            className="hamburger-menu d-block d-md-none"
                                            onClick={() => {
                                                setIsOpen((v) => !v);
                                                document.documentElement.classList.toggle("overflow-hidden");
                                            }}
                                            role="button"
                                            aria-label="Toggle menu"
                                        >
                                            {isOpen ? <MdClose /> : <MdMenu />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
}

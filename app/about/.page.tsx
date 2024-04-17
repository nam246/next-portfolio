import Image from "next/image"
import Link from "next/link"

export default function Homepage() {

    return (
        <div className="wrapper">
            <div className="section mb-3 flex flex-col lg:flex-row justify-between align-start gap-5">
                <div className="flex-1">
                    <picture>
                        <Image src="/user-circle-filled_gray.svg" width={150} height={150} alt="user-image" />
                    </picture>
                    <h1>VŨ HOÀNG DIỆU TRUNG</h1>
                    <ul className="list-none ps-0">
                        <li><i className="fa-solid fa-envelope"></i> Email: <Link href="mailto:trungvuhoang2005@gmail.com">trungvuhoang2005@gmail.com</Link></li>
                        <li><i className="fa-solid fa-phone"></i> Phone number: <Link href="tel:+84984041242">+84 98 40 41 242</Link></li>
                        <li><i className="fa-brands fa-github"></i> <Link href="https://github.com/nam246">Github</Link></li>
                    </ul>

                    <div className="bg-slate-100 rounded-md p-3 my-5">
                        Experienced Front-End developer have a fundamental knowledge about HTML, CSS, JavaScript (ES6, JQuery).
                        I've describe a web page's interface and functionality using JavaScript and PHP.
                        Make discuss with business department and client to solved client's task.
                        I am even have a basic knowledge about backend
                        My job target is to be a senior fullstack developer in next 2 years.
                    </div>
                </div>

                <div className="flex-1">

                </div>
            </div>

            <div className="section mb-3">
                <div className="bg-slate-100 rounded-md font-bold text-lg p-3">
                    Skillset
                </div>
                <ul className="">
                    <li>
                        HTML, CSS, JavaScript (ES6, JQuery)
                        <p>Using HTML, CSS, JavaScript to building user interface, describe a web page's appearance/presentation and functionality/behavior.</p>
                        <p>Fetch API from backend and get data using asynchronous JavaScript or JQuery AJAX.</p>
                        <p>Experienced modern web framework/library such as VueJS, ReactJS, NextJS.</p>
                    </li>
                    <li>
                        Initiate experience with some of backend languages and framework such as PHP (Laravel), NodeJS. Make a simple
                        RESTful API to receive a request.
                        Have knowledge about Client-Server, MVC model.
                    </li>
                    <li>
                        Initiate experience with relational database management system such as PostgresSQL...
                    </li>
                </ul>
            </div>

            <div className="section mb-3">
                <div className="bg-slate-100 rounded-md font-bold text-lg p-3">
                    Work Experience
                </div>
                <ul className="">
                    <li>Viễn Đông computer</li>
                    <li>Sikido Media & Advertising Inc.</li>
                </ul>
            </div>

            <div className="section mb-3">
                <div className="bg-slate-100 rounded-md font-bold text-lg p-3">
                    Education
                </div>
                <p>Industrial University of Ho Chi Minh city</p>
                <p>Bachelor of Information Technology</p>
                <p>Major: Information Technology</p>
            </div>

            <div className="section mb-3">
                <div className="bg-slate-100 rounded-md font-bold text-lg p-3">
                    Languages
                </div>
                <ul className="">
                    <li>Japanese JLPT N5 (on going N3)</li>
                    <li>English TOEIC 680 (Listening, Reading)</li>
                </ul>
            </div>
        </div>
    )
}
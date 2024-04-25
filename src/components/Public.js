import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">NR CREW</span></h1>
            </header>
            <main className="public__main">
            <p>NR Crew is dedicated to delivering innovative solutions with a team of skilled professionals.</p>
            <address className="public__addr">
        Located at<br />
        413 Fortune Plaza<br />
        Opp Mango Plus Cinema<br />
        Fortune Circle, New India Colony<br />
        Nava Naroda, Ahmedabad 382330<br />
        India<br />
        Ph. <a href="tel:+919825531581">+91 9825531581</a>
    </address>
                <br />
                <p>Owner: Chetan Virani</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
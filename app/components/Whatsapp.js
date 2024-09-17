import Link from "next/link";
import '../globals.css';


export default function Whatsapp() {
    return (
        <div>
            <button className="contact-button">
                <Link href="https://wa.me/94742427711?text=Hello%20I%27m%20sending%20this%20message%20from%20UBCOURSE%20Website%20" target="_blank">
                    <i className="fab fa-whatsapp" style={{color: "#fff"}}></i>
                    <span className="red-dot"></span>
                </Link>
            </button>
        </div>

    )
}
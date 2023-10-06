import styles from "./Navigation.module.css"
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <a className = { styles.links}/>
                    <Link href="/">Home</Link>
                    <a className = { styles.links}/>
                    <Link href="/">Login</Link>
                    <a className = { styles.links}/>
                    <Link href="/">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}
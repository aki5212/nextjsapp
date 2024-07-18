import Link from "next/link";
import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
                <p>Copyright © 2024 株式会社ゆうあい看護師家政婦職業センター. All Rights Reserved.</p>
            </div>
      <ul>
        <li>
          <Link href="/privacy-policy">プライバシー・ポリシー</Link>
        </li>
        <li>
          <Link href="/company-info">運営企業</Link>
        </li>
      </ul>
    </footer>
  );
}

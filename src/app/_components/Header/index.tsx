import Link from "next/link";
import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
       <nav className="navbar navbar-expand-lg bg-warning" >
          <div className="container">
             <p>株式会社ゆうあい看護師家政婦職業センター</p>
             <div>
            <ul>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>求職者リスト</p>
            </li>  
            <li>
              <p>求職者登録</p>
            </li> 
            <li>
              <p>求人リスト</p>
            </li> 
            <li>
              <p>求人情報</p>
            </li> 
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">検索</button>
          </form>
    </div>
  </div>
</nav>
      <p>
        <Link href="/">Photo Share</Link>
      </p>
    </header>
  );
}

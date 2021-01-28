import React from 'react'
import s from "./style.module.css";

function Layout({id,title,desc,urlBg,colorBg}) {
    const bg = colorBg ? {backgroundColor : 'green'} : {backgroundImage: urlBg};
    console.log("Layout bg:", bg);
    return (
        <section className={s.root} id={id}
        style={bg}
        >
    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={s.desc && s.full}>
                <p>{desc}</p>
            </div>
        </article>
    </div>
</section>
    )
}

export default Layout

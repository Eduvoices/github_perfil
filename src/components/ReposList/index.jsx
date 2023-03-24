import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])
    const [estaCaregando, setEstaCarregando] = useState(true)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(resJSON => {
            setTimeout(() => {
                setRepos(resJSON)
                setEstaCarregando(false)
            }, 3000);
        })
    }, [nomeUsuario])

    return (
        <div className="container">
        {estaCaregando ? (
            <h1>Carregando...</h1>
        ) : (
            <ul className={styles.list}>
                {/* {repos.map(repositorio => ( */}
                {repos.map(({id, name, language, html_url}) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language}
                        </div>

                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        )}
        </div>
    )
}

export default ReposList
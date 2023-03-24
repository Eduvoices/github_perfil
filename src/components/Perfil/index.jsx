import styles from './Perfil.module.css'

const Perfil = ({endereço, nomeUsuario}) => {
    // const user = {
    //     nome: 'Luis Eduardo',
    //     avatar: 'https://github.com/Eduvoices.png'
    // }

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil

//também é possível fazer a importação através de function/arrow = export default () => {código} OU export default function() {código}
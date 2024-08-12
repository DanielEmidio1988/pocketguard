import { IRelease } from "../../types/release"
import ReleaseItem from "./releaseItem"
import styles from "../../assets/scss/modules/components/releaseList/ReleaseList.module.scss"

interface Props{
    releases: IRelease[];
    setReleases: (releases: IRelease[]) => void;
}

function ReleasesList({releases, setReleases}: Props){
    return(
        <section className={styles.releaseList}>
            <table className={styles.releaseList___Table}>
                <tr>
                    <th className={styles.releaseList___Table___header}>Lançamento</th>
                    <th className={styles.releaseList___Table___header}>Entrada/Saída</th>
                    <th className={styles.releaseList___Table___header}>Valor (R$)</th>
                    <th className={styles.releaseList___Table___header}>Dt. Vencimento</th>
                    <th className={styles.releaseList___Table___header}></th>
                </tr>
                {releases && releases.map((release)=>{
                    return(
                        <ReleaseItem
                            key={release.id}
                            release={release}
                            releases={releases}
                            setReleases={setReleases}
                        />
                    )
                })}
            </table>
        </section>
    )
}

export default ReleasesList
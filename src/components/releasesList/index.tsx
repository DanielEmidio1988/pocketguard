import { IRelease } from "../../types/release"
import ReleaseItem from "./releaseItem"
import styles from "../../assets/scss/modules/components/releaseList/ReleaseList.module.scss"

interface Props{
    releases: IRelease[];
    setReleases: (releases: IRelease[]) => void;
}

function ReleasesList({releases, setReleases}: Props){

    function orderDataReleases(){
        const newData = releases.sort(function(a,b){
            if (a.isPaid !== b.isPaid) {
                return a.isPaid ? 1 : -1;
            }

            return a.payday.getTime() - b.payday.getTime()
        });

        setReleases(newData);
    }

    orderDataReleases();

    return(
        <section className={styles.releaseList}>
            <table className={styles.releaseList___Table}>
                <tr>
                    <th className={`${styles.releaseList___Table___header} ${styles.releaseList___Table___header__name}`}>Lançamento</th>
                    <th className={`${styles.releaseList___Table___header} ${styles.releaseList___Table___header__types}`}>Entrada/Saída</th>
                    <th className={`${styles.releaseList___Table___header} ${styles.releaseList___Table___header__value}`}>Valor (R$)</th>
                    <th className={`${styles.releaseList___Table___header} ${styles.releaseList___Table___header__payday}`}>Dt. Vencimento</th>
                    <th className={`${styles.releaseList___Table___header} ${styles.releaseList___Table___header__CtaItens}`}></th>
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
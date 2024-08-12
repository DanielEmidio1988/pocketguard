import { IRelease } from "../../../types/release"
import styles from "../../../assets/scss/modules/components/releaseList/releaseItem/ReleaseItem.module.scss"
import { FaTrash, FaCheck } from "react-icons/fa";

interface Props{
    release: IRelease;
    releases: IRelease[];
    setReleases: (releases: IRelease[]) => void;
}

export function ReleaseItem({release, releases, setReleases}: Props){

    function removeExpense(item: IRelease){
        const filterList = releases.filter((rel)=>{
            return rel.id !== item.id
        });
        console.log('filterList', filterList)
        setReleases(filterList)
    }

    function isPaid(){

    }

    return(
        <tr className={`${styles.releaseList___Table___Data} ${release.isPaid ? styles.isPaidItem : "" }`}>
            <td>{release.name}</td>
            <td>{release.type}</td>
            <td>{release.value.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</td>
            <td>{release.payday.toLocaleDateString("pt-BR",{
                day: "2-digit",
                month: "2-digit",
                year: "2-digit"
            })}</td>
            <td className={styles.releaseList___Table___Data__CtaItens}>
                <FaTrash
                    onClick={()=>removeExpense(release)}
                /> 
                <FaCheck
                />
            </td>
        </tr>
    )
}

export default ReleaseItem
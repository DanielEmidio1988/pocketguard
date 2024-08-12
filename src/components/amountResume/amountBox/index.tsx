import { IBalance } from "../../../types/balance"
import styles from "../../../assets/scss/modules/components/amountResume/amountBox/AmountBox.module.scss"

interface Props{
    amount: IBalance
}
function AmountBox({amount}: Props){
    return(
        <div className={styles.amountResume__cardAmountBox}>
            <h3>{amount.type}</h3>
            <h2>{amount.total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</h2>
        </div>
    )
}

export default AmountBox
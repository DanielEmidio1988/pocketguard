import { useEffect, useState } from "react"
import styles from "../../assets/scss/modules/components/amountResume/AmountResume.module.scss" 
import AmountBox from "./amountBox"
import { IBalance } from "../../types/balance";
import { IRelease } from "../../types/release";
import { TYPE_BALANCE } from "../../types/typeBalance";
import { TYPE_RELEASE } from "../../types/typeRelease";

interface Props{
    releases: IRelease[]
}

function AmountResume({releases}: Props){
    const [amountValues, setAmountValues] = useState<IBalance[]>([
        {
            type: TYPE_BALANCE.Balance,
            total: 0,
        },
        {
            type: TYPE_BALANCE.Income,
            total: 0,
        },
        {
            type: TYPE_BALANCE.Expense,
            total: 0,
        }
    ]);

    useEffect(()=>{
        function readBalance(){
            let income = releases
            .filter((release) => release.type === TYPE_RELEASE.Income)
            .reduce((acc, release)=> acc + release.value, 0);
            let expense = releases
            .filter((release)=> release.type === TYPE_RELEASE.Expense)
            .reduce((acc, release)=> release.value + acc, 0);

            setAmountValues([
                {
                    type: TYPE_BALANCE.Balance,
                    total: income - expense,
                },
                {
                    type: TYPE_BALANCE.Income,
                    total: income,
                },
                {
                    type: TYPE_BALANCE.Expense,
                    total: expense,
                }
            ])
        }

        readBalance();

    },[releases])

    return(
        <div className={`${styles.amountResume}`}>
            {amountValues && amountValues.map((amount, index)=>{
                return(
                    <AmountBox 
                        key={index}
                        amount={amount}
                    />
                )
            })}
            
        </div>
    )
}

export default AmountResume
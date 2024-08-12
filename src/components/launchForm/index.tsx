import { useState } from "react";
import styles from "../../assets/scss/modules/components/launchForm/LaunchForm.module.scss"
import { IRelease } from "../../types/release"
import { TYPE_RELEASE } from "../../types/typeRelease";
import { v4 as uuid4 } from "uuid";

interface Props{
    releases: IRelease[];
    setReleases: (releases: IRelease[]) => void;
}

function LaunchForm({releases, setReleases}: Props){
    const [release, setRelease] = useState<IRelease>({
        id: '',
        name: '',
        description: '',
        type: TYPE_RELEASE.Income,
        release_date_of: new Date(),
        payday: new Date(),
        value: 0,
        selected: false,
        isPaid: false,
    })

    function onChangeForm(event: any){
        const { name, value, type, checked } = event.target;
        const convertValue = (name: string, value: string) => {
            switch (name) {
                case 'value':
                    return parseFloat(value) || 0;
                case 'payday':
                case 'release_date_of':
                    return new Date(value);
                case 'isPaid':
                    return checked;
                default:
                    return value;
            }
        };
        
        setRelease(prevRelease => ({
            ...prevRelease,
            [name]: convertValue(name, value),
        }));
    }

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    function insertNewRelease(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log('release ', release)
        console.log('releases ', releases)
        setReleases([
            ...releases,
            {
                ...release, 
                id: uuid4()
            }
        ])
        setRelease({
            id: '',
            name: '',
            description: '',
            type: TYPE_RELEASE.Income,
            release_date_of: new Date(),
            payday: new Date(),
            value: 0,
            selected: false,
            isPaid: false,
        })
    }

    return(
        <form className={styles.formRelease} id="" onSubmit={insertNewRelease}>
            <div className={styles.formRelease___formTitle}>
                <h2>Informe os dados para lançamento</h2>
            </div>
            <div className={styles.formRelease___inputArea}>
                <div className={styles.formRelease___inputArea___inputBox}>
                    <label htmlFor="name_release">Lançamento</label>
                    <input 
                        type="text" 
                        className="formRelease__input_area__input"
                        value={release.name}
                        name="name"
                        onChange={onChangeForm}
                    />
                </div>
                <div className={styles.formRelease___inputArea___inputBox}>
                    <label htmlFor="name_release">Descrição</label>
                    <input 
                        type="text" 
                        className="formRelease__input_area__input"
                        value={release.description}
                        name="description"
                        onChange={onChangeForm}
                    />
                </div>
                <div className={styles.formRelease___inputArea___inputBox}>
                    <label htmlFor="name_release">Entrada/Saída</label>
                    <select 
                        className="formRelease__input_area__select"
                        name="type"
                        onChange={onChangeForm}
                    >
                        <option value=""></option>
                        <option value={TYPE_RELEASE.Income}>Entrada</option>
                        <option value={TYPE_RELEASE.Expense}>Saída</option>
                    </select>
                </div>
                <div className={styles.formRelease___inputArea___inputBox}>
                    <label htmlFor="name_release">Valor (R$)</label>
                    <input 
                        type="number" 
                        className="formRelease__input_area__input"
                        value={release.value}
                        name="value"
                        onChange={onChangeForm}
                    />
                </div>
                <div className={styles.formRelease___inputArea___inputBox}>
                    <label htmlFor="name_release">Data de Vencimento</label>
                    <input 
                        type="date" 
                        className="formRelease__input_area__input"
                        value={formatDate(release.payday)}
                        name="payday"
                        onChange={onChangeForm}
                    />
                </div>
                <div className={styles.formRelease___inputArea___inputBox}>
                    <label htmlFor="name_release">Pago</label>
                    <input 
                        type="checkbox" 
                        className="formRelease__input_area__input"
                        checked={release.isPaid}
                        name="isPaid"    
                        onChange={onChangeForm}            
                    />
                </div>
            </div>
            <div className={styles.formRelease__submitArea}>
                <input type="submit" value="Lançar"/>
            </div>
        </form>
    )
}

export default LaunchForm
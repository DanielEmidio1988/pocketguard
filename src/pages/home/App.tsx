import React, { useState } from 'react';
import AmountResume from '../../components/amountResume';
import LaunchForm from '../../components/launchForm';
import ReleasesList from '../../components/releasesList';
import { IRelease } from '../../types/release';
import { TYPE_RELEASE } from '../../types/typeRelease';
import '../../assets/scss/styled.scss';
import styles from "../../assets/scss/modules/pages/home/App.module.scss";

function App() {
  const [releases, setReleases] = useState<IRelease[] | []>([
    {
      id: "1",
      name: "Mensalidade Faculdade",
      description: "Mensalidade  1/3 FMU",
      type: TYPE_RELEASE.Expense,
      release_date_of: new Date("2024-07-29"),
      payday: new Date("2024-08-05"),
      value: 599.00,
      selected: false,
      isPaid: false,
    },
    {
      id: "2",
      name: "Curso Alura",
      description: "Mensalidade 3/12 curso de TI",
      type: TYPE_RELEASE.Expense,
      release_date_of: new Date("2024-07-29"),
      payday: new Date("2024-08-12"),
      value: 149.29,
      selected: false,
      isPaid: true,
    },
    {
      id: "3",
      name: "Salário Daniel",
      description: "Salário Daniel, mês de Julho",
      type: TYPE_RELEASE.Income,
      release_date_of: new Date("2024-07-29"),
      payday: new Date("2024-08-05"),
      value: 3000.70,
      selected: false,
      isPaid: false,
    },
    {
      id: "4",
      name: "Consultoria Cássia",
      description: "Valor recebido de vendas Consultoria Cássia",
      type: TYPE_RELEASE.Income,
      release_date_of: new Date("2024-07-29"),
      payday: new Date("2024-08-01"),
      value: 7200.3,
      selected: false,
      isPaid: false,
    },
    {
      id: "5",
      name: "Prestação Casa",
      description: "Prestação Financiamento Apartamento",
      type: TYPE_RELEASE.Expense,
      release_date_of: new Date("2024-07-29"),
      payday: new Date("2024-08-20"),
      value: 989.78,
      selected: false,
      isPaid: false,
    },
    {
      id: "6",
      name: "Cartão de Crédito",
      description: "Pagamento Extrato Cartão Nubank",
      type: TYPE_RELEASE.Income,
      release_date_of: new Date("2024-07-29"),
      payday: new Date("2024-08-05"),
      value: 2789.56,
      selected: false,
      isPaid: false,
    }
  ]);

  return (
    <>
      <header className={styles.header}>
        <h1>PocketGuard</h1>
        <h2>Lançamento Financeiro</h2>
      </header>
      <AmountResume
        releases={releases}
      />
      <LaunchForm
        releases={releases}
        setReleases={setReleases}
      />
      <ReleasesList 
        releases={releases}
        setReleases={setReleases}
      />
    </>
  );
}

export default App;

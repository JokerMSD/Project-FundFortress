import { DefaultTemplate } from '../../components/DefaultTemplate'
import { FinanceForm } from '../../components/FinanceForm'
import { FinanceList } from '../../components/FinanceList'
import { FinanceCard } from '../../components/FinanceCard'
import { Total } from '../../components/Total'



export const LandingPage = () => {
  return (
    <>
     <DefaultTemplate>
       <FinanceForm />
       <Total />
       <FinanceList />
     </DefaultTemplate>
    </>
  );
};


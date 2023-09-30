import { DefaultTemplate } from '../../components/DefaultTemplate'
import { FinanceForm } from '../../components/FinanceForm'
import { FinanceList } from '../../components/FinanceList'
import { FinanceApp } from '../../components/FinanceCardFather'


export const LandingPage = () => {
  return (
    <>
     <DefaultTemplate>
       <FinanceForm />
       <FinanceApp/> 
     </DefaultTemplate>
    </>
  );
};


import Loginform from "./Loginform";
import TransactionForm from "./TransactionForm";
import CenterLayout from "../Layout/FormLayout";

export default{
    title:"components/Form"
}
export const LoginForm =() => (<CenterLayout>  <Loginform />  </CenterLayout>);
export const Transaction=()=> <TransactionForm />;
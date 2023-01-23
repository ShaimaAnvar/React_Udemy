//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [{
    date: new Date("2022-11-06"),
    title:'Insurance',
    amount:290
  }, {
    date:new Date("2022-10-06"),
    title:'Rent',
    amount:490
  }, {
    date: new Date("2022-12-05"),
    title:'Loan',
    amount:590
  }]
    ;
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}></Expenses>

      
    </div>
  );
}

export default App;

import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [{
    date: new Date("2022-07-06"),
    title:'Insurance',
    amount:290
  }, {
    date:new Date("2022-03-06"),
    title:'Rent',
    amount:490
  }, {
    date: new Date("2022-05-05"),
    title:'Loan',
    amount:590
  }]
    ;
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>

      
    </div>
  );
}

export default App;

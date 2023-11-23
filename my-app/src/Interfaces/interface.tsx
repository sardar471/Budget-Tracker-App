
export interface Budget {
  firstName: string;
  lastName :string;
  email:string ;
  password:string;
  confirmPassword:string;
  budgetLimit:string;
    
  } 
  export interface budgett{
    budgetts:Budget[];
  }
export interface BudgetList {
  id: string;
  name: string;
  date: string;
  price: number;
}


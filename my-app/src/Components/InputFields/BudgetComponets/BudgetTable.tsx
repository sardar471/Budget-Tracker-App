
import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

interface Budget {
  _id: string;
  name: string;
  date: string;
  price: number;
}

interface BudgetTableProps {
  budgets: Budget[];
  editItemId: string | null;
  handleEditBudget: (id: string) => void;
  handleDeleteBudget: (id: string) => void;
  handleSave: (id: string, updatedBudget: any) => void;
  setBudgets: React.Dispatch<React.SetStateAction<Budget[]>>;
}

const BudgetTable: React.FC<BudgetTableProps> = ({
  budgets,
  editItemId,
  handleEditBudget,
  handleDeleteBudget,
  handleSave,
  setBudgets,
}) => (
  <tbody>
    {budgets.map((budget) => (
      <tr key={budget._id}>
        <td>
          {editItemId === budget._id ? (
            <input
              className='table-input'
              type="text"
              value={budget.name}
              onChange={(e) => setBudgets((prev) => prev.map((b) => (b._id === budget._id ? { ...b, name: e.target.value } : b)))}
            />
          ) : (
            budget.name
          )}
        </td>
        <td>
          {editItemId === budget._id ? (
            <input
              className='table-input'
              type="number"
              value={budget.price}
              onChange={(e) => setBudgets((prev) => prev.map((b) => (b._id === budget._id ? { ...b, price: Number(e.target.value) } : b)))}
            />
          ) : (
            budget.price
          )}
        </td>
        <td>
          {editItemId === budget._id ? (
            <input
              className='table-input'
              type="text"
              value={budget.date}
              onChange={(e) => setBudgets((prev) => prev.map((b) => (b._id === budget._id ? { ...b, date: e.target.value } : b)))}
            />
          ) : (
            budget.date
          )}
        </td>
        <td>
          {editItemId === budget._id ? (
            <div className='save-btn-container'>
              <button className='save-btn' onClick={() => handleSave(budget._id, budget)}>
                Save
              </button>
            </div>
          ) : (
            <div className='buttons-div'>
              <EditButton onClick={() => handleEditBudget(budget._id)} />
              <DeleteButton onClick={() => handleDeleteBudget(budget._id)} />
            </div>
          )}
        </td>
      </tr>
    ))}
  </tbody>
);

export default BudgetTable;

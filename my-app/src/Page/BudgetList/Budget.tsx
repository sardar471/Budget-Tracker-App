
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BudgetTable from '../../Components/InputFields/BudgetComponets/BudgetTable';
import BudgetForm from '../../Components/InputFields/BudgetComponets/AddBudget';
import DateFilter from '../../Components/InputFields/BudgetComponets/DateFilter';
import Pagination from '../../Components/InputFields/BudgetComponets/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BudgetList.css';

interface Budget {
  _id: string;
  name: string;
  date: string;
  price: number;
}

const Budget: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [filteredBudgets, setFilteredBudgets] = useState<Budget[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editItemId, setEditItemId] = useState<string | null>(null);
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const token = localStorage.getItem('token');
  const Id = localStorage.getItem('userId');

  useEffect(() => {
    fetchBudgets();
  }, [currentPage, perPage]);

  const fetchBudgets = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/users/${Id}/budgets`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      setBudgets(response.data);
    } catch (error) {
      console.error('Error fetching budgets:', error);
    }
  };

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  const handleDateFilter = async (date: string) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/users/${Id}/budgets`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
        params: {
          page: currentPage + 1,
          limit: perPage,
          date,
        },
      });
      setFilteredBudgets(response.data);
      // toast('Budgets filtered successfully');
    } catch (error) {
      console.error('Error filtering budgets:', error);
    }
  };

  const handleToggleForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      await axios.post(`http://localhost:4000/api/users/${Id}/budgets`, values, {
        method: 'post',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      
      resetForm();
      setShowAddForm(!showAddForm);
      toast('Budget added successfully');
      fetchBudgets();
    } catch (error) {
      console.error('Error adding budget:', error);
    }
  };

  const handleDeleteBudget = (budgetId: string) => {
    axios.delete(`http://localhost:4000/api/users/${Id}/budgets/${budgetId}`).then((response) => {
      const updatedBudgets = budgets.filter((budget) => budget._id !== budgetId);
      setBudgets(updatedBudgets);
    });
  };

  const handleEditBudget = (Id: string) => {
    setEditItemId(Id);
  };

  const handleSave = async (budgetId: string, updatedBudget: any) => {
    try {
      await axios.put(`http://localhost:4000/api/users/${Id}/budgets/${budgetId}`, updatedBudget, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      toast('Budget updated successfully');
      setEditItemId(null);
      fetchBudgets();
    } catch (error) {
      console.error('Error updating budget:', error);
    }
  };

  const totalPages = Math.ceil(budgets.length / perPage);

  return (
    <div className='main'>
      <div className="budget-list-container">
        <div className="budget-list-containerrr">
          <div className="wrapper">
            <div className="budget-list">
              <div className="sub-container">
                <DateFilter onDateFilter={handleDateFilter} />
              </div>
              <div className="add-budget">
                <button className='add-btn' onClick={handleToggleForm}>
                  ADD
                </button>
              </div>
            </div>
            <table className='table-content'>
              <thead>
                <tr>
                  <th className=''>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <BudgetTable
                budgets={filteredBudgets.length > 0 ? filteredBudgets : budgets}
                editItemId={editItemId}
                handleEditBudget={handleEditBudget}
                handleDeleteBudget={handleDeleteBudget}
                handleSave={handleSave}
                setBudgets={setBudgets}
              />
            </table>
            <Pagination
              perPage={perPage}
              currentPage={currentPage}
              handleRowsPerPageChange={handleRowsPerPageChange}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <BudgetForm showAddForm={showAddForm} handleToggleForm={handleToggleForm} handleSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  );
};

export default Budget;

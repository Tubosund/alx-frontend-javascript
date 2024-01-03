import getBudgetObject from
 
'./7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  return {
    // Spread existing budget properties
    ...budget,
    // Method properties using concise arrow function syntax
    getIncomeInDollars: () => `$${income}`,
    getIncomeInEuros: () => `${income} euros`,
  };
}

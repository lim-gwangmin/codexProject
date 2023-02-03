import React from 'react';

const TodoContext = React.createContext(undefined);

function TodoProvider({ children, value }) {
   return (
      <TodoContext.Provider value={value}>
         {children}
      </TodoContext.Provider>
   );
};

function useTodoContext() {
   const context = React.useContext(TodoContext);

   if(context === undefined) {
      throw new Error('TodoContext는 TodoProvider안에서 사용하여야 합니다.')
   }

   return context;
};

export { TodoProvider, useTodoContext };
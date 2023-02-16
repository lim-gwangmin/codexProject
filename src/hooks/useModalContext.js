import React from 'react';

const ModalContext = React.createContext(undefined);

function ModalProvider({ children, value }) {
   return (
      <ModalContext.Provider value={value}>
         {children}
      </ModalContext.Provider>
   );
};

function useModalContext() {
   const context = React.useContext(ModalContext);

   if(context === undefined) {
      throw new Error('useModalContext는 ModalProvider안에서 사용하여야 합니다.')
   }
   
   return context;
};

export { ModalProvider, useModalContext };
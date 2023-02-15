function MainContainer({ children }) {
   return (
      <main id='main'>
         <div className='container'>
            { children }
         </div>
      </main>
   )
};

export default MainContainer;
function MainContainer({ children }) {
   console.log('reRender!')
   return (
      <main id='main'>
         <div className='container'>
            { children }
         </div>
      </main>
   )
};

export default MainContainer;
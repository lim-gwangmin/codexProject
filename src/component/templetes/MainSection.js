function MainSection({ id, children }) {
   return (
      <section className='section' id={id}>
         { children }
      </section>
   )
};

export default MainSection;
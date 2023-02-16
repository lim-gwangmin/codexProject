import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Calendar } from "component/atoms";
import { NoticeList } from "component/molecules";

function Section01(){
   return (
      <>
         <article className='calendar_wrapper'>
            <div className='colum_area'> 
               <Calendar/>
            </div>
         </article>
         <article className='notice_wrapper'>
            <div className='colum_area'>
               <div className='notice_header'>
                  <h2>공지사항</h2>
                  <a href='' className='btn_notice_table'>
                     <HiOutlineArrowSmRight className='HiOutlineArrowSmRight'/>
                  </a>
               </div>
               <NoticeList/>
            </div>
         </article>
      </>
   )
};

export default Section01;
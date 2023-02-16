import { pencil } from 'assets/imgModules/main/mainImgModule';

function Section02() {
   return (
      <>
         <article className='evrynSwork_wrapper'>
            <div className='colum_area'>
               <div className='evrynSwork_header'>
                  <h2>모두의 일</h2>
                  <button className='btn_evrynSwork_list'>
                     <img src={pencil}/>
                  </button>
               </div>
               <ul className='check_list'>
                  <li>
                     개인 쓰레기통 스스로 비우기
                     <span>
                        (금요일 필수!)
                     </span>
                  </li>
                  <li>
                     정수기,커피머신,싱크대 주변에 튄 물 닦기
                  </li>
                  <li>
                     마지막 퇴근 직원은 모든 문,에어컨,전등,노래 등 단속하기
                  </li>
               </ul>
            </div>
         </article>
         <article className='duty_wrapper'>
            <div className='colum_area'>
               <div className='duty_header'>
                  <h2>당번의 일</h2>
                  <button className='btn_duty_list'>
                     <img src={pencil}/>
                  </button>
               </div>
               <ul className='check_list col2'>
                  <li>
                     설거지하기, 싱크대 배수망 비우기
                  </li>
                  <li>
                     대표님,팀장님 쓰레기통 비우기
                     <span>
                        (금)
                     </span>
                  </li>
                  <li>
                     커피 머신, 정수기 물 받침대 설거지하기 
                     <span>
                        (수,금)
                     </span>
                  </li>
                  <li>
                     음료수 냉장고 우측 상단의 불 끄기
                     <span>
                        (금)
                     </span>
                  </li>
                  <li>
                     일반, 음식물 쓰레기, 분리수거 정리 및 분리배출
                     <span>
                        (금, 모두 다같이!)
                     </span>
                  </li>
               </ul>
            </div>
         </article>
      </>
   )
};

export default Section02;


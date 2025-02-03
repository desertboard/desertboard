import React, { Dispatch, SetStateAction, useState } from 'react'

const TypeSelection = ({activeTypes,setActiveType,activeType,isMobile}:{
    activeTypes:{ title: string; result: { title: string; image: string; }[]; }[]
    activeType:number,
    setActiveType:Dispatch<SetStateAction<number>>
    isMobile:boolean
    
}) => {

        const [dropDownOpen,setDropDownOpen] = useState(false)
        const [selectedValue,setSelectedValue] = useState(activeTypes[0].title)
    
        const handleSelection = (title:string,index:number) =>{
            setSelectedValue(title)
            setDropDownOpen(false)
            setActiveType(index)
        }

        // useEffect(()=>{
        //     if(selectedValue!="Select Type"){
        //         setTypeChanged(true)
        //     }
        // },[selectedValue,setTypeChanged])

  return (
    <>
        <div className='border-b-[2px] border-[#1515151A] pb-5'>
                            <h3 className='nuber-next-bold text-2xl'>Select Type<span className='text-orange'>.</span></h3>
                        </div>
                        {!isMobile && activeTypes.map((type,index)=>(
                            <div key={index} className='group cursor-pointer' onClick={()=>setActiveType(index)}>
                                <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica-bold`}>

                                    <h4 className={`${activeType == index ? "helvetica-bold" : "helvetica" }`}>{type.title}</h4>


                                    <div className="transition-all duration-300 group-hover:translate-x-1">
                                        <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke={`${activeType==index ? "#FF671F" : "#000000"}`} strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                    </div>


                                </div>
                            </div>
                        ))}

                        {isMobile &&
                                            <>
                                            <div className={` px-4 group border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica-bold cursor-pointer`} onClick={()=>setDropDownOpen((prev)=>!prev)}>
                        
                                                <h4>{selectedValue}</h4>
                        
                                                <div className="transition-all duration-300 group-hover:translate-y-1 rotate-90">
                                                    <svg width="14" height="14" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.99992 2L21.9999 17L6.99992 32M1.9939 7.00392L11.99 17L1.99389 26.996" stroke="#FF671F" strokeWidth="3" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                        
                                            </div>
                        
                                            {dropDownOpen && <div>
                                               {activeTypes.map((type,index)=>(
                                                    
                                                    <div className={`border-b-[2px] border-[#1515151A] flex justify-between py-6 helvetica pl-4 cursor-pointer hover:text-orange`} onClick={()=>handleSelection(type.title,index)} key={index}>
                        
                                                    <h4>{type.title}</h4>
                            
                                                    </div>
                                               
                                               ))}     
                                            </div>}
                                            
                                            </>
                            }
    </>
  )
}

export default TypeSelection
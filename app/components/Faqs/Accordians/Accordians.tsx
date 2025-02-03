import React, { useState } from 'react'
import ProductAccordians from './ProductAccordians'


const Accordians = () => {


    // const [activeAccordian, setActiveAccordian] = useState(0)

    // const toggleAccordion = (accordianNumber: number) => {
    //     setActiveAccordian(accordianNumber)
    //     console.log(accordianNumber)
    // }

    // useEffect(()=>{
    //     setActiveAccordian(1)
    // },[])

    const [addressBarIndex,setAddressBarIndex] = useState(0)

    const menu = [
      {
          title:"General",
          component:""
      },
      {
          title:"Product",
          component:<ProductAccordians/>
      },
      {
        title:"Glossary",
        component:""
    }
]

const ActiveAccordian = menu[addressBarIndex].component


  return (
    <div className='w-full'>
            <div className='border-b-2'>
                <ul className='flex  text-black text-lg'>
                    {menu.map((item,index)=>(
                        <div className={`${ addressBarIndex == index ? "border-b-2 border-orange" : ""} px-6 py-2 cursor-pointer nuber-next-heavy`} key={index} onClick={()=>setAddressBarIndex(index)}>
                            <li className='flex pb-2'>{item.title}</li>
                        </div>
                    ))}
                </ul>
            </div>

            {ActiveAccordian}

        </div>
  )
}

export default Accordians
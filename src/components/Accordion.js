import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(index)
        }
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        
        return(
            <div key={item.id}>
                
                <div onClick={() => handleClick(index)} className='flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer'>
                    {item.label}
                    <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft/>}</span>
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })

  return (
    <div>{renderedItems}</div>
  )
}

export default Accordion
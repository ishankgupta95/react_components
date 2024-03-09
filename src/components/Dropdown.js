import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef();

    useEffect(() => {
        if(!divEl.current){
            return
        }
        
        const handler = (event) => {
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div key={option.value} onClick={() => handleOptionClick(option)} className='hover:bg-sky-100 cursor-pointer p-1'>{option.label}</div>
    })
  
    return (
        <div className='w-48 relative' ref={divEl}>
            <Panel onClick={() => setIsOpen(current => !current)}className='flex justify-between items-center cursor-pointer '>{value ? value.label : 'Select...'}<GoChevronDown/></Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown
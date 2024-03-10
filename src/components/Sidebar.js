import Link from './Link'

function Sidebar() {
    const links = [
        {label: 'Dropdown', path:'/'},
        {label: 'Accordion', path:'/accordion'},
        {label: 'Buttons', path:'/buttons'}
    ]

    return(
        <div className='sticky top-0 overflow-y-scroll flex flex-col'>
            {links.map((link) => {
                return (<Link key={link.label} to={link.path}>{link.label}</Link>)
            })}
        </div>
    )
}

export default Sidebar
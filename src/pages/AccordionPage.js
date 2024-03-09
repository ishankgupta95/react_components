import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 1,
            label: 'Can I use React',
            content: 'yes'
        },
        {
            id: 2,
            label: 'Can I use JS',
            content: 'yes'
        },
        {
            id: 3,
            label: 'Can I use CSS',
            content: 'No'
        }
    ]    

    return (
        <Accordion items={items}/>
    );
}

export default AccordionPage;

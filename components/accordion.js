import AccordionItem from "components/accordion-item";


const accordionData = [
    {
        title: "Demo 1",
        desc: "Description 1",
    },
    {
        title: "Demo 2",
        desc: "Desc 2",
    },
    {
        title: "Demo 3",
        desc: "Desc 3",
    }


]


const [open, setOpen] = useState(false);

const toggle = (index) => {
    if (open === index) {
        return setOpen(null)
    }

    setOpen(index)
}

export default function Accordion() {
    return(
        <section className="h-screen grid place-items-center">
            <div className="px-[40px] max-w-[800]">

            {accordionData.map((data, index) => {
              return( 
                <AccordionItem 
                  key={index} 
                  open={index === open} 
                  title={data.title} 
                  desc={data.desc} 
                  toggle={() => toggle(index)}
                />
              );
            })}
            </div>
        </section>
    )
}
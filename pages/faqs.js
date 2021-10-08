import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

const BUTTON_STYLES = {
  appearance: "none",
  background: 0,
  border: 0,
  borderBottom: "1px solid #fff",
  boxShadow: "none",
  color: "inherit",
  display: "block",
  textAlign: "inherit",
  flexGrow: 1,
  flexShrink: 0,
  font: "inherit",
  fontWeight: 700,
  margin: 0,
  width: "100%",
  padding: "10px 0",
}
const FAQs = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-0">
      <div className="md:w-1/3">
        <h1 className="font-semibold text-7xl leading-tight">FAQs</h1>
      </div>
      <div className="md:w-2/3">
        <Accordion collapsible>
          <AccordionItem>
            <h3 className="text-2xl">
              <AccordionButton style={BUTTON_STYLES}>What is the dress code for your wedding?</AccordionButton>
            </h3>
            <AccordionPanel>
              This is New Year's Eve! Get out that little black dress, your favorite suit, a cute blazer with a silky dress. Dress to impress (yourself, we're already impressed with you!)
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3 className="text-2xl">
              <AccordionButton style={BUTTON_STYLES}>Are children welcome?</AccordionButton>
            </h3>
            <AccordionPanel>
              Absolutely not, although they're so cute and we love them. Take the night off, you deserve it.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h3 className="text-2xl">
              <AccordionButton style={BUTTON_STYLES}>Will there be vegan/vegetarian/gluten-free food options?</AccordionButton>
            </h3>
            <AccordionPanel>
              Absolutely
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3 className="text-2xl">
              <AccordionButton style={BUTTON_STYLES}>So...COVID?</AccordionButton>
            </h3>
            <AccordionPanel>
              Here are some detailed instructions about doing yet another thing.
              There are a lot of things someone might want to do, so I am only going
              to talk about doing that other thing. I'll let my fellow accordion
              items go into detail about even more things.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3 className="text-2xl">
              <AccordionButton style={BUTTON_STYLES}>Is there someone I can contact if I have any other questions about the wedding?</AccordionButton>
            </h3>
            <AccordionPanel>
              Sure thing, if you're invited to our wedding you know how to find us. Just hit us up with your questions, comments, concerns, or excitement!
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;

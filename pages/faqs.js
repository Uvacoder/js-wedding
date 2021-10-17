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
const FAQs = () => (
  <div className="md:py-10 mx-auto max-w-5xl">
    <div className="flex flex-col md:flex-row p-4 items-center md:p-0 md:mb-4 md:justify-evenly">
      <div className="md:w-1/5 md:mr-2">
        <h1 className="font-semibold text-5xl leading-tight">FAQs</h1>
      </div>
      <div className="md:w-3/5">
        <Accordion collapsible>
          <AccordionItem>
            <h3 className="text-lg">
              <AccordionButton style={BUTTON_STYLES}>What is the dress code for your wedding?</AccordionButton>
            </h3>
            <AccordionPanel>
              This is New Year's Eve! Get out that little black dress, your favorite suit, a cute blazer with a silky dress. Dress to impress (yourself, we're already impressed with you!)
              <br />
              <span className="font-medium my-2 inline-block">Feel free to <span className="text-gold">SPARKLE!!!</span></span>
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
              Absolutely.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h3 className="text-2xl">
              <AccordionButton style={BUTTON_STYLES}>So...COVID?</AccordionButton>
            </h3>
            <AccordionPanel>
              We ask that only our vaccinated friends and family attend, for the safety of all those we love (you!).
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
  </div>
)


export default FAQs;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordian";

export function FaqAccordian() {
  return (
    <>
      <div>
        <div className="text-3xl my-16 text-center font-bold  ">
          <h1>Frequently Asked Questions</h1>
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-[40vw] mx-auto items-start bg-white px-8  rounded-2xl text-sm"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How can I trust that I'll get paid for my work?
          </AccordionTrigger>
          <AccordionContent>
            The platform uses an escrow system where the buyer's payment is
            securely locked in a smart contract when the agreement is made. You
            will receive the payment once you fulfill your obligations, ensuring
            that funds are safely reserved for you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            What if I'm not satisfied with the contract terms?
          </AccordionTrigger>
          <AccordionContent>
            You have full control over which contracts you take. You can review
            the terms, payment, and conditions before accepting any contract,
            ensuring that you only work under agreements that suit your needs
            and capabilities.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How do I know the farmer will fulfill the contract?
          </AccordionTrigger>
          <AccordionContent>
            Farmers are only paid through the escrow system after they meet the
            contract terms. This ensures that you only release funds when the
            agreed conditions, like crop delivery or milestones, are completed,
            providing security for both parties.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What if the farmer doesn't deliver the agreed quality or quantity?
          </AccordionTrigger>
          <AccordionContent>
            The platform allows you to specify clear terms related to quality
            and quantity in the contract. If there's an issue, a decentralized
            dispute resolution system can step in to mediate and ensure a fair
            outcome for both sides.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can I manage contracts efficiently across multiple farmers?
          </AccordionTrigger>
          <AccordionContent>
            The platform provides a streamlined way to create, track, and manage
            contracts with multiple farmers. You'll be able to monitor progress,
            payments, and compliance through an easy-to-use interface, reducing
            administrative burdens.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            What if the buyer decides to cancel the contract midway?
          </AccordionTrigger>
          <AccordionContent>
            The contract terms should define the cancellation policy, which
            could include penalties or partial payments depending on how much
            work has been completed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

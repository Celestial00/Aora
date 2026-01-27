
import ContactForm from "../components/main/ContactForm";
import Typography from "../components/common/Typography";

export default function Contact() {
  return (
    <>
      <div className=" my-10 ">
        <div className="my-5">
          <Typography children={"Talk to us!"} variant="h1" />
          <Typography
            children={
              "Tell us all about your requirement we will deliver project beyond those"
            }
            variant="p"
          />
        </div>
        <ContactForm />
      </div>
    </>
  );
}

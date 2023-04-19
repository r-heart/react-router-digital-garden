import { TextInput, Textarea } from "../components/form";

export default function Contact() {
  return (
    <form>
      <h2>Contact Us</h2>
      <TextInput id="name" placeholder="Your Name" />
      <TextInput id="email" type="email" placeholder="✉️" />
      <Textarea id="message" placeholder="Go ahead with your message...👂🏾" />
      <button type="submit" className="btn">
        Send
      </button>
    </form>
  );
}

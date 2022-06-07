import { PageBuilder } from "../../components/pageBuilder/PageBuilder";
import './Contact.scss';

const ContactContent = () => {
  return (
    <section className="contact-content">
      <p className="uppercase bold contact-content__title">Name of your master</p>
      <p className="bold contact-content__name">Irina</p>
      <p className="uppercase bold contact-content__title">Phone number</p>
      <a href="tel:+375298997516" className="bold contact-content__phone">+375 29 899 75 16</ a>
      <p className="uppercase bold contact-content__title">Instagram</p>
      <a className="bi bi-instagram contact-content__instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer"> </a>
  </section>
  )
}

export const Contact = () => {
  return <PageBuilder main={<ContactContent />} />;
};

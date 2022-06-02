import { Header } from '../header/Header';
import { Message } from '../message/Message';
import './PageBuilder.css';

export const PageBuilder = ({ 
  header = <Header />, 
  sidebar = null, 
  main = null, 
  section = null,
}) => {
  return (
    <div className='page-builder'>   
      <div className='page-builder__header'>{header}</div>
      <aside className='page-builder__aside'>{sidebar}</aside>
      <main className='page-builder__main'>{main}</main>
      <section className='page-builder__section'>{section}</section>
      <Message />
    </div>
  );
};

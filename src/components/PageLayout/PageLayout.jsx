import { Dropdown } from "../Dropdown";
import { Products } from "../Products";

export const PageLayout = ({ title, itemsCount }) => {	
	return (
    <div className='PageLayout'>
      <div className='PageLayout__title-dropdown-container d-flex'>
        <h2 className='Page_Layout__title'>{`${title} / ${itemsCount}`}</h2>
        {title === 'Products' ? <Dropdown /> : ''}
      </div>

      <section className='PageLayout__list d-flex gap-2 flex-column'>
				{title === 'Products' ? <Products /> : ''}
      </section>
    </div>
  );
};


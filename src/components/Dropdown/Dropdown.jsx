import { useSelector, useDispatch } from 'react-redux';
import { select, openDropdown } from '../../features/productType/productTypeSlice';
import './Dropdown.scss';

export const Dropdown = () => {
  const dispatch = useDispatch();
	const selectedType = useSelector(state => state.productType.type);
	const dropdownOpened = useSelector(state => state.productType.opened);

  return (
    <div className='dropdown'>
      <div
        onClick={() => {
          dispatch(openDropdown());
        }}
        className={`dropdown__btn ${dropdownOpened ? 'dropdown__btn--up' : ''}`}
      >
        {selectedType}
      </div>
      <div className='dropdown__content' style={{ display: dropdownOpened ? 'block' : 'none' }}>
        <div
          onClick={(e) => {
            dispatch(select(e.target.textContent));
            dispatch(openDropdown());
          }}
          className='dropdown__item'
        >
          Monitors
        </div>
        <div
          className='dropdown__item'
          onClick={(e) => {
            dispatch(select(e.target.textContent));
            dispatch(openDropdown());
          }}
        >
          Phones
        </div>
        <div
          className='dropdown__item'
          onClick={(e) => {
            dispatch(select(e.target.textContent));
            dispatch(openDropdown());
          }}
        >
          Tablets
        </div>
      </div>
    </div>
  );
};

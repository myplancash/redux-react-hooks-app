import { useDispatch, useSelector } from 'react-redux';
import { changeCurrencyCode, getSupportedCurrencies } from '../store/rates';

export function CurrencyCodePicker({ currencyCode }) {

  const supportedCurrencies = useSelector(getSupportedCurrencies)
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(changeCurrencyCode(e.target.value))
  }

  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}

import { Link } from "react-router-dom";
import './serviceList.css';
import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";

const ServiceList = ({ serviceList, loading, error }) => {

  if (loading) return <Loader />
  return (
    <>
      {(error || serviceList.length === 0) && <Error message="Ошибка загрузки актуальных данных" />}
      {serviceList.length > 0 && <h2>Список услуг</h2>}
      <ul>
        {serviceList.map(({ id, name, price }) => (
          <li key={id}>
            <Link to={`/services/${id}/details`}>
              <span>{name || 'Название не указано'}</span>
              <span>{`${price || 0} рублей`}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default ServiceList;

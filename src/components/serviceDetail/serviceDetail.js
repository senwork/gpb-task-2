import Loader from "../../components/loader/loader";
import Error from "../../components/error/error";
import './serviceDetail.css';

const ServiceDetail = ({ serviceId, loading, error }) => {

    if (loading) return <Loader />
    if (error || !serviceId) return <Error message="Ошибка загрузки информации" />
    return (
        <>
            <h2>{serviceId.name}</h2>
            <div className="details">
                <span>{`Описание: ${serviceId.content}`}</span>
                <span>{`Цена: ${serviceId.price} рублей`}</span>
            </div>
        </>
    );
};

export default ServiceDetail;

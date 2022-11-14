import { useSelector } from "react-redux";
import ServiceList from "../../components/serviceList/serviceList";

const ServiceListPage = () => {
    const isLoading = useSelector(store => store.loader.isLoading);
    const serviceError = useSelector(store => store.errors.serviceError);
    const serviceList = useSelector(store => store.services.serviceList);

    return (
        <>
            <ServiceList serviceList={serviceList} loading={isLoading} error={serviceError} />
        </>
    );
};

export default ServiceListPage;





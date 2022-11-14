import { useSelector } from "react-redux";
import ServiceDetail from "../../components/serviceDetail/serviceDetail";

const ServiceDetailPage = () => {
    const isLoading = useSelector(store => store.loader.isLoading);
    const serviceError = useSelector(store => store.errors.serviceError);
    const serviceId = useSelector(store => store.services.serviceId);

    return (
        <>
            <ServiceDetail serviceId={serviceId} loading={isLoading} error={serviceError} />
        </>
    );
};

export default ServiceDetailPage;

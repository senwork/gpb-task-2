export const getServiceList = async () => {
  const res = await fetch(`http://localhost:7070/api/services`);
  return await res.json();
};

export const getServiceDetail = async id => {
  const res = await fetch(`http://localhost:7070/api/services/${id}`);
  return await res.json();
};


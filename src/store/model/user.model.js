// This would otherwise be initialised from an auth session
const initialModel = {
  id: "1234",
  firstName: "John",
  lastName: "Doe",
  staffType: "gp",
  staffTypeId: "1",
};

const companiesModel = {
  ...initialModel,
};

export default companiesModel;

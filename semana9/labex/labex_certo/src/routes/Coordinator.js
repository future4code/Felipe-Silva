 
export const goToLoginPage = (history) => {
    history.push("/login");
  };
  
  export const goToFormPage = (history) => {
    history.push("/trips/application");
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };

  export const goToNewTripPage = (history) => {
    history.push("/admin/trips/create");
  };

  export const goToTripDetailsPage = (history, id) => {
    history.push(`/admin/trips/${id}`)
};

  export const goToAdminPage = (history) => {
    history.push("/admin/trips/list");
  };

  export const goToListTripsPage = (history) => {
    history.push("/trips/list")
}
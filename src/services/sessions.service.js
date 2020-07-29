const API =
  "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions";

export default (() => ({
  fetchSessions: () =>
    fetch(API)
      .then((response) => response.json())
      .then((data) => data.data),
}))();

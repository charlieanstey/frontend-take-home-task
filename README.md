This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Running

In the project directory, run:

`yarn start`

### Implementation notes:

- Easy Peasy (Redux wrapper) used to centrally store data and nice API to work with
- Polyfilled fetch for compatibility with IE11+, as I suspect support might be required in real-world scenario
- Tailwind (full, unoptimised) used to quickly style for speed
- Moment to quickly simplify date-related maths and output formatting

### Things to Improve:

- Support shifts which breach between days, as currently these won't work correctly
- Integrate with an auth endpoint to enable Users to check for available sessions
- Use Formik & Yup to create form controls to filter the data dynamically
- Improve testing to cover all components, store models and services, including use of Cypress for integration and end-to-end tests
- Review use of Tailwind and Moment as their current use is a veritable sledgehammer to fix a nail, a condense version or smaller alternative would be better for production usage

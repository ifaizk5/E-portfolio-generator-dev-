
# E-Portfolio Generator

This is a Vite-based React application designed to allow users to generate their own e-portfolios. Users can input their personal information, projects, experience, education, and skills, and then export the generated portfolio as an HTML file.

## Features

- **Responsive Design**: The e-portfolio is responsive and works on both web and mobile devices.
- **Input Sections**: Includes form sections for basic info, projects, experience, education, and skills.
- **Export as HTML**: Once the form is filled out, users can export their portfolio as an HTML file.
- **LocalStorage Integration**: The app uses `localStorage` for data persistence.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/eportfolio-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd eportfolio-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Running the App

To start the development server, run:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Building the Project

To create a production-ready build, run:

```bash
npm run build
```

This will generate a `dist/` folder containing the optimized app ready for deployment.

## Deployment

You can deploy the app using any static hosting service such as [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or others. The build process ensures that everything is optimized for performance.

To deploy with Netlify, follow these steps:
1. Push the code to your GitHub repository.
2. Sign up/log into [Netlify](https://www.netlify.com/).
3. Create a new site from Git, linking your GitHub repository.
4. Netlify will automatically build and deploy the app.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License.

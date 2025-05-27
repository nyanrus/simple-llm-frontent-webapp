# LLM Frontend

This project is a simple and lightweight frontend application built with Solid.js and Tailwind CSS, designed to interact with the Gemini API.

## Features

- **Chat Interface**: A user-friendly chat box for sending and receiving messages.
- **Gemini API Integration**: Communicates with the Gemini API to fetch responses based on user input.
- **Responsive Design**: Utilizes Tailwind CSS for a modern and responsive UI.

## Project Structure

```
llm-frontend
├── src
│   ├── App.tsx          # Main application component
│   ├── components
│   │   └── ChatBox.tsx  # Chat box component for user interaction
│   ├── api
│   │   └── gemini.ts    # Functions for Gemini API communication
│   └── index.tsx        # Entry point of the application
├── public
│   └── index.html       # HTML template for the application
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/llm-frontend.git
   cd llm-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
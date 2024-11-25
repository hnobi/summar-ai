  # Rewrite AI

Rewrite AI is a Next.js-based application that helps users rewrite sentences with customizable tones. The project provides features like history tracking, explanation for improvements, and options for downloading and managing rewritten sentences.


## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 18.x)
- npm (>= 8.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
 ```bash
   git clone https://github.com/hnobi/summar-ai.git
   cd summar-ai
  
```

2. Create a .env file in the root directory and add this:
``` 
OPENAI_API_KEY= 
```

3. Start the development server:
``` 
npm run dev

# or

yarn dev
````

4. Open your browser and navigate to:
```
http://localhost:3000

```

arduino
Copy code

---




## Features

### Sentence Rewriting
- Specify the tone for rewritten sentences (e.g., formal, casual, persuasive).
- Utilize advanced AI models to rewrite user-provided text.

### Rewrite History
- Display a list of past rewritten sentences.
- Allow users to:
  - Delete individual entries from the history.
  - Download the history as a `.txt` file.
- Automatically save the history in the browser's local storage.

### Explain Button
- Each rewritten sentence includes an "Explain" button that provides an explanation of how the rewritten version improves the original.

---

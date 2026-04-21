export interface Project {
  num: string
  name: string
  description: string
  tags: string[]
  href?: string
  longDescription?: string
  image?: string
  sourceHref?: string
}

// Project Example
// {
//     num: '01',
//     name: 'AI Intake Interface',
//     description: 'Replaced a complex multi-field form with a natural language interface...',
//     longDescription: 'Longer description you want shown in the modal. Can be a sentence or two more detail than the card.',
//     tags: ['TypeScript', 'OpenAI', 'React'],
//     href: 'https://yourproject.com',
//     sourceHref: 'https://github.com/yourname/project',
//     image: '/images/ai-intake.png', // optional, drop images in /public/images/
//   }

export const projects: Project[] = [
  {
    num: '01',
    name: 'Smart Racer (C# / Neural Networks)',
    description:
      'A complete neural network racing system built from the ground up, including vehicle controllers, training infrastructure, and evolutionary track optimization for lap time reduction.',
    longDescription:
      'A complete neural network racing system built from the ground up, including vehicle controllers, training infrastructure, and evolutionary track optimization for lap time reduction.\n\nThe project encompasses a full training pipeline with benchmark analysis, and includes support for multiple tracks with performance optimization.\n\nFor detailed breakdowns on project setup, training process, and benchmark analysis, please check the source code\'s README.md.',
    tags: ['C#', 'ML'],
    sourceHref: 'https://github.com/xr-alex/smart-racer',
    image: 'images/smartracer.jpg'
  },
  {
    num: '02',
    name: 'TicTacToe (React)',
    description:
      'A simple TicTacToe game app made in React, with React Components and dynamic css styles.',
    tags: ['React'],
    href: 'https://xr-alex.github.io/react-tictactoe/',
    sourceHref: 'https://github.com/xr-alex/react-tictactoe',
    image: 'images/tictactoe.jpg'
  },
  {
    num: '03',
    name: 'To-do List (Angular)',
    description:
      'A simple To-Do list Angular app, with Reactive Forms and two-way binding.',
    tags: ['Angular'],
    href: 'https://xr-alex.github.io/angular-todo/',
    sourceHref: 'https://github.com/xr-alex/angular-todo',
    image: 'images/todo.jpg'
  },
  {
    num: '04',
    name: 'Minesweeper (Python)',
    description:
      'A Minesweeper clone made entirely in Python, with custom board options and sound effects.',
    tags: ['Python'],
    sourceHref: 'https://github.com/xr-alex/python-minesweeper',
    image: 'images/minesweeper.jpg'
  },
]

export const stack: string[] = [
  'TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Vite', 'Node.js',
  'C# / .NET', 'Java', 'Python', 'MySQL', 'PostgreSQL', 'AWS', 'OpenAI API', 'Docker',
]

# Content Uploader App

## Features

- Send text messages
- Upload and attach multiple images
- Drag and drop image upload support
- Select and manage multiple items
- Export functionality for sent items
- Real-time timestamp for messages
- Responsive design

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **UI Library**: Material-UI (MUI)
- **Build Tool**: Vite
- **State Management**: React useState hooks
- **Styling**: MUI's styled components and sx props

## Project Structure

src/
├── app/
│ ├── components/
│ │ ├── UploaderBar.tsx # Input bar with text and file upload
│ │ └── SentItemComponent.tsx # Individual message display
│ ├── types.ts # TypeScript interfaces
│ ├── theme.ts # MUI theme configuration
│ └── Page.tsx # Main page layout
├── App.tsx # Root component
└── main.tsx # Entry point

## Key Components

### UploaderBar

- Handles text input and file uploads
- Supports drag and drop
- Manages file preview
- Input validation

### SentItemComponent

- Displays sent messages and attachments
- Handles item selection
- Shows timestamp
- Provides export and delete actions

### Page

- Manages layout and component composition
- Handles item updates and selections
- Renders empty state message

## State Management

The app uses React's useState hook to manage:

- Sent items array
- File attachments
- Selection state
- Text input

## Data Flow

1. User inputs text/uploads images via UploaderBar
2. App component maintains the main state
3. Items are displayed through SentItemComponent
4. Actions (delete/export) are handled at the App level

# Chex's Modal Library 👀

It is a library that can use the modal that comes up from below.
You can close the modal on background click.

## Installation

### npm

```
npm install react-chex-modal
```

### yarn

```
yarn add react-chex-modal
```

## Props

### isModalOpen

A status value of type boolean indicating whether the modal is open or closed.

### closeModal

- A custom function that closes the modal.
- Should contain the logic to change `isModalOpen` to `false`.

## User Guide

### Import Library

```tsx
import ChexModal from 'react-chex-modal';
```

### Use Library

```tsx
<ChexModal isModalOpen={/* Modal State */} closeModal={/* Close Modal Function */}>
  {/* Modal Contents(ReactNode) */}
</ChexModal>
```

### Example

<img src="https://user-images.githubusercontent.com/24777828/236252725-d9b371e1-539b-4ab5-b9cd-59a717d594ef.gif" width="400px" alt="ChexModal 실행화면">

```tsx
import ChexModal from 'react-chex-modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <ChexModal isModalOpen={isModalOpen} closeModal={closeModal}>
        <div>
          Hi there, I'm a modal that you can open and close. Now you can close me by clicking on the
          close button on my window.
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </ChexModal>
    </>
  );
}

export default App;
```

## Development Environment

- `React(create-react-app)`
- `TypeScript`
- `styled-components`

## Browser Support

<table>
  <tr>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="Chrome icon" />
    </td>
    <td align="center" width="150px">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/2057px-Safari_browser_logo.svg.png" alt="Safari icon" />
    </td>
  </tr>
  <tr>
    <td align="center">
      Latest ✓
    </td>
    <td align="center">
      Latest ✓
    </td>
  </tr>
</table>

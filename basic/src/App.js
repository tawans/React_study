import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const list = ['사과', '바나나', '포도', '귤'];
  return (
    <>
      <h1 className='orange'>Hello!</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '300px', height: '200px' }}
        src='https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
      />
    </>
  );
}

export default App;

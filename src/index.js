import ReactDOM from 'react-dom';
// c подключеникм импорта Реакт
// const el = React.createElement('div', { a: 5, b: 6, children: 'Привет Реакт' });

const jsxEl1 = <span>Привет</span>;
const jsxEl2 = <p>Мир</p>;

const jsxEl = (
  <div>
    {jsxEl1}
    {jsxEl2}
  </div>
);

ReactDOM.render(jsxEl, document.querySelector('#root'));
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

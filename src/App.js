import './App.css';
import Mahasiswa from './components/Mahasiswa';
import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [showScore, setShowScore] = useState(false);
  const [form, setForm] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 1,
      mahasiswa_2: 1,
      mahasiswa_3: 1,
      mahasiswa_4: 1,
      mahasiswa_5: 1,
      mahasiswa_6: 1,
      mahasiswa_7: 1,
      mahasiswa_8: 1,
      mahasiswa_9: 1,
      mahasiswa_10: 1,
    },
  });

  const onchangeHandler = (e, index) => {
    const { name, value } = e.target;
    const list = form;
    list[name][index] = parseInt(value);
    console.log(list);
    setForm(list);
  }

  const onSave = () => {
    setForm(form);
    setShowScore(true);
  }

  return (
    <>
    <div className="form">
      <Header></Header>
      <Mahasiswa index="mahasiswa_1" onChange={onchangeHandler}>Mahasiswa 1</Mahasiswa>
      <Mahasiswa index="mahasiswa_2" onChange={onchangeHandler}>Mahasiswa 2</Mahasiswa>
      <Mahasiswa index="mahasiswa_3" onChange={onchangeHandler}>Mahasiswa 3</Mahasiswa>
      <Mahasiswa index="mahasiswa_4" onChange={onchangeHandler}>Mahasiswa 4</Mahasiswa>
      <Mahasiswa index="mahasiswa_5" onChange={onchangeHandler}>Mahasiswa 5</Mahasiswa>
      <Mahasiswa index="mahasiswa_6" onChange={onchangeHandler}>Mahasiswa 6</Mahasiswa>
      <Mahasiswa index="mahasiswa_7" onChange={onchangeHandler}>Mahasiswa 7</Mahasiswa>
      <Mahasiswa index="mahasiswa_8" onChange={onchangeHandler}>Mahasiswa 8</Mahasiswa>
      <Mahasiswa index="mahasiswa_9" onChange={onchangeHandler}>Mahasiswa 9</Mahasiswa>
      <Mahasiswa index="mahasiswa_10" onChange={onchangeHandler}>Mahasiswa 10</Mahasiswa>
      <Button type="submit" onClick={onSave}>Simpan</Button>
    </div>
    <div className='form'>
      <pre>{showScore && JSON.stringify(form, null, 2)}</pre>
    </div>
    </>
  );
}

export default App;

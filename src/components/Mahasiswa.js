import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Mahasiswa = ({index, onChange, children}) => {
  return (
    <div className='row'>
        <div className='data-wrapper'>
            <div className='photo'>
            <FontAwesomeIcon icon={faUser} style={{color: "#b1b4b9"}} />
            </div>
            <div className='name'>
                {children}
            </div>
        </div>
        <div className='aspeks-wrapper'>
          <div className='aspek'>
            <select name='aspek_penilaian_1' onChange={(e) => onChange(e, index)}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
          </div>
          <div className='aspek'>
          <select name='aspek_penilaian_2' onChange={(e) => onChange(e, index)}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
          </div>
          <div className='aspek'>
          <select name='aspek_penilaian_3' onChange={(e) => onChange(e, index)}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
          </div>
          <div className='aspek'>
          <select name='aspek_penilaian_4' onChange={(e) => onChange(e, index)}>
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
  )
}

export default Mahasiswa
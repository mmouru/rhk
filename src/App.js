import React, { useState, useEffect, Fragment } from 'react'
import './App.css';
import axios from 'axios'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from 'react-bootstrap' 
import rhk from './rhk.png'
import members from './members.gif'
import serebryanka from './sere0.png'


function App() {
  const [matches, setMatches] = useState([])

  const pelaajat = ["penaa", "mazze", "raksuu", "nykzi", "kallu", "tuomasK (trilu)"]

  const [kuva, setKuva] = useState(serebryanka)

  const [number, setNumber] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://aq2rhk.herokuapp.com")
      setMatches(response.data)
      console.log(response.data)
      
    }
    fetchData();
  }, []);

  const totalWins = (mathces) => {
    let voitot = 0
    matches.forEach(match => {
      const score = match.tilanne.split("-")
        voitot += parseInt(score[0])
    })
    return voitot
  }

  const totalLoses = (mathces) => {
    let häviöt = 0
    matches.forEach(match => {
      const score = match.tilanne.split("-")
        häviöt += parseInt(score[1])
    })
    return häviöt
  }
  
  const getColor = (tilanne) => {
    const score = tilanne.split("-")

    if(score[0] === score[1]){
      return ("yellow")
    }
    else if ( score[0] > score[1]){
      return ("green")
    }
    else { return ("red")}
  }

  const winPercent = (matsit) => {
    let wins = 0
    matsit.forEach(matsi => {
      const score = matsi.tilanne.split("-")
      if ( score[0] > score[1]){
        wins++
      }
    })
    const percentage = (wins / matsit.length * 100).toFixed(3)
    return `${percentage}`
  }
  
  return (
    <div>
    <Container fluid style={{backgroundColor: "black"}}>
      <Row>
       <Col style={{marginLeft: 100, textAlign: "center"}}>
       <p className="html-rainbow-text">
       <h1 className="rainbow">clanwars: {matches.length}</h1>
       </p>
       <p style={{color: "white"}}>
         total rounds <span style={{color: "green"}}>{totalWins()}</span> - <span style={{color: "red"}}>{totalLoses()}</span>
       </p>
       <h3 style={{color: "green", textAlign: "center"}} colSpan={1}>
       <b>win %: &nbsp;{winPercent(matches)} </b>
       </h3>
          <Table className="matsitTable" style={{textAlign: "center"}}>
            <thead>
              <tr style={{color: "white"}}>
                <th style={{borderTop: 0, borderColor: "black"}}>#</th>
                <th style={{borderTop: 0, borderColor: "black"}}>style</th>
                <th style={{borderTop: 0, borderColor: "black"}}>tag</th>
                <th style={{borderTop: 0, borderColor: "black"}}>score</th>
                <th style={{borderTop: 0, borderColor: "black"}}>date</th>
              </tr>
              </thead>
              <tbody>
                {matches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((match, i) => 
                    <tr key={i} style={{color: "white"}}>
                      <td style={{borderColor: "black"}}>
                        {matches.length - i}
                      </td>
                      <td style={{borderColor: "black"}}>
                        {match.style}
                      </td>
                      <td style={{borderColor: "black"}}>
                        {match.opponent}
                      </td>
                      <td style={{borderColor: "black", color: getColor(match.tilanne)}}>
                        {match.tilanne}
                      </td>
                      <td style={{borderColor: "black"}}>
                        {`${(new Date(match.date)).getDate()}.${(new Date(match.date)).getMonth() + 1}.${(new Date(match.date)).getFullYear()}`}
                      </td>
                    </tr>
                  )}
              </tbody>
          </Table>
       </Col>
       <Col style={{textAlign: "center"}}><div><img src={rhk}></img></div>
       <div id="picturediv">
         <div className="image-container" style={{marginTop: 30}}>
          <img src={members}/>
          </div>
                  <table id="pelaajattable" style={{width: "100%", marginTop: 30, color: "white"}}>
                    <tbody style={{width: "100%"}}>
                      {pelaajat.map((pelaaja, i) => 
                          <tr key={i} style={{textAlign: "center", verticalAlign: "middle", width: "100%", marginTop: "10px"}}>
                            <td style={{textAlign: "center", verticalAlign: "middle", width: "100%"}}>
                              {pelaaja}
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
         </div>
         <div id="stage" style={{marginTop:60}}><img id="spinner" src={serebryanka}></img></div></Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;

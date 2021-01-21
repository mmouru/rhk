import React, { useState, useEffect, Fragment } from 'react'
import './App.css';
import axios from 'axios'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from 'react-bootstrap'
import serebryanka from './sere.png'
import rhk from './rhk.png'
import members from './members.gif'

function App() {
  const [matches, setMatches] = useState([])

  const pelaajat = ["penaa", "mazze", "raksuu", "nykzi", "kallu", "tuomasK"]

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://aq2rhk.herokuapp.com")
      setMatches(response.data)
      console.log(response.data)
      
    }
    fetchData();
  }, []);
  
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
       <Col style={{marginLeft: 100}}>
       <p className="html-rainbow-text" style={{textAlign: "center"}}>
       <h1 className="rainbow">total matches: {matches.length}</h1>
       </p>
       <h3 style={{color: "green", textAlign: "center"}} colSpan={1}>
       <b>win %: &nbsp;{winPercent(matches)} </b>
       </h3>
          <Table style={{textAlign: "center"}}>
            <thead>
              <tr style={{color: "white"}}>
                <th style={{borderTop: 0, borderBottom: 0}}>#</th>
                <th style={{borderTop: 0, borderBottom: 0}}>style</th>
                <th style={{borderTop: 0, borderBottom: 0}}>opponent</th>
                <th style={{borderTop: 0, borderBottom: 0}}>score</th>
                <th style={{borderTop: 0, borderBottom: 0}}>date</th>
              </tr>
              </thead>
              <tbody>
                {matches.map((match, i) => 
                    <tr key={i} style={{color: getColor(match.tilanne)}}>
                      <td style={{borderTop: 0}}>
                        {i + 1}
                      </td>
                      <td style={{borderTop: 0}}>
                        {match.style}
                      </td>
                      <td style={{borderTop: 0}}>
                        {match.opponent}
                      </td>
                      <td style={{borderTop: 0}}>
                        {match.tilanne}
                      </td>
                      <td style={{borderTop: 0}}>
                        {`${(new Date(match.date)).getDate()}/${(new Date(match.date)).getMonth() + 1}/${(new Date(match.date)).getFullYear()}`}
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

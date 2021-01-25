import React, { useState, useEffect } from 'react'
import './App.scss';
import axios from 'axios'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Table } from 'react-bootstrap' 
import rhk from './rhk1.png'
import rhk2 from './rhk3.png'
import members from './members.gif'
import hof from './hof.gif'
import serebryanka from './sere0.png'
import serebryanka1 from './sere1.png'
import serebryanka2 from './sere3.png'
import serebryanka3 from './rhk4.png'


function App() {
  const [matches, setMatches] = useState([])

  const pelaajat = ["penaa", "mazze", "raksuu", "nykzi", "kallu", "tuomasK"]

  const kuvat = []

  kuvat[0] = serebryanka
  kuvat[1] = serebryanka1
  kuvat[2] = serebryanka2
  kuvat[3] = serebryanka3

  const [kuva, setKuva] = useState(serebryanka)

  const [seconds, setSeconds] = useState(1);

  const [number, setNumber] = useState(1500)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://aq2rhk.herokuapp.com")
      setMatches(response.data)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 3000);
    return () => clearInterval(interval);
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

  const determinateHomeland = (vastustaja) => {
    if (vastustaja === "los."){
      return "nl"
    }
    else if (vastustaja === "eC *" || vastustaja === "(t)"){
    return "se"
    }
    else { return "fi" }
  }

 const kuvaKaruselli = (seconds) => {
   const numero = Math.floor(Math.random() * 3)
   return kuvat[numero]
 }
  
  return (
    <div style={{backgroundColor : "black"}}>
      
    <Container fluid className="kuvakki">
      <Row style={{paddingTop: 20, paddingBottom: 20}}>
       <Col style={{marginLeft: 300, textAlign: "center", paddingRight: 0}}>

          <h1 style={{color: "white"}}>Clanwars - {matches.length}</h1>
       
       <p style={{color: "white"}}>
         total rounds <span style={{color: "green"}}>{totalWins()}</span> - <span style={{color: "red"}}>{totalLoses()}</span>
       </p>
       <h3 style={{color: "green", textAlign: "center"}} colSpan={1}>
       <b>win %: &nbsp;{winPercent(matches)}</b>
       </h3>
          <Table className="center" style={{textAlign: "center", width: 500}}>
            <thead>
              <tr style={{color: "white"}}>
                <th style={{borderTop: 0, borderColor: "black", width: 50}}>#</th>
                <th style={{borderTop: 0, borderColor: "black", width: 80}}>style</th>
                <th style={{borderTop: 0, borderColor: "black", width: 20}}></th>
                <th style={{borderTop: 0, borderColor: "black", width: 80, paddingLeft: 0}}>tag</th>
                <th style={{borderTop: 0, borderColor: "black", width: 50}}>score</th>
                <th style={{borderTop: 0, borderColor: "black", width: 150}}>date</th>
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
                      <td style={{borderColor: "black", paddingRight: 0}}>
                        <img src={`https://www.countryflags.io/${determinateHomeland(match.opponent)}/shiny/64.png`} style={{width:20, height: 20}}/>
                      </td>
                      <td style={{borderColor: "black", paddingLeft: 0, width:70}}>
                        {match.opponent}
                      </td>
                      <td style={{borderColor: "black", color: getColor(match.tilanne)}}>
                        {match.tilanne}
                      </td>
                      <td style={{borderColor: "black", width: "150"}}>
                        {`${(new Date(match.date)).getDate()}.${(new Date(match.date)).getMonth() + 1}.${(new Date(match.date)).getFullYear()}`}
                      </td>
                    </tr>
                  )}
              </tbody>
          </Table>
       </Col>
       <Col style={{textAlign: "center", marginRight: 300}}><div><a href="https://discord.gg/vPxH6rHU"><img src={rhk2}></img></a></div>
       <div id="picturediv">
         <div className="image-container" style={{marginTop: 30}}>
          <img src={members}/>
          </div>
                  <table id="pelaajattable" style={{width: "100%", marginTop: 30, color: "white"}}>
                    <tbody style={{width: "100%"}}>
                      {pelaajat.map((pelaaja, i) => 
                          <tr key={i} style={{textAlign: "center", verticalAlign: "middle", width: "100%", marginTop: "10px"}}>
                            <td  className="shadow2" style={{textAlign: "center", verticalAlign: "middle", width: "100%"}}>
                              {pelaaja}
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
         </div>
         <img src={hof} style={{marginTop: 30}}/>
         <div>
           <table id="pelaajattable" style={{width: "100%", marginTop: 30, color: "white"}}>
             <tr style={{textAlign: "center", verticalAlign: "middle", width: "100%", marginTop: "10px"}}>
               <td className="shadow2">
                 janneP
               </td>
             </tr>
             <tr>
             <td className="shadow2">
                 Punisher
               </td>
             </tr>
           </table>
         </div>
         <div id="stage" style={{marginTop:60}}><img id="spinner" src={kuvaKaruselli(seconds)}></img></div></Col>
    </Row>
    </Container>
    </div>
  );
}

export default App;

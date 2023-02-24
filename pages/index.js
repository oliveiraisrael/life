import { IoIosSquareOutline, IoIosSquare } from 'react-icons/io'
import { BsSquare,BsSlashSquare , BsFillExclamationCircleFill } from 'react-icons/bs'
import { GiFruitTree } from 'react-icons/gi'
import { HiInformationCircle } from 'react-icons/hi'
import styles from "./Home.module.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import React from "react";
import { Row, Col } from "reactstrap";
import 'nextra-theme-docs';
import { ResponsiveContainer, LineChart, CartesianGrid } from 'recharts'
import Popup from 'reactjs-popup'
import Head from 'next/head'

function Example() {
  let iconStyles = { color: "black", fontSize: ".75em", background:"#89cff0", opacity: ".9"};
  let menor = { color: "black", fontSize: ".55em", background:"#89cff0", opacity: ".9"};
  let ifg = { color: "black", fontSize: ".75em", background:"#FA8072", opacity: ".9"};
  let unb = { color: "black", fontSize: ".75em", background:"#98FB98", opacity: ".9"};
  let anozero = { color: "black", fontSize: ".75em", opacity: "0"};
  let futuro  = { color: "black", fontSize: ".75em", background:"gray", opacity: ".5"};
  let iconStylesdata = { color: "black", fontSize: ".75em", background:"#89cff0", opacity: ".9"};
  let ifgdata = { color: "black", fontSize: ".75em", background:"#FA8072", opacity: ".9"};
  let unbdata = { color: "black", fontSize: ".75em", background:"#98FB98", opacity: ".9"};
  let futurodata  = { color: "black", fontSize: ".75em", background:"gray", opacity: ".5"};
  return (
    <>
  <Head><title>LBLS LIFE</title></Head>
  <div className={styles.widget}>
  <div className={styles.content}>
  <div className={styles.formacao}><div className={styles.veticalalign}>Técnico em Automação Industrial</div></div>
  <div className={styles.formacaodois}><div className={styles.veticalalign}>Bacharel em Engenharia Florestal</div></div>
  <div className={styles.quadrado}><div className={styles.veticalalign}>Cada □ representa uma semana</div></div>
  </div>
  </div>
  <div className={styles.widget}>
  <div className={styles.content}>
  <ResponsiveContainer fluid className={styles.container} width="100%" height={300} aspect={0} >
    <Row  className="justify-content-left">
    <Col xs="auto"><div className={styles.informacoes}><div id="overlay" className={styles.overlay}> 
    <Popup
    trigger={<button><HiInformationCircle/></button>}
    modal
    nested
  >
    {close => (
      <div className={styles.modalcontainer}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
          &times;
        </button>
       
        <div className={styles.contentpopup}>
          {' '}
          <div className={styles.paragraphdois}><GiFruitTree/></div>
          Olá, sou Israel Silva e criei este site, <b>SOUSA com S</b>, para comemoração do aniversário 
          de 22 anos da Laura, inspirado no site <b>LIFE</b> do <a class={styles.link} href="https://fserb.com/">Fernando Serboncini</a>.          
        </div>
      </div>
      </div>
    )}
  </Popup>
    </div> 
    </div>
    </Col>
    </Row>
   </ResponsiveContainer>
  </div>
  </div>  
  <div className={styles.widget}>
  <div className={styles.content}>
  <ResponsiveContainer fluid className={styles.container} width="100%" height={300} aspect={0} >
    <Row  className="justify-content-left">
    <Col xs="auto"><div className={styles.logo}> <GiFruitTree/> </div></Col>
    <Col xs="auto"><div className={styles.titulo}> SOUSA com S</div></Col>
    </Row>
   </ResponsiveContainer>
   <ResponsiveContainer fluid className={styles.container} width="100%"  aspect={0} >
    <Row  className="justify-content-left row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.subtitulo}><b>LIFE</b></div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%"  aspect={0} >
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.assinatura}>feito por Israel Silva</div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%"  aspect={0} >
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.testiculo}>"Dedicado aos 22 da Laura"</div></Col>
    </Row>
   </ResponsiveContainer> 
  <ResponsiveContainer fluid className={styles.container} width="100%" aspect={0} >
    <Row  className="justify-content-left row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.nascimento}>27 de Fevereiro, 2001</div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%" aspect={0} >
    <Row  className="justify-content-left row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.cinco}>2005</div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%" aspect={0} >
    <Row  className="justify-content-right row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.dez}>2010</div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%" aspect={0} >
    <Row  className="justify-content-right row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.quinze}>2015</div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%" aspect={0} >
    <Row  className="justify-content-right row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.vinte}>2020</div></Col>
    </Row>
   </ResponsiveContainer> 
   <ResponsiveContainer fluid className={styles.container} width="100%" aspect={0} >
    <Row  className="justify-content-right row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto"><div className={styles.vintecinco}>2025</div></Col>
    </Row>
   </ResponsiveContainer> 
    <ResponsiveContainer className={styles.container} width="100%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
              <BsSquare style={anozero}/>
          </span>
          </Col>
          <Col xs="auto">
          <span><IoIosSquareOutline style={anozero}/></span>
          </Col>
          <Col xs="auto">
            <span>
              <IoIosSquareOutline style={anozero}/>
          </span>
          </Col>
          <Col xs="auto">
          <span><IoIosSquareOutline style={anozero}/></span>
          </Col>
          <Col xs="auto">
            <span>
              <IoIosSquareOutline style={anozero}/>
          </span>
          </Col>
          <Col xs="auto">
          <span><IoIosSquareOutline style={anozero}/></span>
          </Col>
          <Col xs="auto">
            <span>
              <IoIosSquareOutline style={anozero}/>
          </span>
          </Col>
          <Col xs="auto">
          <span><IoIosSquareOutline style={anozero}/></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled"> 27 de Fevereiro de 2001, dia do meu nascimento</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={iconStyles}/>
            <div className={styles.preto}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Nascimento da minha irmã, Lara</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={iconStyles}/>
            <div className={styles.preto}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Conheci o Toddy, cachorrinho da família</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={iconStylesdata}/>
            <div className={styles.amarelo}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={iconStyles}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={iconStyles}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Conheci o Israel</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={ifgdata}/>
            <div className={styles.amarelo}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Idade que minha mãe tinha quando nasci</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={ifgdata}/>
            <div className={styles.vermelho}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Conheci o Alfalfa, minha chinhcilla</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={ifg}/>
            <div className={styles.amarelo}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Conheci o Murphy, cachorrinho do meu namorado</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={ifgdata}/>
            <div className={styles.amarelo}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={ifg}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={ifg}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Primeira vez morando sozinha</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={unbdata}/>
            <div className={styles.vermelho}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Conheci a Amora, cachorrinha da família</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={unbdata}/>
            <div className={styles.amarelo}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Nascimento do meu irmão, João</Tooltip>}>
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
            <IoIosSquareOutline style={unbdata}/>
            <div className={styles.preto}></div>
            </div>
          </div>
          </span>
          </OverlayTrigger>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={unb}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={unb}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
      <ResponsiveContainer className={styles.container} width="100%" minHeight="0%" aspect={10}>
    <Row  className="justify-content-center row-cols-0 row-cols-lg-0 g-0 g-lg-0">
    <Col xs="auto">
          <span >
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
          <Col xs="auto">
          <span><div className={`${styles.collection} card`}>
          <div id="overlay" className={styles.overlay}><IoIosSquareOutline style={futuro}/></div>
          </div></span>
          </Col>
          <Col xs="auto">
            <span>
          <div className={`${styles.collection} card`}>
            <div id="overlay" className={styles.overlay}>
              <IoIosSquareOutline style={futuro}/>
            </div>
          </div>
          </span>
          </Col>
        </Row>
      </ResponsiveContainer>
  </div>
</div>



    </>
  );
}

export default Example;
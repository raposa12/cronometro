import React, { Component } from "react";
import './style.css'

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'VAI'
        };
        this.timer = null;/*pra armazenar os valores dos estados dos botoes vai e limpar*/

        /*Argumentos*/
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }


    //Botao para iciar e pausar a contagem
    vai(){
        let state = this.state;

        //pra parar a contagem
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'VAI';

          //pra iniciar a contagem  
        }else{
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            },100);
            state.botao = 'PAUSAR';
        }
        this.setState(state)
    }

    //Botao pra limpar a contagem do cronometro
    limpar(){

        //parar 
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }


        //quando parar ele mostra o bota VAI
        let state = this.state;
        state.numero = 0;
        state.botao = 'VAI';
        this.setState(state)
    }


    //Passando Classes para serem estilzados 
    //Inserindo botão e os valores de eventos a serem chamados
    //Inserindo imagem
    render(){
        return(
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.vai}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>LIMPAR</a>
                </div>
            </div>
        );
    }
}

export default App;
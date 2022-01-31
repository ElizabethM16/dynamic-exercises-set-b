var c_template = document.createElement("template"); //<template></tempalte>
c_tmeplate.innerHTML = `
  <style> 
     #counter{
            background-color: #dad;
            display: flex; 
        }

        #counter > button{
            width: 30px;
            height: 30px;
            background-color: #add;
            border: none;
            border-radius: 5px;
            margin: 5px;
        }

        #counter div{
            flex: 1;
            display:flex;
            justify-content:center;
            align-items: center;
        }

        #bar{
            width: 0px;
            height: 15px;
            background-color: #bad;

        }

  </style>

    <div id="counter">
      <button>-</button>
      <div>1</div>
     <button>+</button>
    </div>
    
    <div id="bar"></div>

`;

class TheCounter extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode:"open"});
    }


    connectedCallback(){
        this.shadowRoot.appendChild(c_template.content.cloneNode(true))
    }

}

customElements.define("the-counter" , TheCounter);
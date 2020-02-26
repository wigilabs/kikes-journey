import React from "react";
import logo from "./logo.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      c1rw1: 100,
      c1rw2: 80,
      c1rw3: 60,
      c1rw4: 50,
      c1total: 100,
      min: "20",
      max: "1000",
      // prodTime: "500000"
      prodTime: "5000"
    };
  }

  Clock(a, b, c, d) {
    let min = 1,
      max = 5;
    let time = Math.floor(Math.random() * (max - min + 1) + min);

    min = 50;
    max = 100;
    let inc = Math.floor(Math.random() * (max - min + 1) + min);

    let self = this;

    setInterval(function() {
      self.setState({
        [a]: self.state[a] + inc,
        [b]: Math.floor(self.state[b] + inc * 0.7),
        [c]: Math.floor(self.state[c] + inc * 0.5),
        [d]: Math.floor(self.state[d] + inc * 0.3)
      });
    }, time * 1000);
  }

  componentDidMount() {
    console.log("componentDidMount ...");

    // let clock1 = new Clock('c1rw1', 'c1rw2', 'c1rw3', 'c1rw4')
    this.Clock("c1rw1", "c1rw2", "c1rw3", "c1rw4");
    this.Clock("c2rw1", "c2rw2", "c2rw3", "c2rw4");
  }
  render() {
    //Return view
    return (
      <div class="App">
        <header class="header">
          <div class="header-inner">
            <img src={logo} class="logo" />
            <h1>El camino del huevo</h1>
          </div>
        </header>
        <section class="gray"></section>

        <section class="content">
          <div class="table">
            <div class="column"></div>
            <div class="column">
              <p class="text color">Todos los depósitos</p>
            </div>
            <div class="column">
              <p class="text">Bogotá</p>
            </div>
            <div class="column">
              <p class="text">Medellín</p>
            </div>
          </div>

          <div class="table">
            <div class="column">
              <img src={image1} class="image" />
              <img src={image2} class="image" />
              <img src={image3} class="image" />
              <img src={image4} class="image" />
            </div>
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw1}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.c2rw1}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw1}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c2rw1}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw2}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>

              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw2}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.c2rw1}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw1}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c2rw1}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw2 - 25}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw3}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.c2rw1 - 33}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw1 - 33}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c2rw1 - 33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw2 - 33}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>s
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw4}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column green">
                      <span>{this.state.c2rw1 - 40}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw1 - 40}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c2rw1 - 40}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw2 - 40}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.c1rw1}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw1 - 20}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw1 - 40}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw2}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw2 - 20}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>161</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.c1rw2}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>xxxx</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>xx</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c3rw2 - 38}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw2 - 38}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>190</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.c1rw2}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44 - 53}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw2 - 48}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw3 - 28}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44 - 33}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.c1rw3}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44 - 50}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44 - 50}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw3 - 28}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw3 - 28}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
            </div>
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.c3rw1}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c2rw1}xxx</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.c3rw1}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.c3rw1}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>{this.state.c3rw1}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw44}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column"></div>
                  </div>
                </section>
                <footer>
                  <p>Huevos restantes</p>
                  <span>100</span>
                </footer>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

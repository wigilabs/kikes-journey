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
      c1rw1: "101",
      c1rw2: "102",
      c1rw3: "103",
      c1rw4: "104",
      c1rw5: "105",
      c1rw6: "106",
      c1rw7: "108",
      c1rw8: "109",
      c1total: ""
    };
  }
  render() {
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
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>{this.state.c1rw4}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column green">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>{this.state.cr1w5}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>{this.state.cr1w6}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>{this.state.cr1w7}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>{this.state.cr1w8}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column red">
                      <span>70</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>100</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>80</span>
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

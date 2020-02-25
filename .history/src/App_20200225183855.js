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
      c1rw11: "80",
      c1rw22: "90",
      c1rw33: "100",
      c1rw44: "110",
      c1total: "",
      c2rw1: "80",
      c2rw2: "80",
      c2rw3: "80",
      c2rw4: "80",
      c2rw11: "80",
      c2rw22: "80",
      c2rw33: "80",
      c2rw44: "80",
      c2total: "",
      c3rw1: "70",
      c3rw2: "70",
      c3rw3: "70",
      c3rw4: "70",
      c2total: "",
      min: "20",
      max: "1000",
      prodTime: "500000"
    };
  }
  render() {
    //Todos los depositos
    // col1 - 1
    setInterval(() => {
      this.setState({
        c1rw1: parseInt(this.state.c1rw1) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c1rw2: parseInt(this.state.c1rw2) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c1rw3: parseInt(this.state.c1rw3) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c1rw4: parseInt(this.state.c1rw4) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col1 - 1
    // col1 - 2
    setInterval(() => {
      this.setState({
        c1rw11: parseInt(this.state.c1rw11) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c1rw22: parseInt(this.state.c1rw22) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c1rw33: parseInt(this.state.c1rw33) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c1rw44: parseInt(this.state.c1rw44) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col1 - 2
    // col2 - 1
    setInterval(() => {
      this.setState({
        c2rw1: parseInt(this.state.c2rw1) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c2rw2: parseInt(this.state.c2rw2) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c2rw3: parseInt(this.state.c2rw3) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c2rw4: parseInt(this.state.c2rw4) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col2 - 1
    // col2 - 2
    setInterval(() => {
      this.setState({
        c2rw11: parseInt(this.state.c2rw11) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c2rw22: parseInt(this.state.c2rw22) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c2rw33: parseInt(this.state.c2rw33) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c2rw44: parseInt(this.state.c2rw44) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col2 - 2
    //col3
    setInterval(() => {
      this.setState({
        c3rw1: parseInt(this.state.c3rw1) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c3rw2: parseInt(this.state.c3rw2) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c3rw3: parseInt(this.state.c3rw3) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c3rw4: parseInt(this.state.c3rw4) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col3
    //Bogota
    // col1 - 1
    setInterval(() => {
      this.setState({
        c1rw1: parseInt(this.state.c1rw1) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c1rw2: parseInt(this.state.c1rw2) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c1rw3: parseInt(this.state.c1rw3) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c1rw4: parseInt(this.state.c1rw4) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col1 - 1
    // col1 - 2
    setInterval(() => {
      this.setState({
        c1rw11: parseInt(this.state.c1rw11) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c1rw22: parseInt(this.state.c1rw22) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c1rw33: parseInt(this.state.c1rw33) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c1rw44: parseInt(this.state.c1rw44) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col1 - 2
    // col2 - 1
    setInterval(() => {
      this.setState({
        c2rw1: parseInt(this.state.c2rw1) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c2rw2: parseInt(this.state.c2rw2) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c2rw3: parseInt(this.state.c2rw3) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c2rw4: parseInt(this.state.c2rw4) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col2 - 1
    // col2 - 2
    setInterval(() => {
      this.setState({
        c2rw11: parseInt(this.state.c2rw11) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c2rw22: parseInt(this.state.c2rw22) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c2rw33: parseInt(this.state.c2rw33) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c2rw44: parseInt(this.state.c2rw44) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col2 - 2
    //col3
    setInterval(() => {
      this.setState({
        c3rw1: parseInt(this.state.c3rw1) + 1
      });
    }, parseInt(this.prodTime));
    setInterval(() => {
      this.setState({
        c3rw2: parseInt(this.state.c3rw2) + 1
      });
    }, parseInt(this.prodTime) * 2);
    setInterval(() => {
      this.setState({
        c3rw3: parseInt(this.state.c3rw3) + 1
      });
    }, parseInt(this.prodTime) * 4);
    setInterval(() => {
      this.setState({
        c3rw4: parseInt(this.state.c3rw4) + 1
      });
    }, parseInt(this.prodTime) * 8);
    //end col3
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
                      <span>{this.state.c1rw11}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw11}</span>
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
                      <span>{this.state.c2rw2}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw2}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw22}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw22}</span>
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
                      <span>{this.state.c2rw3}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw3}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw33}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw33}</span>
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
                      <span>{this.state.c2rw4}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw4}</span>
                      <p>Huevo 3</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="column">
                      <span>{this.state.c1rw44}</span>
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
            <div class="column">
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.c1rw1 - 30}</span>
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
                      <span>{this.state.c1rw2 - 18}</span>
                      <p>Huevo 1</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c2rw2 - 38}</span>
                      <p>Huevo 2</p>
                    </div>
                    <div class="column">
                      <span>{this.state.c3rw2 - 48}</span>
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
                  <span>100</span>
                </footer>
              </div>
              <div class="box">
                <section>
                  <div class="row">
                    <div class="column yellow">
                      <span>{this.state.c1rw3 - 28}</span>
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
                      <span>{this.state.c1rw2 - 22}</span>
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

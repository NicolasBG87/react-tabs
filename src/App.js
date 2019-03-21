import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import TabPanel from "./components/TabPanel/TabPanel";
import MyFormComponent from "./components/MyForm";
import FakeServer from "./components/FakeServer";

const GlobalStyle = createGlobalStyle`
  html, body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700');
    font-family: 'Lato', sans-serif;
    padding: 0;
    margin: 0;
    & > div {
      height: 100vh;
      width: 100vw;
    }
  }
  * {
    box-sizing: border-box;
    outline: none;
  }
`;

const StyledApp = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

const App = () => {
  return (
    <StyledApp>
      <TabPanel data={data} vertical={false} />
      <GlobalStyle />
    </StyledApp>
  );
};

const data = [
  {
    title: "Text",
    content: (
      <div>
        <h3>You can place plain text inside tabs</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, incidunt
        obcaecati placeat distinctio laudantium corporis doloribus, culpa, eum
        expedita sapiente aut! Reprehenderit fuga dolore, temporibus nobis
        placeat ad distinctio consectetur? Dolorem labore nihil quasi incidunt
        amet provident commodi adipisci vel, ex officiis, possimus ab soluta
        odit laudantium delectus illum nisi atque aliquam non. Alias corporis
        voluptatum repudiandae obcaecati saepe iste. Et explicabo perspiciatis
        autem ratione, delectus nihil minima dolor adipisci, repellendus ea
        dicta quidem nisi ut enim, sint consequatur? Quibusdam error possimus
        enim totam delectus minima sunt alias eum porro?
      </div>
    )
  },
  {
    title: "HTML",
    content: (
      <div>
        <h3>...Images or any other HTML elements</h3>
        <img
          src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Cat"
          width={50 + "%"}
        />
        <img
          src="https://media.mnn.com/assets/images/2018/07/cat_one_eye_open.jpg.838x0_q80.jpg"
          alt="Cat"
          width={50 + "%"}
        />
        <hr />
        <input type="text" placeholder="Text Input" />
        <br />
        <button>Button</button>
      </div>
    )
  },
  {
    title: "Component",
    content: (
      <div>
        <h3>...or React Components</h3>
        {"<MyFormComponent />"}
        <hr />
        <MyFormComponent />
      </div>
    )
  },
  {
    title: "Remote",
    content: (
      <div>
        <h3>...http request on tab change</h3>
        <FakeServer />
      </div>
    )
  },
  {
    title: "Actions",
    content: (
      <div>
        <h3>...bottom bar with actions</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          delectus quasi deleniti doloribus possimus, eius earum commodi, hic
          explicabo odio nobis quidem suscipit magni dignissimos, omnis soluta
          molestiae animi obcaecati!Expedita eligendi alias veniam beatae
          exercitationem ipsa, necessitatibus eos culpa debitis, nostrum
          architecto accusamus? Nisi repellendus reprehenderit possimus quo ipsa
          repudiandae, soluta harum cupiditate optio et ipsam ipsum. Dolore, in!
        </p>
        <p>
          <b>Are you sure?</b>
        </p>
      </div>
    ),
    bBar: {
      yesAction: () => console.log("Accept"),
      noAction: () => console.log("Decline")
    }
  }
];

export default App;

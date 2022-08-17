import type { Component } from 'solid-js';

import styles from './App.module.css';
import {Hello} from "./Hello";
import {createEffect} from "solid-js";

const App: Component = () => {
  return (
    <div class={styles.App}>
        <Hello text={"Pappelapapp"} />
    </div>
  );
};

export default App;

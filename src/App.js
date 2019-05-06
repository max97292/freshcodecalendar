import React, {PureComponent} from "react"
import 'bootstrap/dist/css/bootstrap.css'

import Calendar from "./components/Calendar";

class App extends PureComponent {
    state = {

    }

    render() {
        return (
            <div className="App">

                <main>
                    <Calendar />
                </main>

                {/*<Article articles ={articles}/>*/}
            </div>
        );
    }
}

export default App;

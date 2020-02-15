import React from 'react'
import {Provider} from 'react-redux'
import './App.css'
import {HashRouter as Router, Route} from 'react-router-dom'

//components
import {NavBar} from './components/layout'
import Landing from './components/home/Landing'
import Movie from './components/home/Movie'

//redux
import store from './store'

function App()
{
  return  (
            <Provider store={store}>
              <Router>
                <div>
                  <NavBar />
                  <Route exact path='/' component={Landing} />
                  <Route exact path='/movie/:id' component={Movie} />
                </div>
              </Router>
            </Provider>
          )
}

export default App
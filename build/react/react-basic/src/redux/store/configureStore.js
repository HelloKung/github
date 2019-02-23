import { createStore } from 'redux'
import reducer from './../reducer'

const initialState = {
    menuName:"首页"
}

export default () => createStore(reducer)


import {combineReducers} from 'redux'
import postsReducer  from '../slices/posts'

// import postsReducer from './postsReducer'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer
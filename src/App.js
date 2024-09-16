import logo from './logo.svg';
import './App.css';
import Componenttest from './component/component';
import Counter from './Counter/Counter';
import ParentComponent from './ParentComponent/Parentcomponent';
import EventHandlingDemo from './eventHandling/eventHandling';
import LifeCycleDemo from './LifeCycle/lifeCycle';
import AnimatedButton from './animationExample/animationExample';
import TodoList from './Todo List/Todo List';
import Cintexdemo from './Hii/Cintextdemo'
import RoutingDemo from './routingDemo/routingDemo';
import StyledComponent from './styledComponent/styledComponent';
import EmotionExample from './cssjsDEmo/demo';
import ThemedApp from './themeExample/themeExample';
function App() {
  return (
    <div className="App">
      <p>Hello Everyone </p>
      <Componenttest/>
      <Counter/>
      <ParentComponent/>
      <LifeCycleDemo/>
      <EventHandlingDemo/>
      <AnimatedButton/>
      <TodoList/>
      <Cintexdemo/>
      <RoutingDemo/>
      <StyledComponent/>
      <EmotionExample/>
      <ThemedApp/>
    </div>
  );
}

export default App;
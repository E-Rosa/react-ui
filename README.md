# react-ui
React easy to use custom components.

# components
## ```<Carousel />```
A carousel that receives ``{children}`` and renders them as the content of a carousel. For each ``{children}`` passed there will be one extra page in the Carousel. As in:
```javascript
import { Carousel } from "@eliasrrosa/react-ui"

function Child1(){
  return <p>item 1</p>
}
function Child2(){
  return <p>item 2</p>
}

export default function App(){
  return (
    <Carousel>
      <Child1 />
      <Child2 />
    </Carousel>
  )
}
```

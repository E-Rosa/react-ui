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
This would be enough to have a basic carousel that can be navigated through the buttons. However, if you want to manipulate the pages of the Carousel from within the ``<Child1>`` or ``<Child2>``, you can use the following:

### ``CarouselContext``
The ``{children}`` of ``<Carousel />`` can consume ``CarouselContext`` through ``useContext()`` as in:

```javascript
import { CarouselContext } from "@eliasrrosa/react-ui"

export function Child1(){
  const carouselContext = useContext(CarouselContext);
  return <p>item 1</p>
}
```
From here, you can call:
  ``carouselContext.nextPage()``, 
  ``carouselContext.previousPage()``, 
  ``carouselContext.goToPage(page)`` and 
  ``carouselContext.addPage()`` 
to manipulate the ``<Carousel />`` from within ``{children}``


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
  + ``carouselContext.nextPage()``	, 
  + ``carouselContext.previousPage()``, 
  + ``carouselContext.goToPage(page)`` and 
  + ``carouselContext.addPage()`` 

to manipulate the ``<Carousel />`` from within ``{children}``.

## ``<FeedbackProvider>``
A context for displaying **error**, **success** and **loading** states to the user.
Wrap any elements as ``{children}`` of the ``<FeedbackProvider>`` and they will gain access to the ``FeedbackContext`` to be consumed using ``useContext()``, from which the methods: 
+ ``setError()``
+ ``setSuccess()``
+ ``setLoading()``

will be available, as in:

```javascript
import { FeedbackProvider, FeedbackContext } from "@eliasrrosa/react-ui"

export function Child1(){
  const feedbackContext = useContext(FeedbackContext);
  return (
    <button onClick={()=>{feedbackContext.setError("oops.")}}>setError</button>
  )
}

export function App(){
  return (
    <FeedbackProvider>
      <Child1 />
    </FeedbackProvider>
  )
}
```

## ``<Modal>``
A modal with: 
+ two options for position
+ opt-in background transparency
+ a context that allows its children to control it

``<Modal>`` requires two props, both derived from ``useState()``. The most basic iteration of a ``<Modal>```is as follows:

```javascript
import { Modal } from "@eliasrrosa/react-ui"

export function App(){
  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <p>Some content</p>
    </Modal>
  )
}
```
that would display a modal taking up the whole screen, with its content centered and a white background, with a 'close' button near the content. 

However, you can unlock the full potential of ``<Modal>`` by:
+ adjusting its default props
+ using ``ModalContext``

as in:
```javascript
import { Modal, ModalContext } from "@eliasrrosa/react-ui"

export function Child1(){
  const modalContext = useState(ModalContext);
  return (
    <button onClick={()=>{modalContext.setActive(false)}}>Close modal from child</button>
  )
}

export function App(){
  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <Child1 />
    </Modal>
  )
}
```
``ModalContext`` gives you:
+ ``setActive()``
+ ``setAlignment()``
+ ``setTransparent()``

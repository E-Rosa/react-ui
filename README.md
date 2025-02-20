# react-ui
React easy to use custom components.

# Introduction
The components section below will illustrate how to use each of the UI elements provided by @eliasrrosa/react-ui. To see the components working, access: [https://codesandbox.io/p/sandbox/eliasrroca-react-ui-nluynm]

# Usage
Install with: `npm i @eliasrrosa/react-ui@latest`.

If you would like to import the css for the components, in any .css file your app imports, declare: `@import "@eliasrrosa/react-ui"`

Then import any components you would like. As in: `import { FeedbackProvider } from "@eliasrrosa/react-ui"`

# components
## ```<Carousel />```
See this element working at: [https://codesandbox.io/p/sandbox/eliasrroca-react-ui-nluynm].

A carousel that receives ``{children}`` and renders them as in a paginated fashion. For each ``{children}`` passed there will be one extra page in the Carousel. As in:
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
This would be enough to have a basic carousel that can be navigated using the pagination buttons. However, if you want to manipulate the pages of the Carousel from within its ``{children}``, you can use the following:

### ``CarouselContext``
See this element working at: [https://codesandbox.io/p/sandbox/eliasrroca-react-ui-nluynm].

The ``{children}`` of ``<Carousel />`` can consume ``CarouselContext`` through ``useContext()`` as in:

```javascript
import { CarouselContext } from "@eliasrrosa/react-ui"
import { useContext } from "react"

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
See this element working at: [https://codesandbox.io/p/sandbox/eliasrroca-react-ui-nluynm].

A context for displaying **error**, **success** and **loading** states to the user.
Wrap any elements as ``{children}`` of the ``<FeedbackProvider>`` and they will gain access to the ``FeedbackContext`` to be consumed using ``useContext()``, from which the methods: 
+ ``setError()``
+ ``setSuccess()``
+ ``setLoading()``

will be available, as in:

```javascript
import { FeedbackProvider, FeedbackContext } from "@eliasrrosa/react-ui";
import { useContext } from "react";

export function Child1(){
  const feedbackContext = useContext(FeedbackContext);
  return (
   <button className="cButton" onClick={()=>{feedbackContext.setError("oops.")}}>setError</button>
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

It is also possible to create feedback messages outside a React Component by using the `emitSuccess()`, `emitError()` and `emitLoading()` functions.

## ``<Modal> (version < 2.0.0)``
See this element working at: [https://codesandbox.io/p/sandbox/eliasrroca-react-ui-nluynm].

A modal with: 
+ two options for position
+ opt-in background transparency
+ a context that allows the modal's ``{children}``to control it.

``<Modal>`` requires two props, both derived from ``useState()``. The most basic iteration of a ``<Modal>`` is as follows:

```javascript
import { Modal } from "@eliasrrosa/react-ui"
import { useState } from "react";

export function App(){
  const [isActive, setIsActive] = useState(true);
  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <p>Some content</p>
    </Modal>
  )
}
```
that would display a modal taking up the whole screen, with its content centered and a white background, with a 'close' button near the content. 

However, ``<Modal>`` also offers:
+ adjustable default props
+ ``ModalContext``, so that its ``{children}``can manipulate it.

as in:
```javascript
import { Modal, ModalContext } from "@eliasrrosa/react-ui"
import { useContext } from "react";

export function Child1(){
  const modalContext = useContext(ModalContext);
  return (
   <button className="cButton" onClick={()=>{modalContext.setActive(false)}}>Close modal from child</button>
  )
}

export function App(){
  return (
    <Modal 
      isActive={isActive} 
      setIsActive={setIsActive}
      defaultAlignment={"bottom-right"}
      defaultTransparent={true}
    >
      <Child1 />
    </Modal>
  )
}
```
``ModalContext`` gives you:
+ ``setActive()``
+ ``setAlignment()``
+ ``setTransparent()``

## Version Updates

From version 2.0.0 onwards, `<Modal />` has completely changed. It implements a new API, does not include context nor receives state setters as props. This solves a variety of problems with it.

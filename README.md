# rxjs-entendiendo-la-reactividad-en-js
Code repository for my talk "Entendiendo de una vez por todas eso de la reactividad" (Codemotion, Spain 2017)

# Table of Content
- [01 - Async datasources](#01)
- [02 - Callbacks](#02)
- [03 - New structures](#03)
- [04 - Seems an observable](#04)
- [05 - Observables](#05)
- [06 - Subjects](#06)
- [07 - Angular Auth](#07)

# Presentation (PPT)
The presentation can be found [here](https://www.slideshare.net/sema_hkd/entendiendo-la-reactividad-de-una-vez-por-todas-code-motion17).

# Examples
## 01 - Async DataSources <div id="01" />
Lorem ipsum
- *sync-way.ts*:
- *async-rp-way.ts*:

## 02 - Callbacks <div id="02" />
Basic examples to show different use of callbackers, sync and async.
- *Clicks*: asynchronous callback to log each click on the screen (inside the body).
- *Array*: synchronous callback to print through console the numbers contained in the array.
- *Fetch*: asynchronous callbacks for an AJAX request (success callback) and another callback for error handling.
- *File*: asynchronous callbacks for: line read, error handling and file processed.

## 03 - New Structures <div id="03" />
Improved examples (evolving the [previous one](#02)).
### notifier.js
This file defines the three types of callbacks seen in the previous examples, standardized in this *notifier* object:
- *onData*: executed for each stream or event produced/emitted.
- *onError*: executed when an error ocurred.
- *onEnd*: executed when the stream has completed.

This notifier is just a function that will receive these three callbacks; for instance:
```js
const myWatcher = notifier(
    (data) => { /* Data produced */ },
    (error) => { /* Error */ },
    () => { /* Stream complete */ },
);
```

### Examples:
- *Clicks*: this browserable example will observe the clicks emitted inside the body element. This click stream produced will be logged through the notifier object.
- *Array*: this example shows the numbers contained inside of an array using notifier object, which is populated with logger for trace elements and another one to trace the end of the array.
- *Fetch*: this example shows how perform a fetch operation and log the result if it was successful or the error if the request failed.
- *File*: last full example to show a case when the three callbacks could be used. This snippet will trace each line (dataCb), an error (errorCb) and the end of the file (endCb). The same file contains a second execution to force an error trying to read an inexisten file.

## 04 - Seems an observable <div id="04" />
- *new-array.js*:
- *someObs.js*:
- *createObs.js*:
- *createObs2.js*:

## 05 - Observables <div id="05" />
Lorem ipsum

## 06 - Subject <div id="06" />
- *simple-subject.js*:
- *death-subject.js*:

## 07 - Angular Auth <div id="07" />
Angular project made to show the use of subjects, subscribing to an source that emits the changes in the auth state (logged in / logged out). There are the following components in the UI:
- *Header*: it's the navbar and in its right side there is a button to switch between logged in and logged out.
- *Component one and three*: they are simple and plain objects which are subscribed to user's auth state.
- *Component two*: this component is also subscribed to the user's auth state, but after this initial step (subscription), it will be unsuscribed to show how this component won't listen changes anymore.
- *Core auth service*: service to log in or log out (mocked) and expose a method to subscribe to this changes.

# Disclaimer
Some of this example are focused in show how some concept or topic works. Please, don't follow the examples line by line. For instance, in the Angular example, there is no unsubscribe action, what it could introduce a memory leak, but exemplifies how subscription/unsubscribe works.
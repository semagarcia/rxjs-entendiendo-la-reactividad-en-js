# rxjs-entendiendo-la-reactividad-en-js
Code repository for my talk "Entendiendo de una vez por todas eso de la reactividad" (Codemotion, Spain 2017)

# Table of Content
- 01-async-datasources
- 02-callbacks
- 03-new-structures
- 04-seems-an-observable
- 06-Subject
- 07-angular-auth

# Presentation (PPT)
The presentation can be found [here](https://www.slideshare.net/sema_hkd/entendiendo-la-reactividad-de-una-vez-por-todas-code-motion17).

# Examples
## 01 - Async DataSources
Lorem ipsum

## 02 - Callbacks
Basic examples to show different use of callbackers, sync and async.

## 03 - New Structures
Lorem ipsum

## 04 - Seems an observable
Lorem ipsum

## 05 - Observables
Lorem ipsum

## 06 - Subject
Lorem ipsum

## 07 - Angular Auth
Angular project made to show the use of subjects, subscribing to an source that emits the changes in the auth state (logged in / logged out). There are the following components in the UI:
- Header: it's the navbar and in its right side there is a button to switch between logged in and logged out.
- Component one and three: they are simple and plain objects which are subscribed to user's auth state.
- Component two: this component is also subscribed to the user's auth state, but after this initial step (subscription), it will be unsuscribed to show how this component won't listen changes anymore.
- Core auth service: service to log in or log out (mocked) and expose a method to subscribe to this changes.

# Disclaimer
Some of this example are focused in show how some concept or topic works. Please, don't follow the examples line by line. For instance, in the Angular example, there is no unsubscribe action, what it could introduce a memory leak, but exemplifies how subscription/unsubscribe works.
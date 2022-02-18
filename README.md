# Motivation

This project is a test lab for the native features of the MØX protocol.
The proposal is to create a page that allows the user to perform various network functions, such as creating contexts, actors, etc.

## MØX Integration

- The møx SDK is placed in a react context, inside _src/context/mox.tsx_
- The SDK is initialized in _src/Router.tsx_
- The SDK functions is present in every molecule of this project _src/molecules/*.tsx_

navigator.requestMIDIAccess()
  .then((access) => {

     console.log(access.inputs);

  });
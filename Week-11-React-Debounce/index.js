let currentClock;

function searchbackend(){
    console.log('Request sent to backend');
}

function debounceSearchBackend(){
   
    clearTimeout(currentClock);  // I need to clear old clock before starting a new clock
    currentClock = setTimeout(searchbackend, 30);  // re-start a clock for 30 mili seconds

}

debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
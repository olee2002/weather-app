/* eslint-disable react-hooks/exhaustive-deps, jsx-a11y/alt-text*/
import React, { useState, useEffect, useRef } from 'react'

let autoComplete

const loadScript = (url, callback) => {
   let script = document.createElement('script')
   script.type = 'text/javascript'

   if (script.readyState) {
      script.onreadystatechange = function () {
         if (
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
         ) {
            script.onreadystatechange = null
            callback()
         }
      }
   } else {
      script.onload = () => callback()
   }

   script.src = url
   document.getElementsByTagName('head')[0].appendChild(script)
}

function handleScriptLoad(updateQuery, autoCompleteRef) {
   autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ['(cities)'], componentRestrictions: { country: 'us' } }
   )
   autoComplete.setFields(['address_components', 'formatted_address'])
   autoComplete.addListener('place_changed', () =>
      handlePlaceSelect(updateQuery)
   )
}

async function handlePlaceSelect(updateQuery) {
   const addressObject = autoComplete.getPlace()
   const query = addressObject.formatted_address
   updateQuery(query)
}

function SearchLocationInput({ handleLocation }) {
   const [query, setQuery] = useState('')
   const autoCompleteRef = useRef(null)

   useEffect(() => {
      loadScript(
         `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
         () => handleScriptLoad(setQuery, autoCompleteRef)
      )
   }, [])

   useEffect(()=>{
      handleLocation(query)
   },[query])

   return (
         <input
            ref={autoCompleteRef}
            onChange={(event) => {
               setQuery(event.target.value)
            }}
            placeholder='Start typing...and select a dropdown'
            value={query}
         />
   )
}

export default SearchLocationInput

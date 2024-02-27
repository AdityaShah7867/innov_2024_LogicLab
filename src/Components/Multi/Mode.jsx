import React from 'react'

const Mode = () => {
  return (
    <div>
        
<form class=" mt-4">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
    <option selected>Choose Mode</option>
    <option value="Of">Offline </option>
    <option value="ON">Online</option>
   
  </select>
</form>

    </div>
  )
}

export default Mode
import { useReducer, useState } from "react"
import Dexie from "dexie";
import { useStorageIndexDB } from "~/composables/indexDB";

export const storageWebsiteDB = useStorageIndexDB('website_db', '++id,  handle')


  
export const HandleButton = () => {


  const [count, increase] = useReducer((c) => c + 1, 0)


  return (
    <button
      onClick={() => {
        increase()
      }}
      type="button"
      className="flex flex-row items-center px-4 py-2 text-sm rounded-lg transition-all border-none
      shadow-gray-1 shadow-lg hover:shadow-md
      text-gray-12 bg-gray-2
      hover:bg-gray-3 
      active:bg-gray-4
      disabled:bg-gray-1 disabled:text-gray-11
      active:scale-105"
    >
      选择文件
    </button>
  )
}

async function getFileHandle() {
  if ('showOpenFilePicker' in window) {
    const [fileHandle] = await (window as any).showOpenFilePicker()
    return fileHandle
  }
}

async function writeFile(fileHandle, contents) {
  var reader = new FileReader();
  // const writable = await fileHandle.createWritable()
  

  // const file = await fileHandle.getFile()
  // await writable.seek(file.size)
  // await writable.write(`\n ${formatTime(Date.now())} -- ${location.href}  --  ${contents}`)
  // await writable.close()
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export default HandleButton

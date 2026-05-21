import { useState,useEffect } from "react";


export function usePersistedForm<T>(key : string , defaultValue :T){
      const[value , setValue] = useState<T>(() => {
            if(typeof window=='undefined') return defaultValue

            try {
                  const sorted = localStorage.getItem(key)
                  if(!sorted){
                        return defaultValue
                  }else{
                        return JSON.parse(sorted)
                  }
            } catch (error) {
                  return defaultValue
            }
      })

      useEffect(()=>{
            localStorage.setItem(key , JSON.stringify(value))

      } , [key , value])

      return [value , setValue] as const;
}
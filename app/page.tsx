/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [helper, setHelper] = useState<any>(null)

  useEffect(() => {
    if(!helper) {
      const fetchData = async() => {
        const data = await axios.get(`/api/quote`)
        if(data) {
          setHelper(data)
        }
      }

      fetchData()
    }
  }, [helper])

  return (
    <>
      {helper && (
        <div>{JSON.stringify(helper)}</div>
      )}
    </>
  );
}

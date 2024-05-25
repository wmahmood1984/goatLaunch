import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Marketplace.css"

export default function Card({uri,id,price}) {
    const [data,setData] = useState()
    
    useEffect(()=>{
        const abc = async ()=>{
            const _data = await axios.get(uri)
            console.log("uri",_data)
            setData(_data.data)
        }
        abc()

    },[])



  return (data && 
    <Link 
    to={`/details/${id}`}
    >
    <div class="aspect-w-1 aspect-h-1 overflow-hidden">
                        <img
                          class="object-cover transition-all lg:group-hover:scale-110"
                          src={data.image}
                        />
                        <div class="absolute inset-0 flex items-end">
                          <div class="flex h-[120px] w-full flex-col justify-end bg-gradient-to-t from-[rgba(0,0,0,0.48)] to-transparent p-4">
                            <p class="flex items-center">
                              <a
                                class="GA-home-main-ad ts-body-3 truncate font-bold text-button-text line-clamp-2 link-overlay lg:ts-body-2"
                                href="/collection/the-weirdo-ghost-gang/items"
                              >
                                {data.name}
                              </a>
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="ml-1 h-6 w-6 text-primary-1"
                              >
                                <path fill="#fff" d="M6 6h12v12H6z"></path>
                                <path
                                  d="M22 12.469c0 .699-.168 1.347-.504 1.941a3.594 3.594 0 0 1-1.351 1.383c.015.105.023.27.023.492 0 1.059-.355 1.957-1.059 2.7-.707.745-1.558 1.117-2.554 1.117-.446 0-.871-.082-1.274-.247a3.873 3.873 0 0 1-1.351 1.551A3.358 3.358 0 0 1 12 22a3.39 3.39 0 0 1-1.941-.582 3.787 3.787 0 0 1-1.34-1.563 3.332 3.332 0 0 1-1.274.247c-.996 0-1.851-.372-2.566-1.118-.715-.742-1.07-1.644-1.07-2.699 0-.117.015-.281.043-.492A3.622 3.622 0 0 1 2.5 14.41 3.917 3.917 0 0 1 2 12.47c0-.742.188-1.426.559-2.043a3.443 3.443 0 0 1 1.496-1.371 3.863 3.863 0 0 1-.246-1.34c0-1.055.355-1.957 1.07-2.7.715-.742 1.57-1.117 2.566-1.117.446 0 .871.082 1.274.247a3.874 3.874 0 0 1 1.351-1.551A3.388 3.388 0 0 1 12 2c.7 0 1.344.2 1.93.59.586.394 1.039.91 1.351 1.55a3.331 3.331 0 0 1 1.274-.245c.996 0 1.847.37 2.554 1.117.707.746 1.059 1.644 1.059 2.699 0 .492-.074.937-.223 1.34a3.443 3.443 0 0 1 1.496 1.37c.372.622.559 1.306.559 2.048ZM11.574 15.48l4.13-6.183a.717.717 0 0 0 .1-.535.654.654 0 0 0-.3-.446.76.76 0 0 0-.535-.113.685.685 0 0 0-.469.29l-3.637 5.468-1.675-1.672a.665.665 0 0 0-.512-.21.79.79 0 0 0-.512.21c-.133.133-.2.3-.2.504 0 .2.067.367.2.504l2.3 2.3.114.09c.133.09.27.133.402.133a.655.655 0 0 0 .594-.34Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </p>
                            <p class="ts-body-3 mt-1 text-button-text">
                              Floor {price} Ξ
                            </p>
                          </div>
                        </div>
                      </div>
    </Link>
  )
}

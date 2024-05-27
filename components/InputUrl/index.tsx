'use client'

import React, { useState, useEffect, useRef } from 'react'
import Style from './InputUrl.module.css'
import { Service, Subcategory } from './interfaces'
import { useUser } from '@/contexts/UserContext'
import { Categories } from '@/routes/categories'

const InputUrl = ({ category }: Categories) => {
  const { sources } = useUser()
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const selectedCategory: Subcategory[] =
    sources?.categories?.find((item) => item.url === category.id)
      ?.subcategories || []
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [value, setValue] = useState<string>('')
  const [url, setUrl] = useState<string>('#')
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleProtocolURL = (url: string, addProtocol: boolean): string => {
    const hasProtocol = /^(https?:\/\/)/.test(url)

    if (addProtocol) {
      return hasProtocol ? url : 'https://' + url
    } else {
      return hasProtocol ? url.replace(/^(https?:\/\/)/, '') : url
    }
  }
  const isValidURL = (url: string): boolean => {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/
    return urlPattern.test(url)
  }
  const handleFocus = () => {
    inputRef.current?.focus()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setIsValid(isValidURL(e.target.value))
    handleFocus()
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()

      if (isValid) {
        buttonRef.current?.click()
        // const audio = new Audio('/done.mp3')
        // audio.play()
      } else {
        handleFocus()
        // const audio = new Audio('/error.mp3')
        // audio.play()
      }
    }
  }
  const handleServiceSelected = (service: Service) => {
    setSelectedService(service)
    inputRef?.current?.focus()
  }

  // Update the URL
  useEffect(() => {
    if (isValid) {
      setUrl(
        selectedService?.url +
          handleProtocolURL(value, selectedService?.protocol ? true : false)
      )
    } else {
      setUrl('#')
      console.log('Type a valid URL')
    }
  }, [selectedService, isValid, value])

  // Set the first service as selected
  useEffect(() => {
    if (
      selectedCategory.length > 0 &&
      selectedCategory[0].services.length > 0
    ) {
      setSelectedService(selectedCategory[0].services[0])
    }
  }, [selectedCategory])

  // Focus on input
  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <section className="home">
      <div className="box">
        <h1>{category.title}</h1>

        <div className={Style.InputUrl}>
          {selectedService?.unavailable ? (
            <p>This service is unavailable</p>
          ) : (
            <div>
              <input
                ref={inputRef}
                type="url"
                onChange={(e) => handleChange(e)}
                onKeyDown={handleKeyDown}
                placeholder="Type a URL"
                autoComplete="on"
              />
              <a
                ref={buttonRef}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={
                  isValid
                    ? undefined
                    : (event) => {
                        event.preventDefault()
                        handleFocus()
                      }
                }
              >
                Check
              </a>
            </div>
          )}
        </div>

        <div className={Style.containerDescription}>
          <figure>{category.icon}</figure>
          <p>{category.description}</p>
        </div>
      </div>

      <div className="box">
        <div className={Style.servicesContainer}>
          {selectedCategory.map((subcategory, index) => (
            <div key={index} className={Style.radioContainer}>
              {<h2>{subcategory?.title ?? 'Source'}</h2>}

              {subcategory.services.map((service, subIndex) => (
                <button
                  key={subIndex}
                  className={`${Style.radioButton} ${
                    selectedService?.url === service.url ? Style.selected : ''
                  }`}
                  onClick={() => handleServiceSelected(service)}
                  translate="no"
                >
                  {service.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InputUrl

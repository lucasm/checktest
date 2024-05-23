import React, { useState, useEffect, useRef, ReactElement } from 'react'
import Style from './InputUrl.module.css'
import { PropsCategory, Service, Subcategory } from './interfaces'
import { useUser } from '@/contexts/UserContext'

const InputUrl = ({ category }: PropsCategory) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [url, setUrl] = useState<string>('#')
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const { sources } = useUser()
  const selectedCategory: Subcategory[] =
    sources?.categories?.find((item) => item.url === category)?.subcategories ||
    []

  const removeProtocol = (url: string) => {
    return url.replace(/^(https?:\/\/)?/, '')
  }
  const isValidURL = (url: string) => {
    const urlPattern = /^https:\/\/([\w-]+\.)+[\w-]+(\/[\w- ;,./?%&=]*)?$/
    return urlPattern.test(url)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleUrlCheck(e)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleUrlCheck(e)
    }
  }
  const handleUrlCheck = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (isValidURL(inputValue)) {
      const finalUrl =
        selectedService?.protocol === true
          ? selectedService?.url + inputValue
          : selectedService?.url + removeProtocol(inputValue)

      setUrl(finalUrl)
    } else {
      setUrl('#')
      e.preventDefault()
      alert('Type a valid URL')
    }
    inputRef?.current?.focus()
  }

  const handleServiceSelection = (service: Service) => {
    setSelectedService(service)
    inputRef?.current?.focus()
  }

  useEffect(() => {
    if (
      selectedCategory.length > 0 &&
      selectedCategory[0].services.length > 0
    ) {
      setSelectedService(selectedCategory[0].services[0])
    }
  }, [selectedCategory])

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <>
      <div className={Style.InputUrl}>
        {selectedService?.unavailable ? (
          <p className={Style.unavailable}>This service is unavailable</p>
        ) : (
          <div>
            <input
              type="url"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a URL"
              autoComplete="on"
              ref={inputRef}
            />
            <a
              href={url}
              onClick={(e) => handleButtonClick(e)}
              target={'_blank'}
              rel="noopener noreferrer"
              ref={buttonRef}
            >
              Check
            </a>
          </div>
        )}
      </div>

      <div className={Style.servicesContainer}>
        {/* <h2>Select a source:</h2> */}

        {selectedCategory.map((category, index) => (
          <div key={index}>
            {category.title && <h2>{category.title}</h2>}
            {category.services.map((service, subIndex) => (
              <div key={subIndex} className={Style.radioContainer}>
                <button
                  className={`${Style.radioButton} ${
                    selectedService?.url === service.url ? Style.selected : ''
                  }`}
                  onClick={() => handleServiceSelection(service)}
                >
                  {service.name}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default InputUrl

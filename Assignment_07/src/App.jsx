import React from 'react'
import { useState, useEffect } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });

  const [focusField, setFocusField] = useState(null)
  const [errors, setErrors] = useState({})
  const [filledPercentage, setFilledPercentage] = useState(0)

  const handleFocus = (field) => {
    setFocusField(field)
  }

  const formValidation = (field, value) => {
    switch (field) {

      case "firstName":
        if (value.trim() == "") return "First name is required"
        if (value.length < 2) return "First name must be at least 2 characters"
        return undefined

      case "email":
        if (value.trim() == "") return "Email is required"
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email address"
        return undefined

      case "phone":
        if (value.trim() == "") return "Phone number is required"
        if (!/^[+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-()]/g, ""))) return "Please enter a valid phone number"
        return undefined

      case "zipCode":
        if (value.trim() == "") return "ZIP code is required"
        if (!/^\d{5}$/.test(value)) return "Please enter a valid 5-digit ZIP code"
        return undefined


    }
  }

  const handleBlur = (field) => {
    const error = formValidation(field, formData[field])
    setErrors((prev) => ({ ...prev, [field]: error }))
    setFocusField(null)
  }


  useEffect(() => {
    const requiredFilled = [
      "firstName",
      "email",
      "phone",
      "zipCode"];

    const requiredFilledPers = requiredFilled.filter((field) => formData[field].trim() !== "")
    const percentage = Math.round((requiredFilledPers.length / requiredFilled.length) * 100);
    setFilledPercentage(percentage)
  }, [formData]);


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    const error = formValidation(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }


  return (
    <>
      <div className='min-h-screen bg-black flex justify-center items-center p-4'>
        <div className='w-full max-w-4xl p-8 border border-gray-500 text-center text-white'>
          <h1 className='text-4xl font-bold'>Student Feedback Form</h1>
          <p className='mt-2 text-gray-400'>Please fill out all the required fields below</p>

          <div className='flex justify-between'>
            <span className='text-gray-300'>Form Completion</span>
            <span className='text-white'>{filledPercentage}%</span>
          </div>

          <div className='h-2 mt-2 w-full bg-gray-700'>
            <div className={`h-2 transition-all duration-300
            ${filledPercentage < 100
                ? "bg-blue-500"
                : "bg-green-500"
              }
            `} style={
                {
                  width: `${filledPercentage}%`
                }
             }>
            

            </div>

          </div>

          <form className='mt-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* first name */}
              <div className='space-y-2'>
                <label htmlFor="firstName" className='text-gray-300 block text-left'>First Name *</label>
                <input
                  type="text"
                  name='firstName'
                  className={`w-full
                    border text-white px-3 py-4 placeholder-text-white
                    focus:outline-none
                    focus:border border-white transition-all duration-300
                    ${focusField == "firstName"
                      ? "shadow-lg shadow-blue-500/20"
                      : ""
                    }

                    ${errors.firstName
                      ? "border border-red-500 animate-pulse"
                      : formData.firstName && !errors.firstName
                        ? "border border-green-500"
                        : "border border-gray-500"
                    }

                  `}
                  placeholder='Enter your first name'
                  onFocus={() => handleFocus("firstName")}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => handleBlur("firstName")}
                />
                {
                  errors.firstName && (
                    <span className='text-red-500 mt-2 w-full block  text-left animate-pulse'>{errors.firstName}</span>
                  )
                }

                {
                  formData.firstName && !errors.firstName && (
                    <span className='text-green-500 mt-2 w-full block text-left animate-pulse'>✓ Looks good!</span>
                  )
                }
              </div>
              {/* email address */}
              <div className='space-y-2'>
                <label htmlFor="email" className='text-gray-300 block text-left'>Email Address *</label>
                <input
                  type="text"
                  name='email'
                  className={`w-full
                    border text-white px-3 py-4 placeholder-text-white
                    focus:outline-none
                    focus:border border-white transition-all duration-300
                    ${focusField == "email"
                      ? "shadow-lg shadow-blue-500/20"
                      : ""
                    }

                    ${errors.email
                      ? "border border-red-500 animate-pulse"
                      : formData.email && !errors.email
                        ? "border border-green-500"
                        : "border border-gray-500"
                    }

                  `}
                  placeholder='Enter your email address'
                  onFocus={() => handleFocus("email")}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => handleBlur("email")}
                />
                {
                  errors.email && (
                    <span className='text-red-500 mt-2 w-full block  text-left animate-pulse'>{errors.email}</span>
                  )
                }

                {
                  formData.email && !errors.email && (
                    <span className='text-green-500 mt-2 w-full block text-left animate-pulse'>✓ Looks good!</span>
                  )
                }
              </div>
            </div>

            {/* phone number  */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
              <div className='space-y-2'>
                <label htmlFor="phone" className='text-gray-300 block text-left'>Phone Number *</label>
                <input
                  type="text"
                  name='phone'
                  className={`w-full
                    border text-white px-3 py-4 placeholder-text-white
                    focus:outline-none
                    focus:border border-white transition-all duration-300
                    ${focusField == "phone"
                      ? "shadow-lg shadow-blue-500/20"
                      : ""
                    }

                    ${errors.phone
                      ? "border border-red-500 animate-pulse"
                      : formData.phone && !errors.phone
                        ? "border border-green-500"
                        : "border border-gray-500"
                    }

                  `}
                  placeholder='Enter your phone number'
                  onFocus={() => handleFocus("phone")}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => handleBlur("phone")}
                />
                {
                  errors.phone && (
                    <span className='text-red-500 mt-2 w-full block  text-left animate-pulse'>{errors.phone}</span>
                  )
                }

                {
                  formData.phone && !errors.phone && (
                    <span className='text-green-500 mt-2 w-full block text-left animate-pulse'>✓ Great!</span>
                  )
                }
              </div>
              {/* ZIP Code */}
              <div className='space-y-2'>
                <label htmlFor="zipCode" className='text-gray-300 block text-left'>ZIP Code *</label>
                <input
                  type="text"
                  name='zipCode'
                  className={`w-full
                    border text-white px-3 py-4 placeholder-text-white
                    focus:outline-none
                    focus:border border-white transition-all duration-300
                    ${focusField == "zipCode"
                      ? "shadow-lg shadow-blue-500/20"
                      : ""
                    }

                    ${errors.zipCode
                      ? "border border-red-500 animate-pulse"
                      : formData.zipCode && !errors.zipCode
                        ? "border border-green-500"
                        : "border border-gray-500"
                    }

                  `}
                  placeholder='12345'
                  onFocus={() => handleFocus("zipCode")}
                  onChange={(e) => handleChange(e)}
                  onBlur={() => handleBlur("zipCode")}
                />
                {
                  errors.zipCode && (
                    <span className='text-red-500 mt-2 w-full block  text-left animate-pulse'>{errors.zipCode}</span>
                  )
                }

                {
                  formData.zipCode && !errors.zipCode && (
                    <span className='text-green-500 mt-2 w-full block text-left animate-pulse'>✓ Valid ZIP!</span>
                  )
                }
              </div>
            </div>

            {/* txt area */}
            <div className='space-y-2 mt-4'>
              <label htmlFor="message" className='text-gray-300 block text-left'>Additional Message (Optional) *</label>
              <textarea
                type="text"
                name='message'
                className={`w-full
                    border text-white px-3 py-4 placeholder-text-white
                    focus:outline-none
                    focus:border border-white transition-all duration-300
                    ${focusField == "message"
                    ? "shadow-lg shadow-blue-500/20"
                    : ""
                  }

                    ${errors.message
                    ? "border border-red-500 animate-pulse"
                    : formData.message && !errors.message
                      ? "border border-green-500"
                      : "border border-gray-500"
                  }

                  `}
                placeholder='Enter messages'
                onFocus={() => handleFocus("message")}
                onChange={(e) => handleChange(e)}
                onBlur={() => handleBlur("message")}
              />

              {
                formData.message && (
                  <span className='text-blue-500 mt-2 w-full block text-left animate-pulse'>💬 Thanks for the additional info!</span>
                )
              }
            </div>

            {/* Submit Button */}

            <button
              disabled={filledPercentage < 100}
              className={`w-full px-3 py-4 font-semibold  text-white mt-4
              ${filledPercentage < 100
                  ? "border border-gray-300"
                  : "border border-green-300 hover:bg-green-500"
                }
              `}>

              {
                filledPercentage < 100
                  ? `Complete Form (${filledPercentage}% Done)`
                  : "Submit Registration Form (Ready)"
              }

            </button>

          </form>

        </div>
        Hello webX learner
      </div >
    </>
  )
}

export default App

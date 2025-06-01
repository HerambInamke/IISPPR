import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactInfo = () => {
    return (
        <div className="bg-white w-full p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
            
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-800">Address</h3>
                        <p className="text-gray-600">123 Nature Street, Green City, Earth</p>
                    </div>
                </div>
                
                <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                </div>
                
                <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600">info@iisppr.org</p>
                    </div>
                </div>
                
                <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-800">Working Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                        <p className="text-gray-600">Saturday: 10am - 2pm</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo

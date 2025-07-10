import { useState, FormEvent } from 'react'
import { Teacher } from '@/types/teacher'
interface Props {
  initialData?: Teacher
  onSubmit: (data: Teacher) => void
  onCancel: () => void
}
const emptyForm: Teacher = {
  id: '',
  name: '',
  subject: '',
  email: '',
  phone: '',
  paymentStatus: 'unpaid',
}
const TeacherForm: React.FC<Props> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Teacher>(initialData || emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof Teacher, string>>>({})
  const validate = () => {
    const newErrors: typeof errors = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email required'
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    return newErrors
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    onSubmit({ ...formData, id: formData.id || Date.now().toString() })
  }
  const handleChange = (field: keyof Teacher, value: string) => {
    setFormData({ ...formData, [field]: value })
    setErrors({ ...errors, [field]: undefined })
  }
  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-lg w-full">
      <h3 className="text-xl font-semibold mb-4">{initialData ? 'Edit' : 'Add'} Teacher</h3>
      {['name', 'subject', 'email', 'phone'].map(field => (
        <div key={field} className="mb-4">
          <label className="block font-medium mb-1 capitalize" htmlFor={field}>{field}</label>
          <input
            id={field}
            type="text"
            className={`w-full px-3 py-2 border rounded ${errors[field as keyof Teacher] ? 'border-red-500' : 'border-gray-300'}`}
            value={formData[field as keyof Teacher] || ''}
            onChange={(e) => handleChange(field as keyof Teacher, e.target.value)}
          />
          {errors[field as keyof Teacher] && <p className="text-red-500 text-sm">{errors[field as keyof Teacher]}</p>}
        </div>
      ))}
      <div className="mb-4">
        <label className="block font-medium mb-1">Payment Status</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded"
          value={formData.paymentStatus}
          onChange={(e) => handleChange('paymentStatus', e.target.value)}
        >
          <option value="paid">Paid</option>
          <option value="unpaid">Unpaid</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {initialData ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  )
}
export default TeacherForm

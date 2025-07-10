import React from 'react'
import { Teacher } from '@/types/teacher'
interface Props { teachers: Teacher[] }
const TeacherList: React.FC<Props> = ({ teachers }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Subject</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Payment</th>
        </tr>
      </thead>
      <tbody>
        {teachers.map(t => (
          <tr key={t.id} className="border-t">
            <td className="px-4 py-2">{t.name}</td>
            <td className="px-4 py-2">{t.subject}</td>
            <td className="px-4 py-2">{t.email}</td>
            <td className="px-4 py-2">
              <span className={t.paymentStatus === 'paid' ? 'text-green-600' : 'text-red-600'}>
                {t.paymentStatus}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
export default TeacherList

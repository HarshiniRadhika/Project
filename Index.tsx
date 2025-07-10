import React from 'react'
import TeacherList from '@/components/teachers/TeacherList'
import { Teacher } from '@/types/teacher'
const demoTeachers: Teacher[] = [
  { id: '1', name: 'Alice Smith', subject: 'Math', email: 'alice@example.com', phone: '123-4567', paymentStatus: 'paid' },
  { id: '2', name: 'Bob Jones', subject: 'History', email: 'bob@example.com', phone: '234-5678', paymentStatus: 'unpaid' },
]
const TeachersPage: React.FC = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Teachers</h2>
    <TeacherList teachers={demoTeachers} />
  </div>
)
export default TeachersPage

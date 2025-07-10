import { useState } from 'react'
import TeacherList from '@/components/teachers/TeacherList'
import TeacherForm from '@/components/teachers/TeacherForm'
import { Teacher } from '@/types/teacher'
const TeachersPage: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null)
  const [showForm, setShowForm] = useState(false)
  const handleSubmit = (teacher: Teacher) => {
    setTeachers(prev =>
      prev.some(t => t.id === teacher.id)
        ? prev.map(t => (t.id === teacher.id ? teacher : t))
        : [...prev, teacher]
    )
    setShowForm(false)
    setEditingTeacher(null)
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Teachers</h2>
        <button onClick={() => { setShowForm(true); setEditingTeacher(null) }} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Teacher
        </button>
      </div>
      {showForm && (
        <TeacherForm
          initialData={editingTeacher ?? undefined}
          onSubmit={handleSubmit}
          onCancel={() => { setShowForm(false); setEditingTeacher(null) }}
        />
      )}
      <TeacherList teachers={teachers} />
    </div>
  )
}
export default TeachersPage

